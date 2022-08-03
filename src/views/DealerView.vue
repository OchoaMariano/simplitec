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
        title: 'Dealer E-Commerce & One Data', 
        bajada: 'Plataforma digital dirigida exclusivamente al sector de la movilidad que potencia y facilita el proceso de venta online.',
        subtitle: 'Es un producto pensado para que los usuarios finales lleguen a reservar o comprar un vehículo con la menor cantidad de clicks posibles. Para ello, se integra a múltiples plataformas, lo que permite una experiencia de compra totalmente digital.',
        image_url: 'dealer@4x.png' 
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