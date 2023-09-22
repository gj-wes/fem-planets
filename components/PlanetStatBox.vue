<script lang="ts" setup>
defineProps<{
  label: string,
  stat: string
}>()
</script>

<template>
  <div class="border border-white [--tw-border-opacity:0.2] flex justify-between items-center px-6 py-2 uppercase">
    <div class="font-spartan text-[8px] leading-4 text-white [--tw-text-opacity:0.5]">
      {{ label }}
    </div>
    <div class="font-antonio font-medium text-xl text-white mb-1">
      {{ stat }}
    </div>
  </div>
</template>
