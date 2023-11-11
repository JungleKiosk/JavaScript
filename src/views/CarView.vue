<script setup>


import { useRoute } from 'vue-router';
import { ref, onBeforeMount } from "vue";
import cars from "../data/data.json"

const car = ref(null)
const route = useRoute()
const { id } = route.params;

// console.log(route.params)

onBeforeMount(() => {
    car.value = cars.find(c => c.id === parseInt(id))

})


</script>

<template>
    <div class="container">
        <div class="row">
            <div class="col-12 col-lg-8">
                <p>{{ car.title }}</p>
            </div>
        </div>
    </div>
</template>

<style></style>
