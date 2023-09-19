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
      destinationToDelete: this.id
    }
  },

  methods: {
    deleteClicked() {
      if (confirm('are you sure ?')) {
        alert(this.id)
        fetch(`http://localhost:3000/allDestinations/${this.id}`, {
          method: 'DELETE'
        })
          .then((response) => {
            if (response.ok) {
              alert('Destination deleted successfully')
            } else {
              alert('Failed to delete destination')
            }
          })
          .catch((error) => {
            console.error('Error deleting destination:', error)
            alert('An error occurred while deleting destination')
          })
      }
    }
  }
}
</script>

<style scoped></style>
