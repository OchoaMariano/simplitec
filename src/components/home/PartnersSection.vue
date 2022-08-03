<template>
    <section class="relative w-full h-full grid grid-cols-9">
        <!-- LOGOS COLUMN -->
        <aside class="col-span-9 lg:col-span-2 logos-column w-full h-full px-5 py-20 flex flex-row lg:flex-col gap-5 justify-around items-center bg-primary">
            <img src="../../assets/images/simplitec-footer.png" alt="" class="w-full h-full max-h-10 max-w-xs object-center object-contain">
            <img src="../../assets/images/grupo-simpli-footer.png" alt="" class="w-full h-full max-h-10 max-w-xs object-center object-contain">
            <img src="../../assets/images/true-commerce-footer.png" alt="" class="w-full h-full max-h-10 max-w-xs object-center object-contain">
            <img src="../../assets/images/simplitec-footer.png" alt="" class="w-full h-full max-h-10 max-w-xs object-center object-contain">
            <img src="../../assets/images/simplitec-footer.png" alt="" class="w-full h-full max-h-10 max-w-xs object-center object-contain">
        </aside>
        <!-- .end of logos -->
        <!-- BODY COLUMN -->
        <div class="col-span-9 lg:col-span-7 w-full h-full bg-white">
            <div class="w-full grid md:grid-cols-2 gap-5 py-20 px-5 bg-gray-200 relative">
                <div class="w-full h-full order-last md:order-first">
                    <img src="../../assets/images/car-only2x.png" alt="">
                </div>
                <div class="h-full w-full flex flex-col justify-center max-w-md">
                    <h1 class="title text-primaryBlue">Nuestros</h1>
                    <h1 class="title text-primaryBlue font-bold">clientes y partners</h1>
                    <div class="gradient__divider"></div>
                    <p class="pb-5 whitespace-pre-line text-textGris simple-text">
                        Nuestra plataforma es compatible con 
                        los CRM preferidos de los distribuidores 
                        y proveedores.
                    </p>
                    <a class="w-max btn__primary px-5">Ver más</a>
                </div>
            </div>
            <div class="h-screen w-full flex flex-col flex-nowrap">
                <div class="w-full h-full py-20 px-5 bg-white relative overflow-hidden">
                    <div class="w-full h-full flex flex-col gap-8 justify-center items-center text-center">
                        <div class="flex flex-row items-center justify-center text-center gap-2">
                            <img class="h-6 w-full object-contain object-center" src="../../assets/images/logo-tec2x.png" alt="">
                            <h5 class="text-primaryBlue font-bold subtitle">Clientes</h5>
                        </div>
                        <div class="partners-swiper w-full relative h-full bg-white">
                            <div class="absolute top-0 bottom-0 left-20 right-20 m-auto h-0.5 bg-gradient"></div>
                            <swiper
                                class="w-full h-full"
                                :direction="horizontal"
                                :slidesPerView="3"
                                :centeredSlides="true"
                                :spaceBetween="40"
                                :grabCursor="true"
                                @swiper="onSwiper"
                                @slideChange="onSlideChange"
                            >
                                <swiperSlide class="h-full p-5 flex justify-center items-center">
                                    <div class="group h-full aspect-square flex items-center justify-center border rounded-full border-gris hover:border-blue-400 bg-white hover:shadow-xl smooth p-8">
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 135.47 87.65" fill="currentColor" class="max-h-24 h-full w-full object-center object-contain hover:text-primary text-gris opacity-80 hover:opacity-100 transform hover:scale-105 smooth">
                                            <g fill="currentColor" id="Layer_2" data-name="Layer 2">
                                                <g fill="currentColor" id="Isolation_Mode" data-name="Isolation Mode">
                                                    <path fill="currentColor" class="cls-1" d="M67.74,0C30.33,0,0,19.62,0,43.82S30.33,87.65,67.74,87.65,135.47,68,135.47,43.82,105.14,0,67.74,0Zm0,68.84c-5.57,0-10.11-11-10.39-24.75,3.34.3,6.82.46,10.39.46s7-.16,10.38-.46C77.84,57.87,73.3,68.84,67.74,68.84ZM58,33.14c1.52-9.75,5.29-16.66,9.71-16.66s8.18,6.91,9.7,16.66c-3.11.28-6.35.43-9.7.43S61.14,33.42,58,33.14Zm9.71-26.8C60.47,6.34,54.28,17.22,52,32.4c-13.77-2.14-23.39-7-23.39-12.73C28.6,12,46.12,5.78,67.74,5.78S106.87,12,106.87,19.67c0,5.69-9.62,10.59-23.39,12.73C81.19,17.22,75,6.34,67.74,6.34Zm-58,35.84c0-7.43,2.86-14.4,7.84-20.38a9,9,0,0,0-.09,1.27c0,9.36,14,17.34,33.6,20.27,0,.68,0,1.37,0,2,0,17.44,4.89,32.21,11.65,37.22C33,80.82,9.71,63.4,9.71,42.18ZM72.78,82.61c6.76-5,11.65-19.78,11.65-37.22,0-.69,0-1.37,0-2C104,40.41,118,32.44,118,23.07a9,9,0,0,0-.09-1.27c5,6,7.84,13,7.84,20.38C125.76,63.4,102.47,80.82,72.78,82.61Z"/>
                                                </g>
                                            </g>
                                        </svg>
                                    </div>
                                </swiperSlide>
                                
                                <swiperSlide class="h-full p-5 flex justify-center items-center">
                                    <div class="group h-full aspect-square flex items-center justify-center border rounded-full border-gris hover:border-blue-400 bg-white hover:shadow-xl smooth p-8">
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 81.91 107.8" fill="currentColor" class="max-h-24 h-full w-full object-center object-contain hover:text-primary text-gris opacity-80 hover:opacity-100 transform hover:scale-105 smooth">
                                            <g  id="Layer_2" data-name="Layer 2">
                                                <g id="Isolation_Mode" data-name="Isolation Mode">
                                                    <path class="cls-1" d="M81.91,53.85,53.14,0H45L16.33,53.85l18.5,34.64,4.06-7.66-14.35-27L49.08,7.75l24.64,46.1L45,107.8h8.11Zm-16.42,0L47.1,19.32,42.94,27,57.37,53.87,32.75,100,8.12,53.85,36.9,0H28.69L0,53.85l28.69,54h8.12Z"/>
                                                </g>
                                            </g>
                                        </svg>
                                    </div>
                                </swiperSlide>
                                <swiperSlide class="h-full p-5 flex justify-center items-center">
                                    <div class="group h-full aspect-square flex items-center justify-center border rounded-full border-gris hover:border-blue-400 bg-white hover:shadow-xl smooth p-8">
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 135.47 87.65" fill="currentColor" class="max-h-24 h-full w-full object-center object-contain hover:text-primary text-gris opacity-80 hover:opacity-100 transform hover:scale-105 smooth">
                                            <g fill="currentColor" id="Layer_2" data-name="Layer 2">
                                                <g fill="currentColor" id="Isolation_Mode" data-name="Isolation Mode">
                                                    <path fill="currentColor" class="cls-1" d="M67.74,0C30.33,0,0,19.62,0,43.82S30.33,87.65,67.74,87.65,135.47,68,135.47,43.82,105.14,0,67.74,0Zm0,68.84c-5.57,0-10.11-11-10.39-24.75,3.34.3,6.82.46,10.39.46s7-.16,10.38-.46C77.84,57.87,73.3,68.84,67.74,68.84ZM58,33.14c1.52-9.75,5.29-16.66,9.71-16.66s8.18,6.91,9.7,16.66c-3.11.28-6.35.43-9.7.43S61.14,33.42,58,33.14Zm9.71-26.8C60.47,6.34,54.28,17.22,52,32.4c-13.77-2.14-23.39-7-23.39-12.73C28.6,12,46.12,5.78,67.74,5.78S106.87,12,106.87,19.67c0,5.69-9.62,10.59-23.39,12.73C81.19,17.22,75,6.34,67.74,6.34Zm-58,35.84c0-7.43,2.86-14.4,7.84-20.38a9,9,0,0,0-.09,1.27c0,9.36,14,17.34,33.6,20.27,0,.68,0,1.37,0,2,0,17.44,4.89,32.21,11.65,37.22C33,80.82,9.71,63.4,9.71,42.18ZM72.78,82.61c6.76-5,11.65-19.78,11.65-37.22,0-.69,0-1.37,0-2C104,40.41,118,32.44,118,23.07a9,9,0,0,0-.09-1.27c5,6,7.84,13,7.84,20.38C125.76,63.4,102.47,80.82,72.78,82.61Z"/>
                                                </g>
                                            </g>
                                        </svg>
                                    </div>
                                </swiperSlide>
                                <swiperSlide class="h-full p-5 flex justify-center items-center">
                                    <div class="group h-full aspect-square flex items-center justify-center border rounded-full border-gris hover:border-blue-400 bg-white hover:shadow-xl smooth p-8">
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 135.47 87.65" fill="currentColor" class="max-h-24 h-full w-full object-center object-contain hover:text-primary text-gris opacity-80 hover:opacity-100 transform hover:scale-105 smooth">
                                            <g fill="currentColor" id="Layer_2" data-name="Layer 2">
                                                <g fill="currentColor" id="Isolation_Mode" data-name="Isolation Mode">
                                                    <path fill="currentColor" class="cls-1" d="M67.74,0C30.33,0,0,19.62,0,43.82S30.33,87.65,67.74,87.65,135.47,68,135.47,43.82,105.14,0,67.74,0Zm0,68.84c-5.57,0-10.11-11-10.39-24.75,3.34.3,6.82.46,10.39.46s7-.16,10.38-.46C77.84,57.87,73.3,68.84,67.74,68.84ZM58,33.14c1.52-9.75,5.29-16.66,9.71-16.66s8.18,6.91,9.7,16.66c-3.11.28-6.35.43-9.7.43S61.14,33.42,58,33.14Zm9.71-26.8C60.47,6.34,54.28,17.22,52,32.4c-13.77-2.14-23.39-7-23.39-12.73C28.6,12,46.12,5.78,67.74,5.78S106.87,12,106.87,19.67c0,5.69-9.62,10.59-23.39,12.73C81.19,17.22,75,6.34,67.74,6.34Zm-58,35.84c0-7.43,2.86-14.4,7.84-20.38a9,9,0,0,0-.09,1.27c0,9.36,14,17.34,33.6,20.27,0,.68,0,1.37,0,2,0,17.44,4.89,32.21,11.65,37.22C33,80.82,9.71,63.4,9.71,42.18ZM72.78,82.61c6.76-5,11.65-19.78,11.65-37.22,0-.69,0-1.37,0-2C104,40.41,118,32.44,118,23.07a9,9,0,0,0-.09-1.27c5,6,7.84,13,7.84,20.38C125.76,63.4,102.47,80.82,72.78,82.61Z"/>
                                                </g>
                                            </g>
                                        </svg>
                                    </div>
                                </swiperSlide>
                            </swiper>
                        </div>
                    </div>
                </div>
                <!-- ++++ -->
                <div class="w-full h-full flex flex-nowrap bg-gray-200">
                    <div class="w-full h-full hidden md:block">
                        <img class="object-center object-cover w-full h-full" src="../../assets/images/bg-image-road2x.png" alt="">
                    </div>
                    <div class="h-full w-full bg-primary relative">
                        <div id="1" class="client-info absolute inset-0 h-full w-full flex flex-col justify-end py-10 px-5 ">
                            <h1 class="text-white title font-bold inline-flex items-baseline">Toyota <span class="uppercase ml-2 font-light !text-2xl">/ ARG</span> </h1>
                            <div class="gradient__divider my-5"></div>
                            <p class="whitespace-pre-line simple-text text-gris">
                                Compartimos una filosofía de trabajo sustentada en dos pilares: la mejora continua y el respetopor la gente
                            </p>
                        </div>
                        <div id="2" class="client-info absolute inset-0 h-full w-full flex flex-col justify-end py-10 px-5 !hidden">
                            <h1 class="text-white title font-bold inline-flex items-baseline">Toyota 2 <span class="uppercase ml-2 font-light !text-2xl">/ ARG</span> </h1>
                            <div class="gradient__divider my-5"></div>
                            <p class="whitespace-pre-line simple-text text-gris">
                                Compartimos una filosofía de trabajo sustentada en dos pilares: la mejora continua y el respetopor la gente
                            </p>
                        </div>
                        <div id="3" class="client-info absolute inset-0 h-full w-full flex flex-col justify-end py-10 px-5 !hidden">
                            <h1 class="text-white title font-bold inline-flex items-baseline">Toyota 3 <span class="uppercase ml-2 font-light !text-2xl">/ ARG</span> </h1>
                            <div class="gradient__divider my-5"></div>
                            <p class="whitespace-pre-line simple-text text-gris">
                                Compartimos una filosofía de trabajo sustentada en dos pilares: la mejora continua y el respetopor la gente
                            </p>
                        </div>
                        <div id="4" class="client-info absolute inset-0 h-full w-full flex flex-col justify-end py-10 px-5 !hidden">
                            <h1 class="text-white title font-bold inline-flex items-baseline">Toyota 4 <span class="uppercase ml-2 font-light !text-2xl">/ ARG</span> </h1>
                            <div class="gradient__divider my-5"></div>
                            <p class="whitespace-pre-line simple-text text-gris">
                                Compartimos una filosofía de trabajo sustentada en dos pilares: la mejora continua y el respetopor la gente
                            </p>
                        </div>
                    </div>
                    <div class="w-full h-full">
                        <img class="object-center object-cover w-full h-full" src="../../assets/images/bg-image-road2x.png" alt="">
                    </div>
                </div>
            </div>
            <!-- ++++ -->
            
        </div>
        <!-- .end -->
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
.partners-swiper .swiper .swiper-wrapper {
    display: inline-flex;
    height: 100%;
}
</style>