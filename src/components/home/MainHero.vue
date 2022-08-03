<template>
    <section class="
        h-screen 
        w-full 
        bg-gray-200 
        relative 
        bg-cover 
        bg-right 
        flex items-center
        overflow-hidden
        " >
        <div id="overlay" class="bg-gradient-to-r via-white from-white opacity-90"></div>
        <div class="
            contenedor__base
            relative 
            flex 
            items-center
            ">
            <div class="pt-40 z-30 w-3/4 sm:w-7/12 md:w-6/12 lg:w-5/12 flex flex-col justify-end">
                <h1 class="title text-primaryBlue line-clamp-2 pb-3">Transformá tu <br><span class="font-bold">manera de vender</span></h1>
                <div class="gradient__divider"></div>
                <p class="simple-text text-textGris line-clamp-4 pt-8 lg:pr-24 ">
                    Nuestro producto TEC Digital Retailing crea 
                    experiencias únicas para consumidores que 
                    buscan soluciones digitales en la industria 
                    de la movilidad.
                </p>
                <div class="btns-wrapper flex items-center gap-4 py-8">
                    <button class="btn__primary">Probar Demo</button>
                    <button class="btn__primary">Ver Video</button>
                </div>
            </div>
        </div>
        <video
            autoplay
            loop
            muted
            class="absolute z-10 w-auto min-w-full min-h-full max-w-none"
        >
            <source
            src="https://res.cloudinary.com/digital-fellow/video/upload/v1658153997/Simplitec/home_nqiueu.mp4"
            type="video/mp4"
            />
            Your browser does not support the video tag.
        </video>
        <div class="absolute right-0 top-0 bottom-0 z-30 opacity-70">
            <img src="../../assets/images/background.png" class="object-center object-fill w-full h-full ml-auto" style="max-width: 50%" alt="">
        </div>
    </section>
</template>
<script>
export default {
  name: "MainHero",
  data() {
    return {
    }
  }
};
</script>
<style scoped>
#overlay {
  position: absolute; /* Sit on top of the page content */
  width: 100%; /* Full width (cover the whole page) */
  height: 100%; /* Full height (cover the whole page) */
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  
  z-index: 30; /* Specify a stack order in case you're using a different order for other elements */
}
</style>