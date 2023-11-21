<template>
    <div class="modal" v-if="show" @click="hideModal">
        <div class="content" @click.stop><slot></slot></div>
    </div>
</template>

<script>
import toggleMIxin from '@/mixins/toggleMIxin';

export default {
    name: 'Modal',
    mixins: [toggleMIxin]
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
