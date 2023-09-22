<template>
  <nav class="border-b border-white [--tw-border-opacity:0.2] py-4 px-6 flex justify-between items-center">
    <NuxtLink to="/" class="font-antonio text-2xl tracking-tighter uppercase">the planets</NuxtLink>

    <button @click="showMobileNav = !showMobileNav">
      <img src="../assets/icon-hamburger.svg" alt="" :class="{ 'opacity-50':showMobileNav }">
    </button>
  </nav>

  <nav v-if="showMobileNav" class="bg-[#070724] absolute w-full h-full z-10 px-6 pt-10">
    <ul>
      <li v-for="p in planets" class="border-b border-white [--tw-border-opacity:0.2] last:border-none py-5 first:pt-0">
        <NuxtLink 
          :to="`/planet/${ p.name }`" 
          @click="showMobileNav = !showMobileNav"
          class="font-spartan font-bold text-sm uppercase flex items-center"
        >
          <span :class="['inline-block', 'rounded-full', 'w-5', 'h-5', 'mr-5', `bg-${p.name.toLowerCase()}`]"></span>
          <span class="inline-block mt-1">{{ p.name }}</span>
          <img src="../assets/icon-chevron.svg" alt="" class="ml-auto">
        </NuxtLink>
      </li>
    </ul>
  </nav>
</template>

<script setup lang="ts">
const planets = usePlanetData()
const showMobileNav = ref(false)
</script>
