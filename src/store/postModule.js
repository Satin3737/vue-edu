import axios from 'axios';

export const postModule = {
    state: {
        posts: [],
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
    },
    getters: {
        sortedPosts(state) {
            return [...state.posts].sort((a, b) => {
                return a[state.selectedSort]?.localeCompare(b[state.selectedSort]);
            });
        },
        sortedAndSearchedPosts(state, getters) {
            return getters.sortedPosts.filter((post) =>
                post.title.toLowerCase().includes(state.searchQuery.toLowerCase())
            );
        }
    },
    mutations: {
        setPosts(state, payload) {
            state.posts = payload;
        },
        setIsPostLoading(state, payload) {
            state.isPostLoading = payload;
        },
        setSelectedSort(state, payload) {
            state.selectedSort = payload;
        },
        setSearchQuery(state, payload) {
            state.searchQuery = payload;
        },
        setPage(state, payload) {
            state.page = payload;
        },
        setTotal(state, payload) {
            state.total = payload;
        }
    },
    actions: {
        async fetchPosts({ state, commit }) {
            commit('setIsPostLoading', true);
            try {
                const response = await axios.get('https://jsonplaceholder.typicode.com/posts', {
                    params: {
                        _page: state.page,
                        _limit: state.limit
                    }
                });
                console.log(response);
                commit('setTotal', Math.ceil(response.headers['x-total-count'] / state.limit));
                commit('setPosts', response.data);
            } catch (e) {
                alert(`Error: ${e}`);
            } finally {
                commit('setIsPostLoading', false);
            }
        },
        async loadMore({ state, commit }) {
            if (state.page < state.total) {
                commit('setPage', state.page + 1);
                try {
                    const response = await axios.get('https://jsonplaceholder.typicode.com/posts', {
                        params: {
                            _page: state.page,
                            _limit: state.limit
                        }
                    });
                    console.log(response);
                    commit('setTotal', Math.ceil(response.headers['x-total-count'] / state.limit));
                    commit('setPosts', [...state.posts, ...response.data]);
                } catch (e) {
                    alert(`Error: ${e}`);
                }
            }
        }
    },
    namespaced: true
};
