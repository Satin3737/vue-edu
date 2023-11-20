<template>
    <div>
        <Navbar />
        <main class="app">
            <router-view />
        </main>
    </div>
</template>

<script>
import Navbar from '@/components/Navbar.vue';

export default {
    components: { Navbar }
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
</style>
