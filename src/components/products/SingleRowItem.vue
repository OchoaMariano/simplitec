<script setup>
defineProps({
  name: {
    type: String,
    required: true
  },
  subtitle: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  image_url: {
    type: String,
    required: true
  },
  background: {
    type: String,
    required: true
  },
  url: {
    type: String,
    required: true
  }
})
const getImageUrl = (name) => {
    return new URL(`../../assets/images/productos/${name}`, import.meta.url).href
}
</script>

<template>
    <section class="relative w-full overflow-hidden" :class="[background ? 'bg-productsGris' : 'bg-white']">
        <div class="gradient__left__decoration">
        </div>
        <div class="wrapper contenedor__base mx-auto relative w-full py-32 grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-12 items-center">
            
            <div class="image-col w-full h-full">
                <img :src="getImageUrl(image_url)" class="w-full h-full object-center object-contain" alt="">
            </div>
            <div class="lg:col-span-2 p-5">
                <div class="flex items-baseline flex-nowrap mb-2">
                    <img class="h-7 w-max object-contain object-left-bottom" src="../../assets/images/SVG/tec-productos-hero.svg" alt="">
                    <RouterLink :to="{path:url}" ><h3 class="text-4xl text-primaryBlue font-bold pl-3 cool-link">{{ name }}</h3></RouterLink>
                </div>
                <h6 class="text-primaryBlue text-xl font-medium mb-5">{{ subtitle }}</h6>
                <p class="simple-text text-textGris">{{ description}}</p>
            </div>
            
        </div>
    </section>
</template>