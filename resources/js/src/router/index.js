import { createRouter, createWebHistory } from "vue-router";
import Home from '../../src/views/Home.vue';
import About from '../../src/views/About.vue';

const router = createRouter({
    history: createWebHistory('/'),
    routes: [
        {
            path: '/',
            name: 'home',
            component: Home,
        },
        {
            path: '/about-us',
            name: 'about',
            component: About,
        }
    ]
});

export default router;