<template>
    <div>
        <h1>Posts page</h1>
        <custom-input v-focus v-model="searchQuery" placeholder="Search post..." />
        <header class="head">
            <custom-button @click="showModal" class="btn">Create post</custom-button>
            <custom-select v-model="selectedSort" :options="sortingOptions" />
        </header>
        <div>
            <post-list :posts="sortedAndSearchedPosts" v-if="!isPostLoading" />
            <div v-else>Loading</div>
        </div>
    </div>
</template>

<script>
import PostList from '@/components/PostList.vue';
import PostForm from '@/components/PostForm.vue';
import CustomButton from '@/components/common/CustomButton.vue';
import Modal from '@/components/common/Modal.vue';
import CustomSelect from '@/components/common/CustomSelect.vue';
import CustomInput from '@/components/common/CustomInput.vue';
import PostPagination from '@/components/PostPagination.vue';
import usePosts from '@/hooks/usePosts';
import useSortedPosts from '@/hooks/useSortedPosts';
import useSortedAndSearchedPosts from '@/hooks/useSortedAndSearchedPosts';

export default {
    name: 'PostPage',
    components: {
        PostPagination,
        CustomInput,
        CustomSelect,
        Modal,
        CustomButton,
        PostForm,
        PostList
    },
    data() {
        return {
            modalShow: false,
            sortingOptions: [
                { value: 'title', name: 'By title' },
                { value: 'body', name: 'By description' }
            ]
        };
    },
    setup(props) {
        const { posts, isPostLoading, total } = usePosts(10);
        const { selectedSort, sortedPosts } = useSortedPosts(posts);
        const { searchQuery, sortedAndSearchedPosts } = useSortedAndSearchedPosts(sortedPosts);

        return {
            posts,
            isPostLoading,
            total,
            selectedSort,
            sortedPosts,
            searchQuery,
            sortedAndSearchedPosts
        };
    }
};
</script>

<style lang="scss">
.head {
    display: flex;
    margin: 16px 0 24px;
    gap: 12px;
    justify-content: space-between;
}
</style>
