import axios from 'axios';
import { onMounted, ref } from 'vue';

export default function usePosts(limit) {
    const posts = ref([]);
    const total = ref(0);
    const isPostLoading = ref(true);

    const fetching = async () => {
        try {
            const response = await axios.get('https://jsonplaceholder.typicode.com/posts', {
                params: {
                    _page: 1,
                    _limit: limit
                }
            });
            console.log(response);
            total.value = Math.ceil(response.headers['x-total-count'] / limit);
            posts.value = response.data;
        } catch (e) {
            alert(`Error: ${e}`);
        } finally {
            isPostLoading.value = false;
        }
    };

    onMounted(fetching);

    return { posts, isPostLoading, total };
}
