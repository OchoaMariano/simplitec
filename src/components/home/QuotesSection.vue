<template>
    <section class="w-screen overflow-hidden h-full bg-blue-200 relative">
        <div class=""></div>
        <div class="quotes-swiper relative w-full mx-auto px-5 py-16 z-10 bg-white">
            <swiper
                class="w-full h-full"
                :centeredSlides="true"
                :loop="true"
                :grabCursor="true"
                @swiper="onSwiper"
                @slideChange="onSlideChange"
            >
                <swiperSlide class="w-full text-center">
                    <div class="text-center w-full mx-auto max-w-md lg:max-w-screen-lg">
                        <p class="subtitle text-textGris italic mb-5">
                            “Para el 2025 más del 45% de los autos serán vendidos online”
                        </p>
                        <p class="text-lg md:text-2xl text-textGris mb-3">Deloite.</p>
                    </div>
                </swiperSlide>
                
                <swiperSlide class="w-full text-center">
                    <div class="text-center w-full mx-auto max-w-md lg:max-w-screen-lg">
                        <p class="subtitle text-textGris italic mb-5">
                            “Más de 30 Millones de Usuarios están usando autos compartidos con ingresos de USD 6.2 mil millones”
                        </p>
                        <p class="text-lg md:text-2xl text-textGris mb-3">Deloite.</p>
                    </div>
                </swiperSlide>

                <swiperSlide class="w-full text-center">
                    <div class="text-center w-full mx-auto max-w-md lg:max-w-screen-lg">
                        <p class="subtitle text-textGris italic mb-5">
                            “Las ciudades, las personas y las empresas están reformando la movilidad para mantener al mundo en movimiento”
                        </p>
                        <p class="text-lg md:text-2xl text-textGris mb-3">Deloite.</p>
                    </div>
                </swiperSlide>

                <swiperSlide class="w-full text-center">
                    <div class="text-center w-full mx-auto max-w-md lg:max-w-screen-lg">
                        <p class="subtitle text-textGris italic mb-5">
                            "500 millones de autos conectados generarán ingresos por servicios de USD 152 mil millones”
                        </p>
                        <p class="text-lg md:text-2xl text-textGris mb-3">Deloite.</p>
                    </div>
                </swiperSlide>

            </swiper>
        </div>
    </section>
</template>
<script>
  // Import Swiper Vue.js components
  import { Swiper, SwiperSlide } from 'swiper/vue';
  

  // Import Swiper styles
  // import 'swiper/css';

    export default {
        components: {
            Swiper,
            SwiperSlide,
        },
        setup() {
            const onSwiper = (swiper) => {
                console.log(swiper);
            };
            const onSlideChange = (swiper) => {
                console.log(swiper.activeIndex);
                let allSlides = document.getElementsByClassName("client-info");
                console.log(allSlides);
                for ( const element of allSlides) {
                    if(element.attributes.id.value == (swiper.activeIndex + 1)) {
                        element.classList.remove("!hidden")
                    } else {
                        element.classList.add("!hidden")
                    }
                }                
            };
            return {
                onSwiper,
                onSlideChange
            };
        }
    };
</script>
<style>
.quotes-swiper .swiper .swiper-wrapper {
    display: inline-flex;
    height: 100%;
}
</style>