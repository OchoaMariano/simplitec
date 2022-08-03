<script setup>
import { ref } from 'vue'
import ProductosHero from '@/components/products/HeroProductos.vue'
import ProductsList from '@/components/products/ProductsList.vue'
import SingleRowItem from '@/components/products/SingleRowItem.vue'

const productos = ref([
    { 
        name: 'Digital Retailing', 
        subtitle: 'OEMs, importadores y marcas',
        description: 'Plataforma integral para el mundo de la movilidad que transforma y potencia el proceso de venta. Ofrece una experiencia omnicanal y una solución integral digital y eficiente para modernizar el proceso de ventas.',
        image_url: 'digital-retail@4x.png',
        background: false,
        url: '/productos/digital-retailing'
    },
    { 
        name: 'Dealer E-Commerce & One Data', 
        subtitle: 'Concesionarios y vendedores de vehículos',
        description: 'E-commerce como software as a service para car dealers y afines con integraciones y customizaciones incorporadas propias del sector de la movilidad.',
        image_url: 'dealer@4x.png',
        background: true,
        url: '/productos/dealer-ecommerce'
    },
    { 
        name: 'Mobility Store', 
        subtitle: 'Bancos, compañías de seguros y empresas',
        description: 'Plataforma que permite una nueva experiencia digital de compra de productos y servicios para que las empresas puedan ofrecer su propio marketplace de movilidad. Con esta plataforma las empresas pueden ofrecer soluciones de movilidad a sus clientes en forma rápida y eficiente.',
        image_url: 'mobility@4x.png',
        background: false,
        url: '/productos/mobility-store'
    },
    { 
        name: 'Checkout Module', 
        subtitle: '',
        description: 'Bloque que potencia el proceso de venta y permite incorporar la función de realizar el proceso de pago de los usuarios finales. Con este producto podemos transformar la intención de compra del cliente en una transacción real.',
        image_url: 'checkout@4x.png',
        background: true,
        url: '/productos/checkout-module'
    },
    { 
        name: 'Trade In Module', 
        subtitle: '',
        description: 'Solución integral tecnológica para que car dealers y afines ofrezcan una experiencia de compra online de sus vehículos y productos a los clientes.',
        image_url: 'trade-in-module@4x.png',
        background: false,
        url: '/productos/trade-in-module'
    },
    { 
        name: 'Accessories & Spare Parts Module', 
        subtitle: '',
        description: 'Bloque que integra los accesorios y repuestos a la experiencia online de tus clientes para ofrecer servicio de postventa de calidad y completamente online.',
        image_url: 'accesories@4x.png',
        background: true,
        url: '/productos/accesories-&-parts'
    }
])

</script>
<template>
  <main class="overflow-hidden w-full h-full min-h-screen grid">
    <ProductosHero />
    <ProductsList />

    <SingleRowItem
        v-for="product in productos"
	      :key="product.name"
  	    :name="product.name"
        :subtitle="product.subtitle"
        :description="product.description"
        :image_url="product.image_url"
        :background="product.background"
        :url="product.url"
    >
    </SingleRowItem>

    

  </main>
</template>
<style>
</style>