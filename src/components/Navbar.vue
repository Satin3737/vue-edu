<template>
    <header class="navbar">
        <h3>
            <router-link class="home" to="/"> Some App </router-link>
        </h3>
        <div class="links">
            <custom-button @click="$router.push('/posts')">Posts</custom-button>
            <custom-button @click="$router.push('/about')">About</custom-button>
        </div>
    </header>
</template>

<script>
import CustomButton from '@/components/common/CustomButton.vue';

export default {
    name: 'Navbar',
    components: { CustomButton }
};
</script>

<style lang="scss" scoped>
.home {
    font-size: 24px;
    color: teal;
    font-weight: 700;
    text-decoration: none;
}
.navbar {
    background: lightgrey;
    box-shadow: 2px 2px 4px gray;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 8px 16px;
    gap: 24px;
}
.links {
    display: flex;
    gap: 16px;
}
</style>
