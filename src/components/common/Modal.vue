<template>
    <div class="modal" v-if="show" @click="hideModal">
        <div class="content" @click.stop><slot></slot></div>
    </div>
</template>

<script>
export default {
    name: 'Modal',
    props: {
        show: {
            type: Boolean,
            default: false
        }
    },
    methods: {
        hideModal() {
            this.$emit('update:show', false);
        }
    }
};
</script>

<style lang="scss" scoped>
.modal {
    position: fixed;
    top: 0;
    bottom: 0;
    right: 0;
    left: 0;
    display: flex;
    background: rgba(0, 0, 0, 0.5);
}
.content {
    margin: auto;
    border-radius: 12px;
    background: #fff;
    min-width: 320px;
    padding: 16px;
}
</style>
