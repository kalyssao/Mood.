<template>
  <div class="results-list">
    <b-container>
        <b-row>
            <b-col sm="12"><h5 class="text-left">Top Recommendations</h5></b-col>
        </b-row>
        <b-row>
            <b-col>
                <RwvPlaylist :playlists=playlists></RwvPlaylist>
            </b-col>
        </b-row>
    </b-container>
  </div>
</template>


<script>
import axios from 'axios'; 
import RwvPlaylist from '@/components/ThePlaylist.vue'

export default {
    name: "RwvRecommendations",
    props: {
        mood: {
            type: String,
            required: true
        }
    },
    components: {
        RwvPlaylist
    },
    data() {
        return {
            playlists: []
        }
    },
    // Watch for a change in the mood prop from the parent component
    // then make an axios call to the spotify API - before we tried mounted but couldn't access the value -_-
    watch: {
        mood: function (newMood) {
            var self = this
            //console.log(`watch triggered, new value of mood is: ${newMood}`)
            axios.get('https://wsx6y0dvog.execute-api.us-east-1.amazonaws.com/dev/recommend', {
                params: {
                    mood: newMood
                }
            })
            // use arrow functions because callbacks change the scope (this)
            .then((response) => {
                // we expect a json of 5 playlists, which we need to pass 
                // to the playlists component
                this.playlists = response.data.playlists.items
            })
            .catch((error) => {
                console.log(error)
            })
        }
    }
}
</script>

<style>
.results-list {
    max-height: 400px;
    overflow: scroll;
}

</style>