<template>
  <div class="flex h-screen">
    <Navigation class="fixed h-full" />
    <section class="w-full ml-16">
      <TopbarBase v-if="hasTopbar" class="fixed top-0 w-full" />
      <main class="p-8" :class="{ 'pt-24': hasTopbar }">
        <!-- <p v-for="i in 100" :key="i">Paragraph</p> -->
      </main>
    </section>
  </div>
</template>

<script setup>
import Navigation from "./components/Navigation/Navigation.vue";
import TopbarBase from "./components/Topbar/TopbarBase.vue";
defineProps({});
const hasTopbar = true;
</script>
