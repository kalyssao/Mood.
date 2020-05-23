<template>
  <div class="home">
    <RwvCamera />
  </div>
</template>

<script>
// @ is an alias to /src
import RwvCamera from '@/components/TheCamera.vue';

export default {
  name: 'Home',
  components: {
    RwvCamera,
  },
};
</script>
