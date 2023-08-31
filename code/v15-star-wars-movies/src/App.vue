<template>
  <section class="main-section">
    <div>
      <MovieList @movieSelect="movieSelectHandler" />
    </div>
    <div>
      <MovieDetails :movieObject="selectedMovie" />
    </div>
  </section>
</template>

<script>
import MovieDetails from './components/MovieDetails.vue'
import MovieList from './components/MovieList.vue'

export default {
  components: { MovieList, MovieDetails },
  data() {
    return {
      selectedMovie: undefined
    }
  },
  methods: {
    movieSelectHandler(movieObject) {
      this.selectedMovie = movieObject
    }
  }
}
</script>

<style scoped>
.main-section {
  display: flex;
  gap: 20px;
  margin: 0 auto;
  width: 1020px;
}

.main-section > div {
  width: 500px;
  min-height: 600px;
  background-color: khaki;
  margin: 0 auto;
  padding: 5px;
}
</style>
