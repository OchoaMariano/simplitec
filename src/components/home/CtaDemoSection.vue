<template>
    <section class="
    flex 
    items-center
    relative 
    w-full 
    bg-fixed 
    bg-cover 
    bg-center
    h-full
    overflow-hidden
    " 
    >
        <div class="section-wrapper max-w-screen-xl mx-auto relative z-20 w-full py-24 px-5 flex flex-col items-center">
            <h2 class="w-full text-white font-medium text-center py-10 title">
                Contáctenos para una demostración <br><span class="font-bold">de nuestros productos hoy</span>
            </h2>
            <button class="btn__secondary px-10">Probar Demo</button>
        </div>
        <video
            autoplay
            loop
            muted
            class="absolute z-10 inset-0 w-full h-full object-cover object-center"
        >
            <source
            src="https://res.cloudinary.com/digital-fellow/video/upload/v1658154055/Simplitec/video_o70op1.mp4"
            type="video/mp4"
            />
            Your browser does not support the video tag.
        </video>
    </section>
</template>