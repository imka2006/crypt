<template>
  <section class="all">
    <div class="container">
      <div class="all-content">
        <form @submit.prevent="addList" class="all-block">
          <input type="text" placeholder="Название" required v-model="name">
          <input type="number" placeholder="процент" required v-model="percent">
          <input type="number" placeholder="вложено денег $€₽" required v-model="money">
          <input type="text" placeholder="время" required v-model="time">
          <button class="all-add">ДОБАВИТЬ</button>
        </form>
        <Block v-for="inner in coin" :key="inner.id" :inner="inner" />

        <template v-if="store.state.allData.reduce((accumulator, currentValue) => {
            return accumulator + currentValue.money;
          }, 0) >= store.state.allData.reduce((accumulator, currentValue) => {
            return accumulator + currentValue.nested;
          }, 0)">
            обящяя прибыль со всех монет: {{ store.state.allData.reduce((accumulator, currentValue) => {
            return accumulator + currentValue.money;
          }, 0) }}
        </template>
        <template v-else>
            обящий убыток со всех монет: {{ store.state.allData.reduce((accumulator, currentValue) => {
            return accumulator + currentValue.money;
          }, 0) }}
        </template>
        <br />
        <br />
        <template v-if="store.state.allData.reduce((accumulator, currentValue) => {
            return accumulator + currentValue.cleanMoney;
          }, 0) >= 0">
          обящяя чистая прибыль со всех монет: {{ store.state.allData.reduce((accumulator, currentValue) => {
            return accumulator + currentValue.cleanMoney;
          }, 0) }}
        </template> 
        <template v-else>
          общий чистый убыток со всех монет: {{ store.state.allData.reduce((accumulator, currentValue) => {
            return accumulator + currentValue.cleanMoney;
          }, 0) }}
        </template> 

        <br/>
        <br/>

        вложено: {{ store.state.allData.reduce((accumulator, currentValue) => {
            return accumulator + currentValue.nested;
          }, 0) }}
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue'
import { useStore } from 'vuex'
import Block from '../components/Block.vue'
const name = ref('')
const money = ref()
const time = ref('')
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