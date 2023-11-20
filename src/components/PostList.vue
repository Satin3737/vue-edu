<template>
    <div v-if="posts.length > 0">
        <transition-group name="list">
            <PostItem
                v-for="post in posts"
                :post="post"
                :key="post.id"
                @remove="$emit('remove', post)"
            />
        </transition-group>
    </div>
    <h3 v-else>No posts here</h3>
</template>

<script>
import PostItem from '@/components/PostItem.vue';

export default {
    name: 'PostList',
    components: { PostItem },
    props: {
        posts: {
            type: Array,
            required: true
        }
    }
};
</script>

<style lang="scss" scoped>
.list-move,
.list-enter-active,
.list-leave-active {
    transition: all 0.5s ease;
}
.list-enter-from,
.list-leave-to {
    opacity: 0;
    transform: translateX(30px);
}
.list-leave-active {
    position: absolute;
    width: 100%;
}
</style>
