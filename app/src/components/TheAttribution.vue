<template>
    <div>
        <div class="attribution">
                A learning project built by <a id="owner" target="blank" href="http://kalyssao.github.io">The Lyss</a>.
                <br>
            Powered by <a href="https://www.themoviedb.org/"><img id="tmdb" src="@/assets/tmdb.svg"></a> & <a href="https://developer.spotify.com/"><img id="spotify" src="@/assets/spotify.png"></a>
        </div>
    </div>
</template>

<script>
export default {
    name: 'RwvAttribution'
}
</script>

<style>
.attribution {
    padding-bottom: 20px;
}

#tmdb  {
    max-width: 60px;
}

#spotify {
    max-width: 25px;
}

</style>