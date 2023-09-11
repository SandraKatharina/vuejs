<template>
  <div class="detail-container-wrapper">
    <div class="detail-container">
      <div>
        <h1>
          {{ name }}
        </h1>
        <div>
          {{ weight }}
        </div>
        <img :src="imageURL" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      name: 'all the pokemon',
      weight: 0,
      imageURL:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSXIKDLsMuP5EdhIb5jQnKalXPWDxiEpwBgxQ&usqp=CAU'
    }
  },
  async created() {
    const nameParam = this.$route.query.name

    const response = await fetch('https://pokeapi.co/api/v2/pokemon/' + nameParam)
    const result = await response.json()

    this.name = result.name
    this.weight = result.weight
    this.imageURL = result.sprites.other['official-artwork'].front_default
  }
}
</script>

<style scoped>
.detail-container-wrapper {
  width: 100vw;
  min-height: 400px;
  display: flex;
  justify-content: center;
  margin: 50px auto auto auto;
}
.detail-container {
  width: 500px;

  background-color: burlywood;
  padding: 50px 0 0 50px;
}
img {
  width: 200px;
}
</style>
