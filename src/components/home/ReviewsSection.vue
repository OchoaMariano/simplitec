<template>
    <section class="w-screen h-screen bg-white relative overflow-hidden">
        <div class="absolute bg-image inset-0 w-full md:w-1/2 h-full mr-auto">
            <img class="w-full h-full object-cover object-center md:object-bottom" src="../../assets/images/bg-image-road2x.png" alt="">
        </div>
        <div class="section-wrapper max-w-4xl xl:max-w-screen-lg ml-auto relative w-full h-full py-16 md:py-24 px-10 md:pl-0 md:pr-10 flex flex-col-reverse md:flex-row flex-nowrap gap-10 md:bg-white z-10">
            <div class="reviews-wrapper w-full h-1/2 md:h-full md:-ml-36 flex-1 md:flex-auto">
                <swiper
                    class="w-full h-full"
                    :direction="vertical"
                    :scrollable="true"
                    :grabCursor="true"
                    @swiper="onSwiper"
                    @slideChange="onSlideChange"
                >
                    <swiperSlide class="h-full w-full py-6">
                        <div class="card-review text-textGris bg-white bg-opacity-75">
                            <div class="card-header bg-white shadow-lg border-b border-gray-400 flex items-center gap-3 flex-nowrap p-3">
                                <span class="pp w-8 aspect-square rounded-full bg-black border-gray-500"></span>
                                <p>Jose Varela</p>
                            </div>
                            <div class="card-body p-5 text-lg">
                                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ex in sit nostrum tenetur porro ipsam pariatur perferendis. Sequi cupiditate repudiandae autem, voluptatibus id consequuntur?</p>
                            </div>
                        </div>
                    </swiperSlide>

                    <swiperSlide class="h-full w-full py-6">
                        <div class="card-review text-textGris bg-white bg-opacity-75">
                            <div class="card-header bg-white shadow-lg border-b border-gray-400 flex items-center gap-3 flex-nowrap p-3">
                                <span class="pp w-8 aspect-square rounded-full bg-black border-gray-500"></span>
                                <p>Jose Varela</p>
                            </div>
                            <div class="card-body p-5 text-lg">
                                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ex in sit nostrum tenetur porro ipsam pariatur perferendis. Sequi cupiditate repudiandae autem, voluptatibus id consequuntur?</p>
                            </div>
                        </div>
                    </swiperSlide>

                    <swiperSlide class="h-full w-full py-6">
                        <div class="card-review text-textGris bg-white bg-opacity-75">
                            <div class="card-header bg-white shadow-lg border-b border-gray-400 flex items-center gap-3 flex-nowrap p-3">
                                <span class="pp w-8 aspect-square rounded-full bg-black border-gray-500"></span>
                                <p>Jose Varela</p>
                            </div>
                            <div class="card-body p-5 text-lg">
                                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ex in sit nostrum tenetur porro ipsam pariatur perferendis. Sequi cupiditate repudiandae autem, voluptatibus id consequuntur?</p>
                            </div>
                        </div>
                    </swiperSlide>

                    
                    <swiperSlide class="h-full w-full py-6">
                        <div class="card-review text-textGris bg-white bg-opacity-75">
                            <div class="card-header bg-white shadow-lg border-b border-gray-400 flex items-center gap-3 flex-nowrap p-3">
                                <span class="pp w-8 aspect-square rounded-full bg-black border-gray-500"></span>
                                <p>Jose Varela</p>
                            </div>
                            <div class="card-body p-5 text-lg">
                                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ex in sit nostrum tenetur porro ipsam pariatur perferendis. Sequi cupiditate repudiandae autem, voluptatibus id consequuntur?</p>
                            </div>
                        </div>
                    </swiperSlide>

                    <swiperSlide class="h-full w-full py-6">
                        <div class="card-review text-textGris bg-white bg-opacity-75">
                            <div class="card-header bg-white shadow-lg border-b border-gray-400 flex items-center gap-3 flex-nowrap p-3">
                                <span class="pp w-8 aspect-square rounded-full bg-black border-gray-500"></span>
                                <p>Jose Varela</p>
                            </div>
                            <div class="card-body p-5 text-lg">
                                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ex in sit nostrum tenetur porro ipsam pariatur perferendis. Sequi cupiditate repudiandae autem, voluptatibus id consequuntur?</p>
                            </div>
                        </div>
                    </swiperSlide>
                    <swiperSlide class="h-full w-full py-6">
                        <div class="card-review text-textGris bg-white bg-opacity-75">
                            <div class="card-header bg-white shadow-lg border-b border-gray-400 flex items-center gap-3 flex-nowrap p-3">
                                <span class="pp w-8 aspect-square rounded-full bg-black border-gray-500"></span>
                                <p>Jose Varela</p>
                            </div>
                            <div class="card-body p-5 text-lg">
                                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ex in sit nostrum tenetur porro ipsam pariatur perferendis. Sequi cupiditate repudiandae autem, voluptatibus id consequuntur?</p>
                            </div>
                        </div>
                    </swiperSlide>


                </swiper>
            </div>
            <div class="title-section-wrapper w-full flex flex-col justify-center ">
                <h1 class="title text-primary">Qué dicen <br> <strong>nuestros clientes</strong> </h1>
                <div class="gradient__divider"></div>
                <p class="whitespace-pre-line text-textGris simple-text py-6">
                    Llevamos la movilidad en nuestro ADN.
                    Somos referentes y pioneros en la industria.
                    Más de 360 empresas y numerosos casos de éxito nos avalan.
                </p>
                <button class="w-max btn__primary">Dejar RESEÑA</button>
            </div>
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
           
            };
            return {
                onSwiper,
                onSlideChange
            };
        }
    };
</script>