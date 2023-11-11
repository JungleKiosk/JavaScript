<script setup>
import { ref } from "vue";
import itemsDoc from "../data/itemsDoc.json";

const itemDoc = ref(itemsDoc);

</script>

<template>
  <div class="sidebar">
    <h1>Hallo!</h1>
    <div class="scrollbar">
      <div v-for="doc in itemDoc" :key="doc.id" @click="mostraDocumentazione(doc.id)" class="sidebar-item">
        {{ doc.title }}
      </div>
    </div>
  </div>

</template>

<style>

</style>
