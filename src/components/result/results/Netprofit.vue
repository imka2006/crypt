<template>
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
</template>

<script setup> 
import { useStore } from "vuex";

const store = useStore()

</script>

<style>

</style>