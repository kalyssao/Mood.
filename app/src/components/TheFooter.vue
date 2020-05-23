<template>
    <footer>
        <div class="container">
            <router-link class="logo-font" :to="{ name: 'home', params: {} }">
            </router-link>
            <span class="attribution">
                A learning project built by <a target="blank" href="http://kalyssao.github.io">Lyss</a>.
                Code &amp; design licensed under MIT.
            </span>
        </div>
    </footer>
</template>

<script>
export default {
  name: 'RwvFooter',
};
</script>
