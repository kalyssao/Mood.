<template>
    <nav class="navbar navbar-light">
        <div class="container">
            <router-link class="navbar-brand" :to="{ name: 'home' }">
                Mood.
            </router-link>
        </div>
    </nav>
</template>

<script>
export default {
  name: 'RwvHeader',
};
</script>

<style lang="stylus" scoped>

</style>