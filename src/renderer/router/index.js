import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
    routes: [
        {
            path: '/',
            name: 'home',
            component: require('@/components/Home').default
        },
        {
            path: '*',
            redirect: '/'
        },
        {
            path: '/stream',
            name: 'stream',
            component: require('@/components/Stream').default
        },
        {
            path: '/social',
            name: 'social',
            component: require('@/components/Social').default
        },
        {
            path: '/chat',
            name: 'chat',
            component: require('@/components/Chat').default
        },
        {
            path: '/labels',
            name: 'labels',
            component: require('@/components/Labels').default
        },
        {
            path: '/config',
            name: 'config',
            component: require('@/components/Config').default
        }
    ]
})
