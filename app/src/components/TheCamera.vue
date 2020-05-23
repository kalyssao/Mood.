<template>
    <div>
        <div>
            <video ref='video' width='840' height='480' autoplay></video>
        </div>
        <div>
            <div><b-button variant="dark" id="snap" v-on:click="capture()"> Take Picture</b-button></div>
            <canvas ref="canvas" id="canvas" width="640" height="480" style="border:1px solid #BBB;"></canvas>
            <ul>
                <li v-for="c in captures" :key="c.id">
                    <img v-bind:src="c" height="50"/>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
export default {
  name: 'RwvCamera',
  data() {
    return {
      video: {},
      canvas: {},
      captures: [],
    };
  },
  mounted() {
    this.video = this.$refs.video;
    if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
      navigator.mediaDevices.getUserMedia({ video: true }).then((stream) => {
        this.video.srcObject = stream;
        this.video.play();
      });
    }
  },
  methods: {
    capture() {
      this.canvas = this.$refs.canvas;
      const context = this.canvas.getContext('2d').drawImage(this.video, 0, 0, 640, 480);
      this.captures.push(canvas.toDataURL('image/png'));
    },
  },
};

</script>

<style>
    body {
        background-color: #F0F0F0;
    }
    #app {
        text-align: center;
        color: #2c3e50;
        margin-top: 60px;
    }
    #video {
        background-color: #000000;
    }
    #canvas {
        display: none;
    }
    li {
        display: inline;
        padding: 5px;
    }
</style>