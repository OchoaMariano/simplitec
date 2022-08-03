<template>
    <section class="relative w-full bg-gris">
        <div class="section-wrapper max-w-screen-xl mx-auto relative z-20 w-full h-full py-24 px-5 flex flex-col items-center gap-6 lg:gap-10">
            <div>
                <h2 class="title text-primaryBlue text-center w-max mx-auto">
                    Productos diseñados <strong>para revolucionar</strong> 
                </h2>
                <div class="gradient__divider"></div>
            </div>
            
            <p class="simple-text text-textGris">Plataformas y servicios tecnológicos diseñados para liberar tu potencial</p>

            <div class="w-full max-h-screen bg-gris relative overflow-hidden">
                <div class="relative w-full md:w-1/2 -mb-1/2 mr-auto bg-secondaryBlue opacity-70 overflow-hidden ">
                     <img class="object-cover object-center w-full h-80 md:h-96 blur-sm bg-secondaryBlue" src="../../assets/images/bg-blured-image.png" alt=""> <!---->
                </div>
                <!-- -->
                <div class="relative w-full h-full flex flex-nowrap">
                    <div class="w-0 md:w-1/5 h-full relative"></div>
                    <div class="w-full md:w-4/5 h-full relative">
                        <div class="relative w-full h-full ml-auto max-w-5xl overflow-visible">
                            <div class="relative w-full h-full flex flex-col sm:flex-row flex-nowrap md:gap-6 items-stretch bg-white py-16 overflow-visible">
                                <div class="overlay-images-wrapper relative h-full sm:h-auto w-full mx-auto px-5">
                                    <div class="relative w-full h-full">
                                        <div class="absolute z-10 right-0 sm:-right-24 -top-60 w-44 h-44 aspect-square p-5 flex">
                                            <img class="object-contain object-center w-full h-full" src="../../assets/images/true-commerce2x.png" alt="">
                                        </div>
                                        <div class="rounded-xl shadow-lg absolute bottom-5 left-0 right-0 -top-60 sm:-top-36 bg-slate-200"></div>
                                        <div class="absolute z-10 -top-28 -right-3  md:right-5 -left-3 md:-left-1/2 md:p-5">
                                            <img class="object-contain object-center w-full h-36 sm:h-full" src="../../assets/images/mobile-car2x.png" alt="">
                                        </div>
                                    </div>
                                </div>
                                <div class="list-items-wrapper relative w-full h-full">
                                    <ul class="list-disc list-inside subtitle text-primary font-bold py-10 px-5 md:px-0 md:py-20">
                                        <li class="font-bold py-2">Digital Retailing</li>
                                        <li class="font-bold py-2">Digital Retailing</li>
                                        <li class="font-bold py-2">Digital Retailing</li>
                                        <li class="font-bold py-2">Digital Retailing</li>
                                        <li class="font-bold py-2">Digital Retailing</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                
            </div>
            
            <div class="w-full grid md:grid-cols-3 justify-center items-center gap-5 lg:gap-10 lg:p-5">
                <div class="card-item w-full flex flex-col gap-y-4">
                    <div class="card-heading flex flex-nowrap items-center gap-1">
                        <span class="w-12 h-12 !p-3 flex justify-center items-center text-secondaryBlue hover:text-white btn__primary">
                            <svg fill="currentColor" xmlns="http://www.w3.org/2000/svg" class="w-full h-full" viewBox="0 0 24 24"><path d="M24 10h-10v-10h-4v10h-10v4h10v10h4v-10h10z"/></svg>
                        </span>
                        <h5 class="subtitle text-primaryBlue">Titulo Card</h5>
                    </div>
                    <div class="card-body simple-text text-textGris">
                        <p>
                            Los distribuidores que utilizan 
                            nuestros productos reportan 
                            un aumento de la participación 
                            online por parte de sus clientes.
                        </p>
                    </div>
                </div>
                <div class="card-item w-full flex flex-col gap-y-4">
                    <div class="card-heading flex flex-nowrap items-center gap-1">
                        <span class="w-12 h-12 !p-3 flex justify-center items-center text-secondaryBlue hover:text-white btn__primary">
                            <svg fill="currentColor" xmlns="http://www.w3.org/2000/svg" class="w-full h-full" viewBox="0 0 24 24"><path d="M24 10h-10v-10h-4v10h-10v4h10v10h4v-10h10z"/></svg>
                        </span>
                        <h5 class="subtitle text-primaryBlue">Titulo Card</h5>
                    </div>
                    <div class="card-body simple-text text-textGris">
                        <p>
                            Los distribuidores que utilizan 
                            nuestros productos reportan 
                            un aumento de la participación 
                            online por parte de sus clientes.
                        </p>
                    </div>
                </div>
                <div class="card-item w-full flex flex-col gap-y-4">
                    <div class="card-heading flex flex-nowrap items-center gap-1">
                        <span class="w-12 h-12 !p-3 flex justify-center items-center text-secondaryBlue hover:text-white btn__primary">
                            <svg fill="currentColor" xmlns="http://www.w3.org/2000/svg" class="w-full h-full" viewBox="0 0 24 24"><path d="M24 10h-10v-10h-4v10h-10v4h10v10h4v-10h10z"/></svg>
                        </span>
                        <h5 class="subtitle text-primaryBlue">Titulo Card</h5>
                    </div>
                    <div class="card-body simple-text text-textGris">
                        <p>
                            Los distribuidores que utilizan 
                            nuestros productos reportan 
                            un aumento de la participación 
                            online por parte de sus clientes.
                        </p>
                    </div>
                </div>
            </div>
            <p class="text-white">Digitalizamos la industria de la movilidad.</p>
        </div>
    </section>
</template>