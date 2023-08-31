<template>
  <h3 style="color: white">CHARACTERS LIST :</h3>
  <div v-if="characterNames == 0">loading ...</div>
  <div v-else>
    <ul>
      <li v-for="character in characterNames" :key="character">{{ character }}</li>
    </ul>
  </div>
</template>

<script>
export default {
  props: {
    movieObject: {
      type: Object,
      required: false
    }
  },
  data() {
    return {
      characterNames: []
    }
  },
  watch: {
    async movieObject() {
      this.characterNames = []
      this.totalCharacters = this.movieObject.characters.length

      for (let i = 0; i < this.movieObject.characters.length; i++) {
        const characterURL = this.movieObject.characters[i]

        const response = await fetch(characterURL)
        const result = await response.json()

        this.characterNames.push(result.name)
      }
    }
  }
}
</script>

<style scoped>
li {
  color: white;
}
</style>
