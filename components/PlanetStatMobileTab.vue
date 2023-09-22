<script setup lang="ts">
defineProps<{
  selected: string,
  label: string,
  name: string
}>()
</script>

<template>
  <button 
    class="font-spartan uppercase text-white [--tw-text-opacity:0.5] font-bold text-xs tracking-widest py-5" 
    :class="[selected === label ? 'selected' : '', `decoration-${name.toLowerCase()}`]" 
  >
    {{ label }}
  </button>
</template>


<style scoped>
.selected {
  @apply underline decoration-4 underline-offset-[1.35rem] [--tw-text-opacity:1]
}
</style>