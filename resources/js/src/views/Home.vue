<template>
    <h1>Home</h1>
    <router-link :to="{ name: 'about' }">go to About</router-link>
</template>

<script>
    export default {
        name: 'Home',
    }
</script>

<style scoped>
</style>