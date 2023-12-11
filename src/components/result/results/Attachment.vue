<template>
  вложено: {{ store.state.allData.reduce((accumulator, currentValue) => {
          return accumulator + currentValue.nested;
        }, 0) }}
</template>

<script setup>
import { useStore } from "vuex";

const store= useStore()
</script>

<style>

</style>