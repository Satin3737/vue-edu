<template>
    <div v-if="posts.length > 0">
        <PostItem
            v-for="post in posts"
            :post="post"
            :key="post.id"
            @remove="$emit('remove', post)"
        />
    </div>
    <h3 v-else>No posts here</h3>
</template>

<script>
import PostItem from '@/components/PostItem.vue';

export default {
    components: { PostItem },
    props: {
        posts: {
            type: Array,
            required: true
        }
    }
};
</script>

<style lang="scss" scoped></style>
