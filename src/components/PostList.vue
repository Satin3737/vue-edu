<template>
    <div class="post" v-for="post in posts">
        <div><strong>Post name:</strong> {{ post.name }}</div>
        <div><strong>Description:</strong> {{ post.description }}</div>
    </div>
</template>

<script>
export default {
    props: {
        posts: {
            type: Array,
            required: true
        }
    }
};
</script>

<style lang="scss" scoped>
.post {
    padding: 15px;
    border: 2px solid teal;
    margin: 16px 0;
}
</style>
