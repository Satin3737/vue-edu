<template>
    <button class="btn">
        <slot></slot>
    </button>
</template>

<script>
export default {
    name: 'CustomButton'
};
</script>

<style lang="scss" scoped>
.btn {
    cursor: pointer;
    background: none;
    padding: 8px 16px;
    color: teal;
    border: 1px solid teal;
    transition: all 0.3s;
    &:hover {
        color: #fff;
        background: teal;
    }
}
</style>
