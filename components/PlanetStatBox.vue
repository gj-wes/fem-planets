<script lang="ts" setup>
defineProps<{
  label: string,
  stat: string
}>()
</script>

<template>
  <div class="border border-white [--tw-border-opacity:0.2] flex md:flex-col md:gap-1 justify-between items-center md:items-start px-6 py-2 md:py-5 uppercase">
    <div class="font-spartan text-[8px] lg:text-sm leading-4 text-white [--tw-text-opacity:0.5]">
      {{ label }}
    </div>
    <div class="font-antonio font-medium text-xl md:text-2xl lg:text-3xl text-white mb-1 md:mb-0">
      {{ stat }}
    </div>
  </div>
</template>
