<template>
    <div class="app">
        <h1>Posts page</h1>
        <header class="head">
            <CustomButton @click="fetchPosts" class="btn">Get posts</CustomButton>
            <CustomButton @click="showModal" class="btn">Create post</CustomButton>
        </header>
        <Modal v-model:show="modalShow"><PostForm @create="createPost" /></Modal>
        <PostList :posts="posts" @remove="removePost" />
    </div>
</template>

<script>
import PostList from '@/components/PostList.vue';
import PostForm from '@/components/PostForm.vue';
import CustomButton from '@/components/common/CustomButton.vue';
import Modal from '@/components/common/Modal.vue';
import axios from 'axios';

export default {
    components: { Modal, CustomButton, PostForm, PostList },
    data() {
        return {
            posts: [],
            modalShow: false
        };
    },
    methods: {
        createPost(post, ...params) {
            console.log(post, ...params);
            this.posts.push(post);
            this.modalShow = false;
        },
        removePost(post, ...params) {
            console.log(post, ...params);
            this.posts = this.posts.filter((p) => p.id !== post.id);
        },
        showModal() {
            this.modalShow = true;
        },
        async fetchPosts() {
            try {
                const response = await axios.get(
                    'https://jsonplaceholder.typicode.com/posts?_limit=10'
                );
                console.log(response);
                this.posts = response.data;
            } catch (e) {
                alert(`Error: ${e}`);
            }
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
.head {
    display: flex;
    margin: 16px 0 24px;
    gap: 12px;
}
</style>
