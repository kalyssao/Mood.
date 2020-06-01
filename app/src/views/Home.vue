<template>
  <div class="home">
    <b-row> 
      <b-col md="1"> </b-col>
      <b-col md="5">
        <RwvCamera @moodPredicted="setMood($event)"/>
        <b-button squared variant="dark" id="snap" v-on:click="getEmotion()"> Snap.</b-button>
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
import RwvCamera from '@/components/TheCamera.vue';
import RwvText from '@/components/TheText.vue';
import RwvRecommendations from '@/components/TheRecommendations.vue';

import * as tf from '@tensorflow/tfjs';
import * as faceapi from 'face-api.js';

export default {
    name: 'Home',
    data () {
        return {
            mood: "",
            class: null,
            playlists: []
        }
    },
    components: {
        RwvCamera,
        RwvText,
        RwvRecommendations
    },
    mounted() {
        this.init()
    },
    methods: {
        async init(){
            // load the face detection api
            await faceapi.loadSsdMobilenetv1Model('/models')
            await faceapi.loadFaceExpressionModel('/models')
        },
        async getEmotion() {
            console.log('getting face from face api..')
            const img = tf.browser.fromPixels(this.$children[0].webcam.webcamElement)
            const detectionsWithExpressions = await faceapi.detectSingleFace(img)
            
            console.log(detectionsWithExpressions)
            //this.detected_e = this.emotions[pred.classIndex];
            //this.setMood(detected_e)*/
            this.setMood('happy')
        },
        setMood(mood) {
            console.log('mood detected, ', mood)
            var self = this
            this.mood = mood
        }
    }
};
</script>

<style scoped>
RwvRecommendations {
    max-height: 720px;
    overflow-y: scroll;
}
</style>