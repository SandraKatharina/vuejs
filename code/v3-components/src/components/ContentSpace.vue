<template>
  <div id="main">
    <CardComponent />
    <CardComponent />
    <CardComponent />
    <CardComponent />
    <CardComponent />
    <CardComponent />
    <CardComponent />
    <CardComponent />
  </div>
</template>
<script>
import CardComponent from "./CardComponent.vue";

export default {
  components: { CardComponent },
};
</script>
<style>
#main {
  max-width: 900px;
  min-height: 350px;
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  margin: 20px auto;
}
</style>
