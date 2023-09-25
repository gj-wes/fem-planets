<script setup lang="ts">
defineProps<{
  selected: string,
  label: string,
  name: string,
  number: string
}>()
</script>

<template>
  <button 
    class="block ml-auto w-full max-w-[17.5rem] border-white [--tw-border-opacity:0.2] text-xs text-left uppercase font-bold px-5 py-4"
    :class="[selected === label ? `bg-${name.toLowerCase()}` : 'hover:bg-[rgba(216_216_216/0.2)] border']"
  >
    <span class="text-white [--tw-text-opacity:0.5] inline-block mr-4">{{ number }}</span> {{ label }}
  </button>
</template>
