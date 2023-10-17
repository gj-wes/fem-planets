<template>
<!-- mobile tabs -->
<div class="border-b border-white [--tw-border-opacity:0.2] flex justify-center gap-10 md:hidden">
  <PlanetStatMobileTab :selected="selectedInfo" label="overview" :name="selectedPlanet.name" @click="selectedInfo = 'overview'"/>
  <PlanetStatMobileTab :selected="selectedInfo" label="structure" :name="selectedPlanet.name" @click="selectedInfo = 'structure'"/>
  <PlanetStatMobileTab :selected="selectedInfo" label="geology" :name="selectedPlanet.name" @click="selectedInfo = 'geology'"/>
</div>

<div class="lg:grid lg:grid-cols-[auto_350px] md:max-w-5xl md:mx-auto md:px-10 lg:px-0 lg:mt-32 animate-fadein">
  <!-- planet -->
  <div class="aspect-[5/4] flex justify-center items-center relative">
    <img v-if="selectedInfo !== 'structure'" :src="imagePaths.planet" alt="" class="max-w-[50%] animate-fadein">
    <img v-if="selectedInfo === 'geology'" :src="imagePaths.geology" alt="" class="max-w-[20%] absolute bottom-2 md:bottom-4 animate-fadein">
    <img v-if="selectedInfo === 'structure'" :src="imagePaths.internal" alt="" class="max-w-[50%] animate-fadein">
  </div>
  
  <!-- name/copy/link -->
  <section class="md:grid md:grid-cols-2 lg:grid-cols-1 md:content-center">
    <div class="text-center md:text-left">
      <h1 class="font-antonio text-4xl lg:text-7xl uppercase mb-4 lg:mb-6">
        {{ selectedPlanet.name }}
      </h1>
      <p class="font-spartan text-sm leading-6 mb-8 mx-6 md:ml-0">
        {{ selectedPlanet[selectedInfo].content }}
      </p>
      <p class="font-spartan text-sm text-white [--tw-text-opacity:0.5] mb-8">
        Source: <NuxtLink :to="selectedPlanet[selectedInfo].source"><span class="underline">Wikipedia</span> <img src="../../assets/icon-source.svg" class="inline"></NuxtLink>
      </p>
    </div>
  
    <!-- non-mobile buttons -->
    <div class="hidden md:grid gap-4 content-center">
      <PlanetStatButton :selected="selectedInfo" label="overview" :name="selectedPlanet.name" number="01" @click="selectedInfo = 'overview'"/>
      <PlanetStatButton :selected="selectedInfo" label="structure" :name="selectedPlanet.name" number="02" @click="selectedInfo = 'structure'"/>
      <PlanetStatButton :selected="selectedInfo" label="geology" :name="selectedPlanet.name" number="03"  @click="selectedInfo = 'geology'"/>
    </div>
  </section>
</div>

<section class="space-y-2 md:space-y-0 px-6 pb-10 md:grid md:gap-3 md:grid-cols-4 md:max-w-5xl md:px-10 md:mx-auto lg:px-0 lg:mt-20">
  <PlanetStatBox label="rotation time" :stat="selectedPlanet.rotation"/>
  <PlanetStatBox label="revolution time" :stat="selectedPlanet.revolution"/>
  <PlanetStatBox label="radius" :stat="selectedPlanet.radius"/>
  <PlanetStatBox label="average temp." :stat="selectedPlanet.temperature"/>
</section>
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