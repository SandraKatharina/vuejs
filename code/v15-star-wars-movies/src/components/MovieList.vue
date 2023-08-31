<template>
  <h2>LIST OF MOVIES</h2>
  <div class="loading" v-if="movieObjects.length == 0">loading ...</div>

  <div v-else class="movie-list">
    <MovieCard
      v-for="movieObject in movieObjects"
      :key="movieObject.episode_id"
      :movieObject="movieObject"
      @movieSelect="movieSelectHandler"
    />
  </div>
</template>

<script>
import MovieCard from './MovieCard.vue'

export default {
  components: {
    MovieCard
  },
  data() {
    return {
      movieObjects: []
    }
  },
  emits: ['movieSelect'],

  async created() {
    const respons = await fetch('https://swapi.dev/api/films')
    const result = await respons.json()
    this.movieObjects = result.results
  },
  methods: {
    movieSelectHandler(movieObject) {
      this.$emit('movieSelect', movieObject)
    }
  }
}
</script>

<style scoped>
h2 {
  color: white;
}

.movie-list {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 10px;
}
</style>
