<template>
  <div class="home">
    <b-row> 
      <b-col md="1"> </b-col>
      <b-col md="5">
        <RwvCamera @moodPredicted="setMood($event)"/>
      </b-col>
      <b-col md="1"></b-col>
      <b-col md="4">
        <b-row>
          <RwvText v-bind:prediction="mood"></RwvText>
        </b-row>
        <b-row>
          <RwvRecommendations :mood=mood></RwvRecommendations>
        </b-row>
      </b-col>
      <b-col md="1"></b-col>
    </b-row>
  </div>
</template>

<script>
// @ is an alias to /src
import axios from 'axios'
import RwvCamera from '@/components/TheCamera.vue';
import RwvText from '@/components/TheText.vue';
import RwvRecommendations from '@/components/TheRecommendations.vue'

export default {
  name: 'Home',
  data () {
    return {
      mood: ""
    }
  },
  components: {
    RwvCamera,
    RwvText,
    RwvRecommendations
  },
  methods: {
    setMood(mood) {
      this.mood = mood
    }
  },
  watch: {
    mood: function () {
      console.log('mood determined.')
    }
  }
};
</script>
