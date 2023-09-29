<template>
  <nav class="border-b border-white [--tw-border-opacity:0.2] py-4 px-6 md:py-8 lg:py-6">
    <div class="flex justify-between items-center md:flex-col lg:flex-row lg:max-w-7xl lg:mx-auto">
      <NuxtLink to="/" class="font-antonio text-2xl lg:text-3xl tracking-tighter uppercase">the planets</NuxtLink>
  
      <ul class="hidden md:flex gap-8 mt-6 lg:mt-0">
        <li v-for="p in planets">
          <NuxtLink 
            :to="`/planet/${ p.name }`" 
            @click="showMobileNav = !showMobileNav"
            class="font-spartan font-bold text-xs uppercase text-white [--tw-text-opacity:0.75] tracking-[1px] hover:underline decoration-4 underline-offset-[-2.8rem]"
            :class="[`decoration-${p.name.toLowerCase()}`]"
          >
            {{ p.name }}
          </NuxtLink>
        </li>
      </ul>
  
      <button @click="showMobileNav = !showMobileNav" class="md:hidden">
        <img src="../assets/icon-hamburger.svg" alt="" :class="{ 'opacity-50':showMobileNav }">
      </button>
    </div>
  </nav>

  <nav v-if="showMobileNav" class="bg-[#070724] absolute w-full h-full z-10 px-6 pt-10 md:hidden">
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
