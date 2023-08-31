<template>
  <div class="card">
    <h3>{{ name }}</h3>
    <p><span>Profession: </span>{{ profession }}</p>
  </div>
</template>

<script>
export default {
  props: ['name', 'profession']
}
</script>

<style>
.card {
  width: 150px;
  min-height: 150px;
  background-color: goldenrod;
  box-shadow: 10px 10px 10px peachpuff;
  padding: 10px;
}
h3 {
  color: white;
}
span {
  font-family: Georgia, 'Times New Roman', Times, serif;
  font-weight: bold;
  color: white;
}
p {
  color: blue;
  font-weight: bolder;
}
</style>
