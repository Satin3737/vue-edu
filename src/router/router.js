import { createRouter, createWebHistory } from 'vue-router';
import HomePage from '@/pages/HomePage.vue';
import PostsPage from '@/pages/PostsPage.vue';
import AboutPage from '@/pages/AboutPage.vue';
import SinglePage from '@/pages/SinglePage.vue';
import PostsPageWithStore from '@/pages/PostsPageWithStore.vue';

const routes = [
    {
        path: '/',
        component: HomePage
    },
    {
        path: '/posts',
        component: PostsPage
    },
    {
        path: '/posts/:id',
        component: SinglePage
    },
    {
        path: '/about',
        component: AboutPage
    },
    {
        path: '/store',
        component: PostsPageWithStore
    }
];

const router = createRouter({
    routes,
    history: createWebHistory()
});

export default router;
