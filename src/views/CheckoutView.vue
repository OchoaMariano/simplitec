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
        title: 'Checkout Module', 
        bajada: 'Potencia tu proceso de venta incorporando la función de pago en la experiencia online de tus clientes.',
        subtitle: 'Transforma la intención en una transacción real desde un mismo lugar, de manera simple y segura.',
        image_url: 'checkout@4x.png' 
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
