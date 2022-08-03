<template>
    <header class="h-screen w-full bg-gray-200 relative">
        <section class="hero-wrapper max-w-screen-xl mx-auto relative w-full h-full py-24 px-5 grid md:grid-cols-2 items-end gap-8">
            <!-- TITLE -->
            <div class="w-full flex flex-col justify-end pb-10 max-w-lg">
                <h1 class="title text-primaryBlue">Nuestros <strong>Productos</strong></h1>
                <div class="gradient__divider"></div>
                <p class="simple-text text-textGris line-clamp-4 pt-8 lg:pr-24">
                    Plataformas y servicios tecnológicosS personalizados diseñados para la industria automotriz.
                </p>
                <div class="btns-wrapper hidden items-center gap-4 py-5">
                    <button class="uppercase text-gris hover:text-white hover:bg-blue-600 border border-blue-600 rounded-full px-5 py-2 smooth">Probar Demo</button>
                    <button class="uppercase text-gris hover:text-white hover:bg-blue-600 border border-blue-600 rounded-full px-5 py-2 smooth">Ver Video</button>
                </div>
            </div>
            <!-- ++++ -->
            <!-- IMG -->
            <div class="w-full flex flex-col justify-end">
                <img src="../../assets/images/hero-productos.png" class="object-center object-contain w-full h-full" alt="">
            </div>
            <!-- ++++ -->
        </section>
    </header>
</template>