<template>
  <div>
    <button @click="deleteClicked">DELETE</button>
  </div>
</template>

<script>
export default {
  props: ['id'],

  methods: {
    deleteClicked() {
      if (confirm('are you sure ?')) {
        alert(this.id)

        //fetch to connect to db
      }
    }
  }
}
</script>

<style scoped></style>
