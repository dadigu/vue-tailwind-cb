<template>
  <a
    href="#"
    class="aspect-square flex flex-col items-center justify-center text-white hover:bg-slate-700"
    :class="{ 'bg-slate-700': active }"
    @click.prevent
  >
    <fa v-if="icon" size="lg" :icon="['fas', icon]" />
    <small>{{ title }}</small>
  </a>
</template>

<script setup>
defineProps({
  title: {
    type: String,
    required: true,
  },

  icon: {
    type: String,
    default: null,
  },

  active: {
    type: Boolean,
    default: false,
  },
});
</script>
