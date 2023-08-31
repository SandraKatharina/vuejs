<template>
  <div class="card-container">
    <NameCard v-for="pokemon in allPokemon" :key="pokemon" :name="pokemon.name" />
  </div>
</template>

<script>
import NameCard from '../components/NameCard.vue'

export default {
  components: {
    NameCard
  },
  data() {
    return {
      allPokemon: []
    }
  },
  async created() {
    const response = await fetch('https://pokeapi.co/api/v2/pokemon')
    const result = await response.json()
    this.allPokemon = result.results

    console.log(result.results)
  }
}
</script>

<style scoped>
.card-container {
  display: flex;
  flex-wrap: wrap;
  width: 600px;
  min-height: 600px;
  gap: 10px;
}
</style>
