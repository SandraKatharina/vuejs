<template>
  <div>
    <button @click="deleteClicked">DELETE</button>
  </div>
</template>

<script>
export default {
  props: ['id'],

  data() {
    return {
      destinationToDelete: null
    }
  },

  methods: {
    deleteClicked() {
      if (confirm('are you sure ?')) {
        alert(this.id)
      }
      //fetch to connect to db
    }
  },
  async mounted() {
    const response = await fetch(`http://localhost:3000/allDestinations/:id`)
    const result = await response.json()
    console.log(result)
    this.destinationToDelete = result.destination
    console.log(this.destinationToDelete)
  }
}
</script>

<style scoped></style>
