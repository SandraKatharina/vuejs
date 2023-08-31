<template>
  <div>
    <h1>Title: {{ artObject.title }}, dated :{{ artObject.objectDate }}</h1>
  </div>
  <img :src="artObject.primaryImageSmall" />
</template>

<script>
export default {
  data() {
    return {
      artObject: {}
    }
  },
  async mounted() {
    const randomNumber = 234
    const response = await fetch(
      'https://collectionapi.metmuseum.org/public/collection/v1/objects/' + randomNumber
    )
    const result = await response.json()

    this.artObject = result
    console.log(result)
  }
}
</script>

<style scoped></style>
