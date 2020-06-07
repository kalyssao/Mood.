<template>
    <nav class="navbar navbar-light">
        <div class="container">
            <router-link class="navbar-brand text-left" :to="{ name: 'home' }">
                <h2> Mood. </h2>
                <p> A media recommendation engine. </p>
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