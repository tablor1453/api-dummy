<template>
    <h1>About</h1>
    <router-link :to="{ name: 'home' }">Back to Home</router-link>
    <div>{{ username }}</div>
</template>

<script>
    export default {
        name: 'About',
        computed: {
            username() {
                // We will see what `params` is shortly
                return 'Tablor'
            },
        },
    }
</script>

<style scoped>
</style>