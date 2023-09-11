<template>
  <div class="main">
    <h1>DESTINATIONS</h1>
    <ul class="destinations-list">
      <li v-for="destination in destinationList" :key="destination.id">{{ destination.name }}</li>
    </ul>
    <button>DELETE</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      destinationList: {}
    }
  },
  async mounted() {
    const response = await fetch('http://localhost:3000/allDestinations/')
    const result = await response.json()
    this.destinationList = result.results
    console.log(this.destinationList)
  }
}
</script>

<style scoped>
.main {
  width: 400px;
  min-height: 400px;
  margin: 50px;
  color: blue;
}

.destinations-list {
  list-style: none;
  padding: 0;
}

.destinations-list > li {
  padding: 5px;
  font-size: larger;
}
</style>
