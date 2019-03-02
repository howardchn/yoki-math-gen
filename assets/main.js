const getTemplate = function () {
    return {
        template: `
            <div class="list-group">
                <router-link :to="item.href" class="list-group-item list-group-item-action" v-for="item in items">{{item.name}}</a>
            </div>
        `,
        data: function () {
            return {
                items: [{
                    name: '99乘法',
                    href: '/math-fixnum-multi-simple'
                }, {
                    name: '10k以下加减法',
                    href: 'math-fixnum-addmin-b10k'
                }]
            }
        }
    }
}

const questionListComponent = Vue.component('question-list', {
    props: ['questions', 'editing'],
    template: `
        <ul style="padding-inline-start: 0px;" class="container">
            <li class="row result-row" v-for="item in questions">
                <div class="col-6 text-right">{{ item.expr }}</div> 

                <div class="col-6 text-left" style="padding-left: 0px;" v-if="editing">
                    <input v-model="item.actual" />
                </div>
                <div class="col-6 text-left" style="padding-left: 0px;" v-else>
                    {{ item.actual }} 
                    <span style="color: green;" v-if="item.correct">&#10004;</span>
                    <span style="color: red;" v-else>&#10008;</span>
                </div>
            </li>
        </ul>
    `
})

const getExamTemplate = function (gen) {
    return {
        template: `
            <div class="container text-center">
                <template v-if="submitted">
                    <p class="title"><h2>当前得分：<span style="color:red">{{ Math.round(score, 0) }}</span></h2></p>
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
                        <input type="number" class="form-control" id="questionLabel" placeholder="答案是？" v-model="answer" @keyup.enter="next">
                    </div>
                    <button type="button" class="btn btn-success" @click="next">下一题</button>
                    <p style="margin-top: 20px;" v-if="!finished">
                        当前 {{ current + 1 }} / {{ count }}</span>
                    </p>
                </template>
            </div>
            `,
        data: function () {
            let questions = []
            let questionCount = 3
            for (let i = 0; i < questionCount; i++) {
                questions.push(gen())
            }

            return {
                current: 0,
                questions,
                answer: '',
                count: questionCount,
                finished: false,
                inChecking: false,
                submitted: false,
                score: 0
            }
        },
        computed: {
            currentQuestion: function () {
                return this.questions[this.current]
            }
        },
        methods: {
            next: function () {
                let temp = this.questions[this.current]
                temp.actual = this.answer
                temp.correct = (temp.actual == temp.v)
                
                this.answer = ''
                
                if (this.questions.filter(q => q.actual != undefined).length === this.count) {
                    this.finished = true
                } 
                if (this.current < this.count - 1) {
                    this.current++
                }
            },
            done: function () {
                this.submitted = true
                this.score = this.questions.filter(q => q.correct).length * 100 / this.count
            },
            check: function() {
                this.inChecking = true
            }
        }
    }
}

const routes = [{
    path: '/',
    component: getTemplate()
}, {
    path: '/math-fixnum-multi-simple',
    component: getExamTemplate(randomMultipleLv1)
}]

const app = new Vue({
    el: '#examApp',
    router: new VueRouter({
        routes
    })
})