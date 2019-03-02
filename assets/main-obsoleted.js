const template = `
<div class="row">
    <div class="col-md-3" v-for="q in questions">
        <p> {{ q }}</p>
    </div>
</div>
`;

const templateRandomOneShootExam1 = `
<div class="container text-center">
    <div class="form-group">
        <h1><label for="questionLabel">{{ question.expr }}</label></h1>
        <input type="number" class="form-control" id="questionLabel" placeholder="答案是？" v-model="answer" @keyup.enter="next">
    </div>
    <button type="button" class="btn btn-success" @click="next">下一题</button>
    <p style="margin-top: 20px;">已完成{{ finished }}，正确<span style="color:green;">{{ correct }}</span>，错误<span style="color:red;">{{ wrong }}</span></p>
    <p>
        <small style="display:block;" v-for="i in err">
            <span style="color:red">{{ i.question.expr }} {{ i.answer }}</span> (<span style="color:green;">{{ i.question.v }}</span>)
        </small>
    </p>
</div>
`;

{/* <input class="form-control col-2" id="questionLabel" v-model="answer" @keyup.enter="next"> */}

const templateRandomCompareExam1 = `
<div class="container text-center">
    <div class="form-group row">
        <label for="questionLabel" class="col-5 text-right"><h4 style="line-height:140px;">{{ question.expr1 }}</h4></label>
        <ul class="list-group col-2">
            <li v-for="(candidate, index) in answerCandidates"
                :class="{ 'list-group-item':true, 'list-group-item-action':true, 'active': candidate === answer }"
                @click="selected(index)"> {{ candidate }} </li>
        </ul>
        <label for="questionLabel" class="col-5 text-left"><h4 style="line-height:140px;">{{ question.expr2 }}</h4></label>
    </div>
    <button type="button" class="btn btn-success" @click="next">下一题</button>
    <p style="margin-top: 20px;">已完成{{ finished }}，正确<span style="color:green;">{{ correct }}</span>，错误<span style="color:red;">{{ wrong }}</span></p>
    <p>
        <small style="display:block;" v-for="i in err">
            <span style="color:red">{{ i.question.expr1 }} {{ i.answer }} {{ i.question.expr2 }}</span> (<span style="color:green;">{{ i.question.v }}</span>)
        </small>
    </p>
</div>
`;

function generateRandomLv1(template, gen) {
    return {
        template,
        data: function() {
            return {
                questions: gen()
            }
        }
    }
}

function generateOneShootExam(template, gen) {
    return {
        template,
        data: function() { return {
            question: gen(),
            answer: '',
            finished: 0,
            correct: 0,
            wrong: 0,
            err: []
        };},
        methods: {
            next: function() {
                if (!this.answer) {
                    return
                }

                this.finished++;
                if (this.answer == this.question.v) {
                    this.correct++;
                } else {
                    this.wrong++;
                    this.err.push({ question: this.question, answer: this.answer });
                }

                this.answer = '';
                this.question = gen();
            }
        }
    };
}

function generateCompareExam(template, gen) {
    return {
        template,
        data: function() { return {
            question: gen(),
            answerCandidates: ['<', '=', '>'],
            answer: '',
            finished: 0,
            correct: 0,
            wrong: 0,
            err: []
        };},
        methods: {
            next: function() {
                this.finished++;
                if (this.answer == this.question.v) {
                    this.correct++;
                } else {
                    this.wrong++;
                    this.err.push({ question: this.question, answer: this.answer });
                }

                this.answer = '';
                this.question = gen();
            },
            selected: function(index) {
                this.answer = this.answerCandidates[index];
            }
        }
    };
}

const routes = [
    {
        path: '/plus-minus-lv1',
        component: generateRandomLv1(template, genLv1)
    }, {
        path: '/multiply-lv1',
        component: generateRandomLv1(template, genLv2)
    }, {
        path: '/multiply-lv1-random',
        component: generateOneShootExam(templateRandomOneShootExam1, randomMultipleLv1)
    }, {
        path: '/divide-lv1-random',
        component: generateOneShootExam(templateRandomOneShootExam1, randomDivideLv1)
    }, {
        path: '/mix-multiply-divide-lv1-random',
        component: generateOneShootExam(templateRandomOneShootExam1, randomMixedMultiAndDivideLv1)
    }, {
        path: '/plus-minus-lv1-random',
        component: generateOneShootExam(templateRandomOneShootExam1, randomPlusMinusExamLv1)
    }, {
        path: '/plus-minus-lv1-random-compare',
        component: generateCompareExam(templateRandomCompareExam1, randomPlusMinusCompareExamLv1)
    }, {
        path: '/plus-minus-lv2-random',
        component: generateOneShootExam(templateRandomOneShootExam1, randomPlusMinusExamLv2)
    }
];

const router = new VueRouter({
    routes
});
  

const app = new Vue({
    el: '#examApp',
    router
});