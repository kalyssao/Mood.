<template>
  <div class="home">
    <RwvCamera />
    <b-button @click="predictMood">Predict Mood!</b-button>
    <RwvText v-bind:prediction="predictText"></RwvText>
  </div>
</template>

<script>
// @ is an alias to /src
import axios from 'axios'
import RwvCamera from '@/components/TheCamera.vue';
import RwvText from '@/components/TheText.vue';

export default {
  name: 'Home',
  data () {
    return {
      predictText: "happy"
    }
  },
  components: {
    RwvCamera,
    RwvText,
  },
  methods: {
    predictMood: function () {
      return this.predictText
      // call to mood detection API
      //res = axios.get('', {

      //})
    }
  }
};
</script>
