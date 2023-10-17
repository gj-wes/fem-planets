<script setup>
const planets = usePlanetData()

useHead({
  title: 'The Planets'
})
</script>

<template>
  <div>
    <ul class="flex gap-8 lg:gap-4 overflow-x-auto snap-x snap-mandatory lg:snap-none lg:max-w-7xl lg:mx-auto lg:px-4">
      <li v-for="p in planets" class="min-w-full snap-center grid py-20 lg:min-w-min">
        <NuxtLink 
          :to="`/planet/${ p.name }`" 
          class="self-center"
        >
          <img :src="p.images.planet" :alt="p.name" class="max-w-[80%] mx-auto">
        </NuxtLink>
        <p class="font-antonio text-4xl lg:text-2xl uppercase text-center mt-6 self-end">
          {{ p.name }}
        </p>
      </li>
    </ul>
  </div>
</template>