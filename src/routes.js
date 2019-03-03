import AppMain from './components/app-main.vue'
import AppContent from './components/app-content.vue'
import LoginTemplate from './components/login.vue'
import SignupTemplate from './components/signup.vue'
import exams from './examsMenu'

const getQuestionTemplate = function(type, method) {
    return {
        template: '<app-content v-bind:method="method" v-bind:type="type"></app-content>',
        components: {
            'app-content': AppContent
        },
        data: function() {
            return { type, method }
        }
    }
}

export default [ 
    { path: '/', component: AppMain }, 
    { path: '/login', component: LoginTemplate },
    { path: '/signup', component: SignupTemplate },
].concat(exams.map(ex => ({ path: ex.href, component: getQuestionTemplate(ex.id, ex.gen) })))