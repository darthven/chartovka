import Vue from 'vue'
import Router from 'vue-router'

import ChartLayout from './components/ChartLayout'

Vue.use(Router)

export default new Router({
    routes: [
        {
            path: '/',
            name: 'chart',
            component: ChartLayout
        }
    ]
})
