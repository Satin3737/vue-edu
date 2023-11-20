import { createRouter, createWebHistory } from 'vue-router';
import HomePage from '@/pages/HomePage.vue';
import PostPage from '@/pages/PostPage.vue';
import AboutPage from '@/pages/AboutPage.vue';

const routes = [
    {
        path: '/',
        component: HomePage
    },
    {
        path: '/posts',
        component: PostPage
    },
    {
        path: '/about',
        component: AboutPage
    }
];

const router = createRouter({
    routes,
    history: createWebHistory()
});

export default router;
