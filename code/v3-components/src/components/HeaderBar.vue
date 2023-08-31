<template>
  <header>
    <h1>LOGO</h1>
    <nav>
      <ul>
        <li><a href="#">HOME</a></li>
        <li><a href="#">CONTACT</a></li>
        <li><a href="#">GALLERY</a></li>
        <li><a href="#">ABOUT</a></li>
      </ul>
    </nav>
  </header>
</template>

<style>
header {
  background-color: magenta;
  min-height: 150px;
}
h1 {
  color: white;
  padding: 40px 40px 0;
}
nav ul {
  display: flex;
  gap: 40px;
}
nav li {
  display: inline-block;
}
nav a {
  text-decoration: none;
  font-size: 18px;
  font-style: bold;
  color: white;
}
nav a:hover {
  color: orangered;
}
</style>
