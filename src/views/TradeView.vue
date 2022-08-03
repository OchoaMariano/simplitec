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
        title: 'Trade In Module', 
        bajada: 'Solución tecnológica integral que facilita y agiliza la experiencia de compra online de tus vehículos.',
        subtitle: 'Otorga un diferencial dentro del rubro ya que le brinda a tus clientes la posibilidad de cotizar su usado online, de manera transparente y ágil, e incorporarlo como parte de su presupuesto final.',
        image_url: 'trade-in-module@4x.png' 
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