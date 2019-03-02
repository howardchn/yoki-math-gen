import AppMain from './components/app-main.vue'
import AppContent from './components/app-content.vue'
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

export default [ { path: '/', component: AppMain } ].concat(
    exams.map(ex => { 
        return { path: ex.href, component: getQuestionTemplate(ex.id, ex.gen) }
    })
)