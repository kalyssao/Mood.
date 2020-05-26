<template>
    <div class="wrapper">
        <div class="child">
            <div class="prediction">
                <b-row>
                    <b-col sm="9">
                        <h1>You are {{ prediction }}</h1>
                    </b-col>
                    <b-col sm="3">
                        <b-button variant="light" style="padding: 15px;" block squared @click="generateMedia">Recommend!</b-button>
                    </b-col>
                </b-row>
            </div>
        </div>
    </div>
</template>

<script>
import axios from 'axios'

export default {
    name: 'RwvText',
    props: {
        prediction: {
            type: String,
            required: true
        }
    },
    methods: {
        generateMedia() {
            let self = this
            axios.get('http://localhost:5000/recommend', {
                params: {
                    mood: this.prediction
                }
            })
            .then(function (response) {
                // we expect a json of 5 playlists, which we need to pass 
                // to the track/results component
                console.log(response.data.playlists.items)
                //var res = response.data.body
                self.$router.push({
                    name: 'Recommendations',
                    params: {
                        playlists: response.data.playlists.items
                    }
                })
            })
            .catch(function (error) {
                console.log(error)
            })
        }
    }
}
</script>

<style>
.wrapper {
    text-align: center;
}

.child {
    width: 50rem;
    height: 10rem;
    background-color: white;
    display: inline-block;
}

.prediction {
    padding: 50px;
}

</style>