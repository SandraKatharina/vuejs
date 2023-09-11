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
    const randomNumber = 66391
    const response = await fetch(
      'https://collectionapi.metmuseum.org/public/collection/v1/objects/' + randomNumber
    )
    const result = await response.json()

    this.artObject = result
    console.log(result)
  }
}

// function randomizeInRange(min, max) {
//   return Math.floor(Math.random() * (max - min)) + min
// }
// export default {
//   data() {
//     return {
//       isLoadingList: true,
//       artObject: {},
//       resultList: {}
//     }
//   },
//   async created() {
//     const responseList = await fetch(
//       'https://collectionapi.metmuseum.org/public/collection/v1/objects/'
//     )
//     this.resultList = await responseList.json()

//     this.isLoadingList = false
//     this.showRandomArtObject()
//   },

//   methods: {
//     async showRandomArtObject() {
//       const randomNumber = randomizeInRange(0, this.resultList.total)
//       const objectID = this.resultList.ObjectIDs[randomNumber]

//       const response = await fetch(
//         'https://collectionapi.metmuseum.org/public/collection/v1/objects/' + objectID
//       )
//       const result = await response.json()
//       this.artObject = result
//       console.log(result)
//     }
//   }
// }
</script>

<style scoped></style>
