<template>
  <div class="cardHolder">
    <PersonCard name="Bob" profession="Student" />
    <PersonCard name="Alex" profession="Architect" />
    <PersonCard name="Susi" profession="Chef" />
    <PersonCard name="Lola" profession="Maths Teacher" />
  </div>
</template>

<script>
import PersonCard from './components/PersonCard.vue'

export default {
  components: { PersonCard }
}
</script>

<style>
.cardHolder {
  display: flex;
  justify-content: center;
  gap: 1rem;
  flex-wrap: wrap;
}
</style>
