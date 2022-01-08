<template>
  <nav class="bg-slate-600 w-16">
    <NavigationItem v-for="(item, index) in items" :key="index" v-bind="item" />
  </nav>
</template>

<script setup>
import { ref } from "vue";
import NavigationItem from "./NavigationItem.vue";

const items = ref([
  { title: "Home", icon: "home", active: true },
  { title: "About", icon: "question-circle", active: false },
  { title: "Users", icon: "users", active: false },
]);
</script>
