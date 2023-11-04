<template>
    <form class="form" @submit.prevent>
        <h3 class="title">Posts creation</h3>
        <input v-model="post.name" class="input" type="text" placeholder="Name" />
        <input v-model="post.description" class="input" type="text" placeholder="description" />
        <button class="btn" @click="createPost">Add post</button>
    </form>
</template>

<script>
export default {
    props: {},
    data() {
        return {
            post: {
                name: '',
                description: ''
            }
        };
    },
    methods: {
        createPost() {
            this.post.id = new Date();
            this.$emit('create', this.post, 'second param', 'third param');
            this.post = {
                name: '',
                description: ''
            };
        }
    }
};
</script>

<style lang="scss" scoped>
.title {
    font-size: 20px;
    font-weight: 700;
    margin-bottom: 24px;
}
.form {
    display: flex;
    flex-direction: column;
    max-width: 440px;
    margin-bottom: 48px;
}
.input {
    width: 100%;
    border: 1px solid teal;
    margin: 8px 0;
    padding: 4px 8px;
}
.btn {
    margin-top: 16px;
    align-self: flex-end;
    padding: 8px 16px;
    color: teal;
    border: 1px solid teal;
}
</style>
