<template>
  <div id="app">
      <b-row>
        <b-col md="1"></b-col>
        <b-col sm="5">
            <RwvHeader />
        </b-col>
      </b-row>
    <router-view></router-view>
    <RwvFooter />
  </div>
</template>

<script>
import RwvHeader from '@/components/TheHeader.vue';
import RwvFooter from '@/components/TheFooter.vue';

export default {
  name: 'App',
  components: {
    RwvHeader,
    RwvFooter,
  },
};

</script>
<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  height: 85vh;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}

</style>
