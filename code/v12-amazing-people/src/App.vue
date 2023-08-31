<template>
  <div class="main">
    <TheList />

    <!-- <p v-for="amazingPerson in amazingPeople" :key="amazingPerson.id">{{ amazingPerson.name }}</p> -->
  </div>
</template>

<script>
// import amazingPeople from './amazingPeople.json'
import TheList from './components/TheList.vue'

export default {
  // data() {
  //   return {
  //     amazingPeople: amazingPeople
  //   }
  // },
  components: { TheList }
}
</script>

<style scoped></style>
