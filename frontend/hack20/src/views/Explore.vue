<template>
    <div>
        <p>THIS IS THE EXPLORE PAGE</p>
        <button @click="toCreate">Go To Create Page</button>
    </div>
</template>

<script>
export default {
    name: "Explore",
    methods: {
        toCreate() {
            this.$router.push('/create');
        }
    }
}
</script>

<style scoped>

</style>