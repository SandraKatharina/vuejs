<template>
  <div class="main">
    <h1>DESTINATIONS</h1>
    <ul class="destinations-list">
      <li v-for="destination in destinationList" :key="destination.id">
        <RouterLink to="/allDestinations/:id">
          {{ destination.name }} {{ destination.id }} </RouterLink
        ><DeleteButton :id="destination.id" />
      </li>
    </ul>
  </div>
</template>

<script>
import DeleteButton from '../components/DeleteButton.vue'

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
  },
  components: { DeleteButton }
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
li {
  display: flex;
  justify-content: space-between;
  width: 200px;
  gap: 10px;
}
</style>
