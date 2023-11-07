<template>
    <div class="post">
        <div>
            <div><strong>Post title:</strong> {{ post.title }}</div>
            <div><strong>Description:</strong> {{ post.body }}</div>
        </div>
        <div class="buttons">
            <CustomButton @click="$emit('remove', post)">Delete post</CustomButton>
        </div>
    </div>
</template>

<script>
import CustomButton from '@/components/common/CustomButton.vue';

export default {
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
}
.buttons {
    display: flex;
    flex-direction: column;
    gap: 4px;
}
</style>
