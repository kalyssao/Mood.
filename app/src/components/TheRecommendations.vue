<template>
  <div class="results-list">
    <b-container>
        <b-row>
            <b-col sm="12"><h5 class="text-left">Top Recommendations</h5></b-col>
        </b-row>
        <b-row>
            <b-col>
                <RwvPlaylist :playlists=playlists></RwvPlaylist>
                <b-modal ref="api-modal" centered>
                    Mood. couldn't suggest playlists 😔 
                    <br> Would you mind retrying?
                </b-modal>
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
            required: false
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
            if (typeof newMood === "undefined") {
                return
            }
            var self = this
            axios.get(process.env.VUE_APP_PROD_SERVER, {
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
                this.$refs['api-modal'].show()
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