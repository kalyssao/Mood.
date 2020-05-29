<template>
  <div class="results-list">
    <b-container>
      <b-row>
        <b-col>
          <RwvPlaylist :playlists=playlists></RwvPlaylist>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>


<script>
import RwvPlaylist from '@/components/ThePlaylist.vue'
import axios from 'axios'

export default {
    name: "RwvRecommendations",
    props: {
        mood: {
            type: String,
            required: true
        }
    },
    data() {
        return {
            playlists: []
        }
    },
    // On mount, use the mood prop to get the list
    // of playlists (which is then passed to the Playlist component)
    watch: {

    },
    created: function () {
        console.log(this.props)
        var self = this
        axios.get('http://localhost:5000/recommend', {
            params: {
            mood: this.props.mood
            }
        })
        .then(function (response) {
            // we expect a json of 5 playlists, which we need to pass 
            // to the playlists component
            console.log(response.data.playlists.items)
            this.playlists = response.data.playlists.items
            //var res = response.data.body
            /*self.$router.push({
            name: 'Home',
            params: {
            playlists: response.data.playlists.items
                    }
                })*/
        })
        .catch(function (error) {
            console.log(error)
        })
    },
    components: {
        RwvPlaylist
    }
}
</script>

<style>

</style>