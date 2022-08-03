<script setup>
import { ref } from 'vue'
import Hero from '@/components/products/Hero.vue'
import Features from '@/components/products/Features.vue'
import CtaDemo from '@/components/products/CtaDemo.vue'
import Displays from '@/components/products/Displays.vue'
import Beneficios from '@/components/products/Beneficios.vue'
import CtaVideo from '@/components/products/CtaVideo.vue'
import GridProductos from '@/components/products/GridProductos.vue'
  
const heros = ref([
    { 
        title: 'Mobility Store', 
        bajada: 'La plataforma que permite a las empresas generar un ecosistema alrededor de sus productos o servicios, brindando soluciones de movilidad a todos sus clientes.',
        subtitle: 'Agrupamos en un solo lugar la mayor oferta de productos y servicios vinculados a la movilidad, que le permiten a los consumidores encontrar múltiples soluciones a sus necesidades de movimiento.',
        image_url: 'mobility@4x.png' 
    }
])

</script>

<template>
  <main class="overflow-hidden w-full h-full min-h-screen">
    <Hero
        v-for="hero in heros"
	      :key="hero.title"
  	    :title="hero.title"
        :bajada="hero.bajada"
        :subtitle="hero.subtitle"
        :image_url="hero.image_url"
    >
    </Hero>
    <Features></Features>
    <CtaDemo></CtaDemo>
    <Displays></Displays>
    <Beneficios></Beneficios>
    <CtaVideo></CtaVideo>
    <GridProductos></GridProductos>

  </main>
</template>
<style>
</style>