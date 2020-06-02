<template>
    <div class="wrapper">
        <div class="playlists">
            <li v-for="playlist in playlists"
            :key="playlist.name">
                <div class="image">
                    <img style=" float:left; max-width: 5rem; margin-right: 15px;" :src="playlist.images[0].url">
                </div>
                <div class="content">
                    <h5>{{ playlist.name }}</h5>
                    <!--<img id="playlist-img" src="@/assets/spotify.png">
                    <a :href=playlist.external_urls.spotify>Open In Spotify</a>-->    
                    <p>{{ playlist.description }}</p>
                </div>
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
.playlist-item {
    width: 100%
}
#playlist-img {
    display: block;
    max-width: 5%;
    max-height: 2%;
    width: auto;
    height: auto;
}

.content {
    text-align: left;
    margin:auto 0;
}

</style>