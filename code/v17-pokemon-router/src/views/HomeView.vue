<template>
  <div class="card-container">
    <NameCard
      v-for="pokemon in allPokemon"
      :key="pokemon"
      :name="pokemon.name"
      @pokemonClicked="pokemonSelectHandler"
    />
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
  emits: ['pokemonSelected'],
  methods: {
    pokemonSelectHandler(pokemon) {
      this.$emit('pokemonSelected', pokemon)
      console.log(pokemon)
    }
  },

  async created() {
    const response = await fetch('https://pokeapi.co/api/v2/pokemon')
    const result = await response.json()
    this.allPokemon = result.results
  }
}
</script>

<style scoped>
.card-container {
  display: flex;
  flex-wrap: wrap;
  width: 500px;
  min-height: 100px;
  gap: 10px;
  margin: 50px auto auto auto;
}
</style>
