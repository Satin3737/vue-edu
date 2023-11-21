<template>
    <form class="form" @submit.prevent>
        <h3 class="title">Posts creation</h3>
        <CustomInput v-focus v-model="post.title" placeholder="Title" />
        <CustomInput v-model="post.body" placeholder="Description" />
        <CustomButton class="btn" @click="createPost">Add post</CustomButton>
    </form>
</template>

<script>
import CustomInput from '@/components/common/CustomInput.vue';
import CustomButton from '@/components/common/CustomButton.vue';

export default {
    name: 'PostForm',
    components: { CustomButton, CustomInput },
    props: {},
    data() {
        return {
            post: {
                title: '',
                body: ''
            }
        };
    },
    methods: {
        createPost() {
            this.post.id = new Date();
            this.$emit('create', this.post, 'second param', 'third param');
            this.post = {
                title: '',
                body: ''
            };
        }
    }
};
</script>

<style lang="scss" scoped>
.title {
    font-size: 20px;
    font-weight: 700;
    margin-bottom: 16px;
}
.form {
    display: flex;
    flex-direction: column;
    max-width: 440px;
}
.btn {
    align-self: flex-end;
    margin-top: 16px;
}
</style>
