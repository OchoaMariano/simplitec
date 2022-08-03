<template>
    <section class="relative w-full h-full grid grid-cols-9 bg-white">
        
        <!-- LEFT COLUMN -->
        <div class="relative z-20 overflow-visible col-span-9 md:col-span-3 title-column w-full h-full px-5 md:py-16 flex flex-row flex-nowrap md:flex-col gap-4 md:justify-between bg-white">
            <div class="py-10">
                <img src="../../assets/images/true-commerce-tec2x.png" alt="" class="w-max h-full max-h-28 md:max-h-24 max-w-full object-center object-contain flex-shrink">
            </div>
            <div class="py-10">
                <h2 class="title text-primaryBlue">Beneficios y destacados</h2>
            </div>
            <div class="w-max flex flex-col justify-end h-full bg-white pr-5 shadow-">
                <ul class="w-full flex flex-wrap items-center gap-2 list-none py-10 simple-text font-medium text-primary">
                    <li><button v-on:click="changeYear('2022')" :class="[year === '2022' ? 'active-btn' : '']" class="py-1 px-2 font-regular text-2xl smooth">1.</button></li>
                    <li><button v-on:click="changeYear('2021')" :class="[year === '2021' ? 'active-btn' : '']" class="py-1 px-2 font-regular text-2xl smooth">2.</button></li>
                    <li><button v-on:click="changeYear('2020')" :class="[year === '2020' ? 'active-btn' : '']" class="py-1 px-2 font-regular text-2xl smooth">3.</button></li>
                    <li><button v-on:click="changeYear('2019')" :class="[year === '2019' ? 'active-btn' : '']" class="py-1 px-2 font-regular text-2xl smooth">4.</button></li>
                    <li><button v-on:click="changeYear('2019')" :class="[year === '2019' ? 'active-btn' : '']" class="py-1 px-2 font-regular text-2xl smooth">5.</button></li>
                </ul>
            </div>
        </div>
        <!-- .end -->
        <!-- RIGHT COLUMN -->
        <div class="col-span-9 md:col-span-6 w-full h-full bg-white md:py-16">
            
            <!-- SWIPER -->
            <div class="w-full py-10 relative">
                <div class="shadow-overlay z-10 absolute top-0 md:top-unset left-0 h-full w-1/5 bg-gradient-to-r from-white"></div>
                <div class="w-full h-full flex flex-col gap-8 justify-center items-center text-center">
                    
                    <div class="clients-swiper w-full h-full bg-white relative ">
                        <swiper
                            class="w-full h-full"
                            :direction="horizontal"
                            :slidesPerView="3"
                            :spaceBetween="40"
                            :slidesOffsetBefore="140"
                            :grabCursor="true"
                            @swiper="onSwiper"
                            @slideChange="onSlideChange"
                        >
                            <swiperSlide v-show="year === 2020 || year === null" class="case-2020 h-full p-5 text-primary text-left text-base">
                                <div class="">
                                    <h3 class="">1.</h3>
                                </div>
                                <div class="p-3 border-l-2 border-primaryBlue">
                                    
                                    <p class="simple-text font-medium text-primaryBlue pt-2">Nombre Marca</p>
                                    <p class="simple-text font-medium text-primaryBlue" >Año 2020</p>
                                </div>
                            </swiperSlide>
                            
                            <swiperSlide v-show="year === 2020 || year === null" class="case-2021 h-full p-5 text-primary text-left text-base">
                                <div class="group w-full h-full aspect-square flex items-center justify-center border rounded-xl overflow-hidden bg-white hover:shadow-xl smooth mb-1 max-h-56">
                                    <img class="w-full h-full object-cover object-center" src="../../assets/images/card-image2x.png" alt="">
                                </div>
                                <div class="p-3">
                                    
                                    <p class="simple-text font-medium text-primaryBlue pt-2">Nombre Marca</p>
                                    <p class="simple-text font-medium text-primaryBlue" >Año 2021</p>
                                </div>
                            </swiperSlide>
                            <swiperSlide v-show="year === 2020 || year === null" class="case-2022 h-full p-5 text-primary text-left text-base">
                                <div class="group w-full h-full aspect-square flex items-center justify-center border rounded-xl overflow-hidden bg-white hover:shadow-xl smooth mb-1 max-h-56">
                                    <img class="w-full h-full object-cover object-center" src="../../assets/images/card-image2x.png" alt="">
                                </div>
                                <div class="p-3">
                                    
                                    <p class="simple-text font-medium text-primaryBlue pt-2">Nombre Marca</p>
                                    <p class="simple-text font-medium text-primaryBlue" >Año 2022</p>
                                </div>
                            </swiperSlide>
                            <swiperSlide v-show="year === 2020 || year === null" class="case-2019 h-full p-5 text-primary text-left text-base">
                                <div class="group w-full h-full aspect-square flex items-center justify-center border rounded-xl overflow-hidden bg-white hover:shadow-xl smooth mb-1 max-h-56">
                                    <img class="w-full h-full object-cover object-center" src="../../assets/images/card-image2x.png" alt="">
                                </div>
                                <div class="p-3">
                                    
                                    <p class="simple-text font-medium text-primaryBlue pt-2">Nombre Marca</p>
                                    <p class="simple-text font-medium text-primaryBlue" >Año 2019</p>
                                </div>
                            </swiperSlide>
                            <swiperSlide v-show="year === 2020 || year === null" class="case-2020 h-full p-5 text-primary text-left text-base">
                                <div class="group w-full h-full aspect-square flex items-center justify-center border rounded-xl overflow-hidden bg-white hover:shadow-xl smooth mb-1 max-h-56">
                                    <img class="w-full h-full object-cover object-center" src="../../assets/images/card-image2x.png" alt="">
                                </div>
                                <div class="p-3">
                                    
                                    <p class="simple-text font-medium text-primaryBlue pt-2">Nombre Marca</p>
                                    <p class="simple-text font-medium text-primaryBlue" >Año 2020</p>
                                </div>
                            </swiperSlide>
                        </swiper>
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
            let year = null;
            const changeYear = (yearvalue) => {
                console.log("btn clicked!")
                if(year === yearvalue){
                    year = null
                } else {
                    year = yearvalue
                }
                console.log(year)
            };
            const onSwiper = (swiper) => {
                console.log(swiper);
                // const wrapper = document.getElementsByClassName("swiper-wrapper")
                // wrapper[0].classList.add("inline-flex")
            };
            const onSlideChange = () => {
                console.log('slide change');
            };
            return {
                year,
                changeYear,
                onSwiper,
                onSlideChange,
            };
        }
    };
</script>
<style>
.clients-swiper .swiper .swiper-wrapper {
    display: inline-flex;
    height: 100%;
}
</style>