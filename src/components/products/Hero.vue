<script setup>
import { defineProps } from 'vue'

defineProps(['title', 'subtitle', 'bajada', 'image_url']);

const getImageUrl = (name) => {
    return new URL(`../../assets/images/productos/${name}`, import.meta.url).href
}
</script>

<template>
    <header class="h-screen w-full bg-white relative">
        <!-- RIGHT -->
        <div class="absolute w-[40rem] right-0 mx-auto top-80">
            <img src="../../assets/images/productos/back-hero-products@2x.png" class="object-center object-contain w-full h-full" alt="">
        </div>
        <section class="hero-wrapper contenedor__base mx-auto relative w-full h-full pt-56 pb-24 px-5 grid md:grid-cols-5 items-center gap-8">
            
            <!-- TITLE -->
            <div class="w-full flex flex-col justify-end pb-10 col-span-2">
                <img src="../../assets/images/tec-logo.svg" class="w-24 pb-6" />
                <h1 class="title text-primaryBlue pb-6"><strong>{{ title }}</strong></h1>
                <div class="gradient__divider"></div>
                <p class="simple-text text-textGris pt-8 font-bold lg:pr-24">
                    {{ bajada }}
                </p>
                <p class="simple-text text-textGris pt-8 lg:pr-24">
                    {{ subtitle }}
                </p>
            </div>
            <!-- ++++ -->
            <!-- IMG PRODUCT -->
            <div class="order-first md:order-last w-full flex flex-col justify-end col-span-3">
                <img :src="getImageUrl(image_url)" class="object-center object-contain w-full h-full" alt="">
            </div>
            <!-- ++++ -->
        </section>
    </header>
</template>