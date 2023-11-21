<template>
    <div class="post">
        <div>
            <div>{{ post.id }}</div>
            <div><strong>Post title:</strong> {{ post.title }}</div>
            <div><strong>Description:</strong> {{ post.body }}</div>
        </div>
        <div class="buttons">
            <CustomButton @click="$router.push(`/posts/${post.id}`)">Opeen post</CustomButton>
            <CustomButton @click="$emit('remove', post)">Delete post</CustomButton>
        </div>
    </div>
</template>

<script>
import CustomButton from '@/components/common/CustomButton.vue';

export default {
    name: 'PostItem',
    components: { CustomButton },
    props: {
        post: {
            type: Object,
            required: true
        }
    }
};
</script>

<style lang="scss" scoped>
.post {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 15px;
    border: 2px solid teal;
    margin: 16px 0;
    gap: 24px;
}
.buttons {
    display: flex;
    gap: 8px;
}
</style>
