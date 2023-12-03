<template>
  <Header />
  <router-view />
  <Footer />
</template>

<script setup>
import Header from "./components/header/Header.vue";
import Footer from "./components/Footer.vue";
</script>

<style lang="scss">
body {
  margin: 0;
  padding: 0;
  font-family: sans-serif;
}

#app {
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  min-height: 100vh;
}

h1,
h2,
h3,
h4,
h5,
h6,
p,
ul,
ol {
  margin: 0;
}

a {
  text-decoration: none;
  color: inherit;
}

li {
  list-style: none;
}

button,
input {
  border: none;
  outline: none;
}

input[type="number"]::-webkit-inner-spin-button,
input[type="number"]::-webkit-outer-spin-button {
  -webkit-appearance: none;
  margin: 0;
}

/* Убрать стрелки в Firefox */
input[type="number"] {
  -moz-appearance: textfield;
}

.container {
  max-width: 1140px;
  margin: 0 auto;
  padding: 0 10px;
}

.router-link-active.router-link-exact-active.header-item {
  color: white;
  background: black;
}
</style>