<template>
    <div class="card-deck">
        <li v-for="movie in movies"
        :key="movie.title">
            <b-card
            :img-src=movie.poster_path
            :title=movie.original_title
            style="max-width: 15rem;">
                <p>{{ movie.runtime }}</p>
                <p>{{ movie.overview }}</p>
            </b-card>
        </li>
    </div>
</template>

<script>
export default {
    props: {
        movies: {
            type: Array,
            required: true
        }
    },
    name: 'RwvMovie',
}
</script>

<style>

</style>