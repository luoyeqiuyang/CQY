import Vue from 'vue'
import Router from 'vue-router'
import movie from './views/Movie.vue'
import city from './views/City.vue'
import nowPlaying from './views/NowPlaying.vue'
import comingSoon from './views/ComingSoon.vue'
import search from './views/Search.vue'
import yy from './views/YY.vue'


Vue.use(Router)

export default new Router({
    routes: [{
            path: '/',
            redirect: '/movie'
        },
        {
            path: '/movie',
            name: movie,
            component: movie,
            children: [{
                    path: "/movie",
                    redirect: '/movie/nowPlaying'
                },
                {
                    path: '/movie/city',
                    name: city,
                    component: city
                }, {
                    path: '/movie/nowPlaying',
                    name: nowPlaying,
                    component: nowPlaying
                }, {
                    path: '/movie/comingSoon',
                    name: comingSoon,
                    component: comingSoon
                }, {
                    path: '/movie/search',
                    name: search,
                    component: search
                }
            ]
        }, {
            path: '/yy',
            name: yy,
            component: yy
        }, {
            path: '/my',
            name: 'my',
            component: () =>
                import ( /* webpackChunkName: "about" */ './views/My.vue')
        }

    ]
})