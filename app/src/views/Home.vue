<template>
  <div class="home">
    <b-row> 
      <b-col md="1"> </b-col>
      <b-col md="5">
        <RwvCamera @pictureTaken="setImage($event)"/>
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

const params = {
    minConfidence: 0.5
}

export default {
    name: 'Home',
    data () {
        return {
            mood: "",
            class: null,
            playlists: [],
            faceModel: null,
            emotionModel: null,
            image: null
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
            var self = this

            // load the face detection api & emotion detection model
            await faceapi.loadSsdMobilenetv1Model('/models/features/')
            await faceapi.loadFaceLandmarkModel('/models/features')
            await faceapi.loadFaceExpressionModel('/models/features')
            
            this.emotionModel = await tf.loadLayersModel('/models/emotion/model.json')
            
        },
        async getImage() {
            var self = this
            
        },
        async getEmotion() {
            var self = this
            const image = this.$children[0].webcam.webcamElement
            const canvas = faceapi.createCanvasFromMedia(image)
            console.log("image", image)

            const userExpression = await faceapi.detectSingleFace(image).withFaceLandmarks().withFaceExpressions();
            if(typeof userExpression !== undefined) {
                var expression = Object.keys(userExpression.expressions).reduce(function(a, b){ return userExpression.expressions[a] > userExpression.expressions[b] ? a : b })
            } else {
                console.log('new photo!')
            }


            /*const image = await this.$children.webcam.webCamElement.capture()
            // const img = tf.browser.fromPixels(this.$children[0].webcam.webcamElement)
            // returns a 3d tensor
            const img = tf.browser.fromPixels(this.$children[0].webcam.webcamElement)
            const img2 = tf.stack([img])
            const img3 = this.$children[0].webcam.webcamElement
            console.log(img2)
            console.log(img3)
            //const input = await faceapi.toNetInput(img, false, true)
            const detectionsWithExpressions = await faceapi.detectSingleFace(image).withFaceExpressions()
            console.log(detectionsWithExpressions)
            const detections = await faceapi.ssdMobilenetv1(input, params)
            //const detections = results.map(r => r.faceDetection)
            console.log(input)

            const face = await faceapi.extractFaces(input.inputs[0], detections)
            console.log(face)
            
            const output = await this.emotionModel.classify(face)
            console.log(output)
            */
           this.setMood(expression)
            
        },
        setMood(mood) {
            console.log('mood detected, ', mood)
            var self = this
            this.mood = mood
        },
        setImage(image) {
            console.log('picture taken')
            var self = this
            this.image = image
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