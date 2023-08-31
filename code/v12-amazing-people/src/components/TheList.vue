<template>
  <div v-for="amazingPerson in amazingPeople" :key="amazingPerson.id">
    <ul class="list-main">
      <li><ListItem :amazingPerson="amazingPerson" /></li>
    </ul>
  </div>
</template>

<script>
import amazingPeople from '../amazingPeople.json'
import ListItem from './ListItem.vue'

export default {
  data() {
    return {
      amazingPeople: amazingPeople
    }
  },
  components: { ListItem }
}
</script>

<style scoped>
.list-main {
  list-style: none;
}
</style>
