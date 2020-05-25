<template>
  <div class="results-list">
    <RwvPlaylist :playlists=playlists></RwvPlaylist>
  </div>
</template>


<script>
import RwvMovie from '@/components/TheMovie.vue'
import RwvPlaylist from '@/components/ThePlaylist.vue'

export default {
  name: "Recommendations",
  props: {
    playlists: {
      type: Array,
      required: true
    }
  },
  components: {
    RwvMovie,
    RwvPlaylist
  }
}
</script>

<style>

</style>