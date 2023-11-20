<template>
    <main class="app">
        <h1>Posts page</h1>
        <custom-input v-model="searchQuery" placeholder="Search post..." />
        <header class="head">
            <custom-button @click="showModal" class="btn">Create post</custom-button>
            <custom-select v-model="selectedSort" :options="sortingOptions" />
        </header>
        <div>
            <post-list :posts="sortedAndSearchedPosts" @remove="removePost" v-if="!isPostLoading" />
            <div v-else>Loading</div>
        </div>
        <post-pagination :total="total" :page="page" @page="changePage" />
        <modal v-model:show="modalShow"><PostForm @create="createPost" /></modal>
    </main>
</template>

<script>
import PostList from '@/components/PostList.vue';
import PostForm from '@/components/PostForm.vue';
import CustomButton from '@/components/common/CustomButton.vue';
import Modal from '@/components/common/Modal.vue';
import axios from 'axios';
import CustomSelect from '@/components/common/CustomSelect.vue';
import CustomInput from '@/components/common/CustomInput.vue';
import PostPagination from '@/components/PostPagination.vue';

export default {
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
            posts: [],
            modalShow: false,
            isPostLoading: false,
            selectedSort: '',
            sortingOptions: [
                { value: 'title', name: 'By title' },
                { value: 'body', name: 'By description' }
            ],
            searchQuery: '',
            page: 1,
            total: 0,
            limit: 10
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
        changePage(page) {
            this.page = page;
        },
        async fetchPosts() {
            this.isPostLoading = true;
            try {
                const response = await axios.get('https://jsonplaceholder.typicode.com/posts', {
                    params: {
                        _page: this.page,
                        _limit: this.limit
                    }
                });
                console.log(response);
                this.total = Math.ceil(response.headers['x-total-count'] / this.limit);
                this.posts = response.data;
            } catch (e) {
                alert(`Error: ${e}`);
            } finally {
                this.isPostLoading = false;
            }
        }
    },
    mounted() {
        this.fetchPosts();
    },
    watch: {
        page() {
            this.fetchPosts();
        }
        // selectedSort(newValue) {
        //     this.posts.sort((a, b) => {
        //         return a[newValue]?.localeCompare(b[newValue]);
        //     });
        // }
    },
    computed: {
        sortedPosts() {
            return [...this.posts].sort((a, b) => {
                return a[this.selectedSort]?.localeCompare(b[this.selectedSort]);
            });
        },
        sortedAndSearchedPosts() {
            return this.sortedPosts.filter((post) =>
                post.title.toLowerCase().includes(this.searchQuery.toLowerCase())
            );
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
    justify-content: space-between;
}
</style>
