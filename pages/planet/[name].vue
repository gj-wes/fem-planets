<template>

<!-- mobile tabs -->
<div class="border-b border-white [--tw-border-opacity:0.2] flex justify-center gap-10">
  <button 
    class="font-spartan uppercase text-white [--tw-text-opacity:0.5] font-bold text-xs tracking-widest py-5" 
    :class="[selectedInfo === 'overview' ? 'selected' : '', `decoration-${selectedPlanet.name.toLowerCase()}`]" 
    @click="selectedInfo = 'overview'"
  >
    overview
  </button>
  <button 
    class="font-spartan uppercase text-white [--tw-text-opacity:0.5] font-bold text-xs tracking-widest py-5" 
    :class="[selectedInfo === 'structure' ? 'selected' : '', `decoration-${selectedPlanet.name.toLowerCase()}`]" 
    @click="selectedInfo = 'structure'"
  >
    structure
  </button>
  <button 
    class="font-spartan uppercase text-white [--tw-text-opacity:0.5] font-bold text-xs tracking-widest py-5" 
    :class="[selectedInfo === 'geology' ? 'selected' : '', `decoration-${selectedPlanet.name.toLowerCase()}`]" 
    @click="selectedInfo = 'geology'"
  >
    surface
  </button>
</div>

<!-- planet -->
<div class="aspect-[5/4] flex justify-center items-center relative">
  <img v-if="selectedInfo !== 'structure'" :src="imagePaths.planet" alt="" class="max-w-[50%]">
  <img v-if="selectedInfo === 'geology'" :src="imagePaths.geology" alt="" class="max-w-[20%] absolute bottom-2">
  <img v-if="selectedInfo === 'structure'" :src="imagePaths.internal" alt="" class="max-w-[50%]">
</div>

<!-- name/copy/link -->
<section class="text-center">
  <h1 class="font-antonio text-4xl uppercase mb-4">
    {{ selectedPlanet.name }}
  </h1>
  <p class="font-spartan text-sm leading-6 mb-8 mx-6">
    {{ selectedPlanet[selectedInfo].content }}
  </p>
  <p class="font-spartan text-sm text-white [--tw-text-opacity:0.5] mb-8">
    Source: <NuxtLink :to="selectedPlanet[selectedInfo].source"><span class="underline">Wikipedia</span> <img src="../../assets/icon-source.svg" class="inline"></NuxtLink>
  </p>
</section>

<!-- non-mobile buttons -->



<div class="space-y-2 px-6 pb-10">
  <PlanetStatBox label="rotation time" :stat="selectedPlanet.rotation"/>
  <PlanetStatBox label="revolution time" :stat="selectedPlanet.revolution"/>
  <PlanetStatBox label="radius" :stat="selectedPlanet.radius"/>
  <PlanetStatBox label="average temp." :stat="selectedPlanet.temperature"/>
</div>
</template>

<script setup lang="ts">
const planets = usePlanetData()
const route = useRoute()
const pathName = route.path.slice(8)

const selectedPlanet = computed(() => {
  return planets.filter(p => p.name === pathName)[0]
})

const imagePaths = computed(() => {
  return {
    planet: selectedPlanet.value.images.planet.replace('./', '../'),
    geology: selectedPlanet.value.images.geology.replace('./', '../'),
    internal: selectedPlanet.value.images.internal.replace('./', '../'),
  }
})

const selectedInfo = ref('overview')

useHead({
  title: pathName
})
</script>

<style scoped>
.selected {
  @apply underline decoration-4 underline-offset-[1.35rem] [--tw-text-opacity:1]
}
</style>