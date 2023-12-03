<template>
  <header class="header">
    <div class="container">
      <div class="header-content">
        <h1>Добро пожаловать!</h1>
        <ul class="header-list">
          <li > <router-link class="header-item" to="/">топ инвестора</router-link>
             <router-link v-for="item in store.state.list" :key="item.id" :to="item.link"
               class="header-item">{{ item.name }}</router-link> 
          </li>
        </ul>

      </div>
    </div>
  </header>
</template>

<script setup>
import { useStore } from 'vuex';


const store = useStore()

</script>

<style lang="scss">
.header {
  padding: 30px 0;
  background: #1DD15D;
  display: flex;
  align-items: center;
  justify-content: center;

  &-list {
    margin-top: 50px;
  }

  &-item {
    padding: 10px 15px;
    border-radius: 5px;
    background: white;
    margin: 0 20px;
    font-size: 20px;  
  }

  h1 {
    color: white;
    display: flex;
    justify-content: center;
  }
  

  @media screen and (max-width:550px) {
    &-item {
      display: block;
    margin: 35px auto 0;
    text-align: center;
    align-items: center;
    justify-content: center;
    display: flex;
    }
    &-list {
      margin: 0;
    }
  }
   
}
</style>