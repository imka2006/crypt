<template>
  <section class="all">
    <div class="container">
      <div class="all-content">
        <form @submit.prevent="addList" class="all-block">
          <input type="text" placeholder="Название"  v-model="name">
          <input type="text" placeholder="процент"  v-model="percent">
          <input type="number" placeholder="вложено денег $€₽"  v-model="money">
          <input type="text" placeholder="время"  v-model="time">
          <button class="all-add">ДОБАВИТЬ</button>
        </form>
        <Block v-for="inner in coin" :key="inner.id" :inner="inner" />

        <AllProfit />
        
      </div>
    </div>
  </section>
</template>

<script setup>
import { onMounted, ref } from 'vue'
import { useStore } from 'vuex'
import Block from '../components/Block.vue'
import AllProfit from '../components/result/AllProfit.vue'
const name = ref('')
const money = ref(1000)
const time = ref('mounth')
const percent = ref('')
const id = ref(0)

const store = useStore()

const coin = ref([])

const addList = () => {
  const item = {
    id: id.value,
    name: name.value,
    money: money.value,
    percent: percent.value,
    time: time.value,
    counter: id.value + 1,
  }
  coin.value.push(item)
  id.value++

  name.value = ''
  money.value = ''
  time.value = ''
  percent.value = ''
  id.value = ''

  console.log(coin.value);
}


</script>

<style lang="scss">
.all {

  input,
  button {
    padding: 10px;
    border-radius: 5px;
  }

  padding: 30px 0;

  &-add {
    color: black;
    font-size: 16px;
    cursor: pointer;
  }
}
</style>