<template>
    <div class="pagination">
        <div
            v-for="number in total"
            :key="number"
            class="page"
            :class="{ current: number === page }"
            @click="$emit('page', number)"
        >
            {{ number }}
        </div>
    </div>
</template>

<script>
export default {
    name: 'PostPagination',
    props: {
        page: {
            type: Number,
            required: true
        },
        total: {
            type: Number,
            required: true
        }
    }
};
</script>

<style lang="scss" scoped>
.pagination {
    display: flex;
    align-items: center;
    margin-top: 16px;
}
.page {
    border: 1px solid black;
    padding: 10px;
}
.current {
    border: 2px solid teal;
}
</style>
