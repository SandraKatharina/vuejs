<template>
  <div v-if="isLoading">LOADING . . .</div>
  <div v-else>
    <ul v-for="movie in movies">
      <li>
        <MovieCard :movie="movie" />
      </li>
    </ul>
  </div>
</template>

<script>
import MovieCard from './components/MovieCard.vue'

export default {
  data() {
    return {
      isLoading: true,
      movies: [],
      characters: []
    }
  },
  async mounted() {
    const response = await fetch('https://swapi.dev/api/films')
    const result = await response.json()
    this.movies = result.results

    // for (let i = 0; i < result.characters.length; i++) {
    //   const charURL = result.characters[i]

    //   const charResponse = await fetch(charURL)
    //   const characterResult = await charResponse.json()
    //   this.characters = characterResult.results.characters
    // }

    this.isLoading = false
  },
  components: { MovieCard }
}
</script>

<style scoped></style>
