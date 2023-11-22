<template>
    <div>
        <h1>Posts page</h1>
        <custom-input
            v-focus
            :model-value="searchQuery"
            @update:model-value="setSearchQuery"
            placeholder="Search post..."
        />
        <header class="head">
            <custom-button @click="showModal" class="btn">Create post</custom-button>
            <custom-select
                :model-value="selectedSort"
                @update:model-value="setSelectedSort"
                :options="sortingOptions"
            />
        </header>
        <div>
            <post-list :posts="sortedAndSearchedPosts" @remove="removePost" v-if="!isPostLoading" />
            <div v-else>Loading</div>
        </div>
        <div class="observer" v-intersection="loadMore"></div>
        <modal v-model:show="modalShow"><PostForm @create="createPost" /></modal>
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
import { mapActions, mapGetters, mapMutations, mapState } from 'vuex';

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
            modalShow: false
        };
    },
    methods: {
        ...mapMutations({
            setPosts: 'post/setPosts',
            setPage: 'post/setPage',
            setSearchQuery: 'post/setSearchQuery',
            setSelectedSort: 'post/setSelectedSort'
        }),
        ...mapActions({
            loadMore: 'post/loadMore',
            fetchPosts: 'post/fetchPosts'
        }),
        createPost(post, ...params) {
            console.log(post, ...params);
            this.setPosts([...this.posts, post]);
            this.modalShow = false;
        },
        removePost(post, ...params) {
            console.log(post, ...params);
            this.setPosts(this.posts.filter((p) => p.id !== post.id));
        },
        showModal() {
            this.modalShow = true;
        }
    },
    mounted() {
        this.fetchPosts();
    },
    computed: {
        ...mapState({
            posts: (state) => state.post.posts,
            isPostLoading: (state) => state.post.isPostLoading,
            selectedSort: (state) => state.post.selectedSort,
            sortingOptions: (state) => state.post.sortingOptions,
            searchQuery: (state) => state.post.searchQuery
        }),
        ...mapGetters({
            sortedAndSearchedPosts: 'post/sortedAndSearchedPosts'
        })
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
