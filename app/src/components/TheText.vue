<template>
    <div>
        <h3>Predicted mood: {{ mood }}</h3>
        <b-button @click="generateMedia">Recommend!</b-button>
    </div>
</template>

<script>
import axios from 'axios'

export default {
    name: 'RwvText',
    data () {
        return {
            mood: "",
            music: [],
            movies: []
        }
    },

    methods: {
        async generateMedia () {
            try {
                res = await axios.post(
                    'http://localhost:4040/generate-media', {
                        query: `{ 
                            getMusic {
                                name
                                cover
                            }
                        }`
                })
                this.music = res.data.data
            } catch (e) {
                console.log('err', e)
            }
        }
    }
}
</script>

<style>

</style>