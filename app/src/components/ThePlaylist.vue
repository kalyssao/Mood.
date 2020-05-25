<template>
    <div>
        <li v-for="playlist in playlists"
        :key="playlist.name">
            <div class="playlist">
                <div class="image">
                    <img :src="playlist.images[0].url">
                </div>
                <h3>{{ playlist.name }} </h3>
                <p>{{ playlist.description }} </p>
                {{playlist.external_urls.spotify}}
                <a :href="'//' + playlist.external_urls.spotify">Open In Spotify</a>
                <a :href="'//' + 'https://google.com'">Sad!</a>
            </div>  
         </li>
        
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
    name: 'RwvPlaylist',
}
</script>

<style>

</style>