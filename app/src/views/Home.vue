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
import * as mobilenetModule from '@tensorflow-models/mobilenet';
import * as knnClassifier from '@tensorflow-models/knn-classifier';

export default {
    name: 'Home',
    data () {
        return {
            mood: "",
            classifier: null,
            mobilenet: null,
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
            // load the load mobilenet and create a KnnClassifier
            this.classifier = knnClassifier.create();
            this.mobilenet = await mobilenetModule.load();
        },
        async getEmotion() {
            console.log('getting emotion..')
            /*const img = tf.FromPixels(this.$children[0].webcam.webcamElement)
            const logits = this.mobilenet.infer(img, 'conv_preds')
            const pred = await this.classifier.predictClass(logits)
            this.detected_e = this.emotions[pred.classIndex];
            this.setMood(detected_e)*/
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
