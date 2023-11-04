<template>
    <div class="app">
        <PostForm @create="createPost" />
        <PostList :posts="posts" />
    </div>
</template>

<script>
import PostList from '@/components/PostList.vue';
import PostForm from '@/components/PostForm.vue';

export default {
    components: { PostForm, PostList },
    data() {
        return {
            posts: [
                { id: 1, name: 'Javascript 1', description: 'Post about JS #1' },
                { id: 2, name: 'Javascript 2', description: 'Post about JS #2' },
                { id: 3, name: 'Javascript 3', description: 'Post about JS #3' },
                { id: 4, name: 'Javascript 4', description: 'Post about JS #4' }
            ]
        };
    },
    methods: {
        createPost(post, ...params) {
            console.log(post, ...params);
            this.posts.push(post);
        }
    }
};
</script>

<style lang="scss">
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}
.app {
    padding: 16px;
}
</style>
