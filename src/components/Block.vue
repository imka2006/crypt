<template>
    <div class="all-block">
        <div class="all-name">{{ inner.name }}</div>
        <div v-if="hundretPercent * inner.percent + inner.money >= inner.money" class="all-money">общяя прибыль с монеты {{ inner.name }}: {{ hundretPercent * inner.percent + inner.money}}</div>
        <div v-else class="all-money">общий убыток с монеты {{ inner.name }}: {{ hundretPercent * inner.percent + inner.money}}</div>
        <div v-if="inner.percent >= 0" class="all-money">чистая прибыль: {{ hundretPercent * inner.percent }}</div>
        <div v-else class="all-money">чистый убыток: {{ hundretPercent * inner.percent }}</div>
        <div class="all-time">за - {{ inner.time }}</div>
    </div>
</template>

<script setup>
import { onMounted, ref } from "vue"
import { useStore } from "vuex" 

const props = defineProps(['inner'])
const hundretPercent = props.inner.money / 100

const store = useStore()
const counter = ref(0)

onMounted(() => {
    const iren = {
        id:counter.value,
        nested:props.inner.money,
        money:hundretPercent * props.inner.percent + props.inner.money,
        cleanMoney:hundretPercent * props.inner.percent,
    }
    store.state.allData.push(iren)
})

</script>

<style lang="scss">
.all {
    &-boolean {
        display: flex;
        align-items: center;
        gap: 5px;
    }

    &-checkbox {
        width: 20px;
        height: 20px;
    }

    &-block {
        padding: 20px;
        border: 1px solid #000;
        border-radius: 5px;
        background: #ccc;
        color: blue;
        display: flex;
        align-items: center;
        gap: 20px;
        margin-bottom: 20px;
        justify-content: center;
        flex-wrap: wrap;
    } 

    @media screen and (max-width:472px) {
        &-block {
            input {
                width: 100%;
                box-sizing: border-box;
            }
        }
    }


}
</style>