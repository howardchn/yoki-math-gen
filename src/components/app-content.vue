<template>
<div class="container text-center">
    <template>
        <nav aria-label="breadcrumb">
            <ol class="breadcrumb">
                <li class="breadcrumb-item"><a href="./">主菜单</a></li>
                <li class="breadcrumb-item active" aria-current="page">
                    试题 {{ title }} (<timer-board ref="timerView"></timer-board>)
                </li>
            </ol>
        </nav>
    </template>
    <template v-if="submitted">
        <h2 class="title">当前得分：<span style="color:red">{{ Math.round(score, 0) }}</span></h2>
        <question-list v-bind:questions="questions" v-bind:editing="false"></question-list>
    </template>
    <template v-else-if="inChecking">
        <h2 class="title">请认真检查，确保正确后再提交哦！</h2>
        <question-list v-bind:questions="questions" v-bind:editing="true"></question-list>
        <div>
            <button type="button" class="btn btn-success" @click="done">提交</button>
        </div>
    </template>
    <template v-else-if="finished">
        <h2 class="title">恭喜，您已经完成 <span style="color: green;">{{ count }}</span> 道练习</h2>
        <div>
            <button type="button" class="btn btn-warning" @click="check">检查</button>
            <button type="button" class="btn btn-success" @click="done">提交</button>
        </div>
    </template>
    <template v-else>
        <div class="form-group">
            <h1><label for="questionLabel">{{ currentQuestion.expr }}</label></h1>
            <!-- <input type="number" class="form-control offset-sm-3 col-sm-6" id="questionLabel" placeholder="答案是？" v-model="answer" @keyup.enter="next"> -->
            <div class="offset-sm-3 col-sm-6">
                <div class="row" v-if="currentQuestion.requireMod">
                    <div class="col-7" style="padding-right: 5px;">
                        <input type="number" class="form-control" id="questionLabel" placeholder="答案是？" v-model="answer" @keyup.enter="nextFocus">
                    </div>
                    <input type="number" class="form-control col-5" placeholder="余数是？" v-model="mod" @keyup.enter="next">
                </div>
                <template v-else>
                    <input type="number" class="form-control" id="questionLabel" placeholder="答案是？" v-model="answer" @keyup.enter="next">
                </template>
            </div>
        </div>
        <button type="button" class="btn btn-success" @click="next">下一题</button>
        <p style="margin-top: 20px;" v-if="!finished">
            <span>当前 {{ current + 1 }} / {{ count }}</span>
        </p>
    </template>
</div>
</template>

<script>
import conf from '../conf'
import Timer from './timer-board.vue'
import QustionList from './question-list.vue'
import { Score } from '../scoreService'
import menu from '../examsMenu'

function getTitle(path) {
    let result = ''
    let menuItems = menu.filter(m => m.href == path)
    if (menuItems.length > 0) {
        result += ' - ' + menuItems[0].name
    }

    return result
}

export default {
    components: {
        'question-list': QustionList,
        'timer-board': Timer
    },
    props: [ 'method', 'type' ],
    data: function () {
        let questions = []
        let questionCount = conf.getCount()
        for (let i = 0; i < questionCount; i++) {
            let question = this.method()
            question.id = i
            questions.push(question)
        }

        return {
            current: 0,
            questions,
            answer: '',
            mod: '',
            count: questionCount,
            finished: false,
            inChecking: false,
            submitted: false,
            score: 0,
            solveTimespan: 0,
            totalTimespan: 0,
            title: getTitle(this.$route.fullPath)
        }
    },
    computed: {
        currentQuestion: function () {
            return this.questions[this.current]
        }
    },
    mounted: function() {
        this.$refs.timerView.start()            
    },
    methods: {
        next: function () {
            if (this.answer === null || this.answer === undefined || this.answer.trim() === '') {
                return
            }

            let temp = this.questions[this.current]
            temp.actual = this.answer
            temp.correct = (temp.actual == temp.v)

            if (temp.requireMod) {
                temp.actualMod = this.mod || 0
            }
            
            this.answer = ''
            this.mod = ''
            
            if (this.questions.filter(q => q.actual != undefined).length === this.count) {
                this.finished = true
            } 
            if (this.current < this.count - 1) {
                this.current++
            }
        },
        done: function () {
            this.$refs.timerView.stop()
            this.submitted = true
            this.totalTimespan = this.$refs.timerView.elapsedSeconds
            this.questions.forEach(q => { 
                q.correct = (q.actual == q.v)
                
                if (q.correct && q.requireMod) {
                    q.correct = q.correct && q.actualMod == q.mod
                }
            })
            this.score = this.questions.filter(q => q.correct).length * 100 / this.count

            let score = new Score()
            score.set('count', this.count)
            score.set('score', this.score)
            score.set('type', this.type)
            score.set('workingTimespan', this.solveTimespan || this.totalTimespan)
            score.set('totalTimespan', this.totalTimespan)
            score.set('errorDetails', this.questions.filter(q => !q.correct).map(q => q.expr + q.actual).join(';'))
            score.save()
        },
        check: function() {
            this.inChecking = true
            this.solveTimespan = this.$refs.timerView.elapsedSeconds
        },
        nextFocus: function($event) {
            $event.target.nextElementSibling.forcus()
        }
    }
}
</script>

<style>
.btn {
    padding-left: 20px;
    padding-right: 20px;
}
</style>


