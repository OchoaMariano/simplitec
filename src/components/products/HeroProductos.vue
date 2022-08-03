<template>
    <header class="h-screen w-full bg-white relative">
        <section class="hero-wrapper contenedor__base mx-auto relative w-full h-full pt-56 pb-24 px-5 grid md:grid-cols-5 items-center gap-8">
            <!-- TITLE -->
            <div class="w-full flex flex-col justify-end pb-10 max-w-lg col-span-2">
                <h1 class="title text-primaryBlue">Nuestros <strong>Productos</strong></h1>
                <div class="gradient__divider"></div>
                <p class="simple-text text-textGris line-clamp-3 pt-8 lg:pr-24">
                    Plataformas y servicios tecnológicos personalizados diseñados para la industria automotriz.
                    {{ $t('about.title') }}
                </p>
            </div>
            <!-- ++++ -->
            <!-- IMG -->
            <div class="w-full flex flex-col justify-end col-span-3">
                <img src="../../assets/images/hero-productos.png" class="object-center object-contain w-full h-full" alt="">
            </div>
            <!-- ++++ -->
        </section>
    </header>
</template>