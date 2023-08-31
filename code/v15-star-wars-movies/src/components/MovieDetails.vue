<template>
  <div v-if="movieObject == undefined">
    <span class="select-span"> select a movie on the left </span>
  </div>
  <div v-else>
    <h2>{{ movieObject.episode_id }} - {{ movieObject.title }}</h2>
    <p>
      {{ movieObject.opening_crawl }}
    </p>
    <div v-if="characterNames == 0">loading ...</div>
    <div v-else>
      <!-- <ul>
        <li v-for="character in characterNames" :key="character">{{ character }}</li>
      </ul> -->
    </div>
    <div>
      <MovieCharactersList :movieObject="movieObject" />
    </div>
  </div>
</template>

<script>
import MovieCharactersList from './MovieCharactersList.vue'

export default {
  props: {
    movieObject: {
      type: Object,
      required: false
    }
  },
  //   data() {
  //     return {
  //       characterNames: []
  //     }
  //   },
  components: { MovieCharactersList }
  //   watch: {
  //     async movieObject() {
  //       this.characterNames = []
  //       this.totalCharacters = this.movieObject.characters.length

  //       for (let i = 0; i < this.movieObject.characters.length; i++) {
  //         const characterURL = this.movieObject.characters[i]

  //         const response = await fetch(characterURL)
  //         const result = await response.json()

  //         this.characterNames.push(result.name)

  //       }
  //     }
  //   }
}
</script>

<style scoped>
.select-span {
  font-weight: bold;
}
</style>
