<template>
    <div>
        <h3>Predicted mood: {{ prediction }}</h3>
        <b-button @click="generateMedia">Recommend!</b-button>
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

</style>