<template>
    <div class="wrapper">
        <div class="card-deck">
            <li v-for="playlist in playlists"
            :key="playlist.name">
                <b-card 
                :img-src=playlist.images[0].url 
                :title=playlist.name 
                style="max-width: 15rem;">
                    <div class="playlist">
                        <p>{{ playlist.description }} </p>
                        <img style="max-width: 20px;" src="@/assets/spotify.png">
                        <a :href=playlist.external_urls.spotify>Open In Spotify</a>
                    </div>
                </b-card>
            </li>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        playlists: {
            type: Array,
            required: true
        },
    },
    name: 'RwvPlaylist'
}
</script>

<style>
.wrapper {
    background-color: black;
}

</style>