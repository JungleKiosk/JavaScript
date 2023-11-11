<script setup>
import carsData from "../data/data.json";
import { ref } from "vue";
import {RouterLink}  from "vue-router"

const cars = ref(carsData);

</script>

<template>
    <div class="sidebar">
        <h1>Hallo!</h1>
        <div class="scrollbar">
            <div class="card">
                
                <RouterLink :to="`/car/${car.id}`" v-for="car in cars" class="card">
                    <p>{{ car.title }}</p>
                    <p>{{ car.id }}</p>
                </RouterLink>
            </div>
        </div>
    </div>
</template>

<style></style>
