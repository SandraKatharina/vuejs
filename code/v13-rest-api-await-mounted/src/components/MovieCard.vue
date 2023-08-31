<template>
  <div>
    <h3>{{ movie.title }}</h3>
    <p>{{ movie.opening_crawl }}</p>
    <section>{{ movie.characters }}</section>
  </div>
</template>

<script>
export default {
  props: {
    movie: Object
  }
}
</script>

<style scoped>
p {
  line-clamp: 2;
}
</style>
