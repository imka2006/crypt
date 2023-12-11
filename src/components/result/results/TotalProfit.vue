<template>
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
</template>

<script setup>
import { useStore } from "vuex";

const store = useStore()
</script>

<style></style>