<template>
  <div class="home">
    <RwvCamera />
    <RwvText />
  </div>
</template>

<script>
// @ is an alias to /src
import axios from 'axios'
import RwvCamera from '@/components/TheCamera.vue';
import RwvText from '@/components/TheText.vue';

export default {
  name: 'Home',

  components: {
    RwvCamera,
    RwvText,
  },

};
</script>
