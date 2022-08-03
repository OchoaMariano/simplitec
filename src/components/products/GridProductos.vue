<template>
    <section class="w-full relative bg-white">
        <!-- bg-image -->
        <div class="bg-overlay object-cover object-right absolute inset-0">
            <img class="w-full h-full object-cover bg-fixed " src="../../assets/images/background-grid-products@2x.png" alt="">
        </div>
        <!-- solid-overlay-opacity -->
        <div class="bg-overlay object-cover object-right absolute inset-0">
        </div>
        <!-- CONTENT -->
        <div class="list-wrapper contenedor__base  relative z-20 w-full h-full py-20 lg:py-48 px-5">
            <div class="max-w-screen-xl mx-auto grid grid-cols-2 md:grid-cols-3 gap-8 sm:gap-20 xl:gap-36 justify-center items-center">
                <RouterLink to="/productos/digital-retailing">
                    <div class="product-item grid-cols-2 gap-4">
                        <div class="cursor-pointer">
                            <img class="h-28" src="../../assets/images/productos/digital-retail@4x.png"/>
                            <div class="grid col-span-4 pt-10">
                                <img src="../../assets/images/logo-tec2x.png" class="h-6 pb-1 w-full object-contain object-left" alt="">
                                <h5 class="max-w-xs font-bold text-primaryBlue text-md sm:text-xl md:text-3xl xl:text-4xl md:leading-9 sm:leading-6 leading-4">
                                    Digital<br> 
                                    Retailing
                                </h5>
                            </div>
                        </div>
                    </div>
                </RouterLink>
                 <RouterLink to="/productos/dealer-ecommerce">
                    <div class="product-item grid-cols-2 gap-4">
                        <div class="">
                            <img class="h-28" src="../../assets/images/productos/dealer@4x.png"/>
                            <div class="grid col-span-4">
                                <img src="../../assets/images/logo-tec2x.png" class="h-6 pb-1 w-full object-contain object-left" alt="">
                                <h5 class="max-w-xs font-bold text-primaryBlue text-md sm:text-xl md:text-3xl xl:text-4xl md:leading-9 sm:leading-6 leading-4">
                                    Dealer<br>
                                    E-Commerce<br>
                                    & One Data
                                </h5>
                            </div>
                        </div>
                    </div>
                </RouterLink>
                <RouterLink to="/productos/mobility-store">
                    <div class="product-item flex flex-col">
                        <div class="">
                            <img class="h-28" src="../../assets/images/productos/mobility@4x.png">
                            <div class="grid col-span-4">
                                <img src="../../assets/images/logo-tec2x.png" class="h-6 pb-1 w-full object-contain object-left" alt="">
                                <h5 class="max-w-xs font-bold text-primaryBlue text-md sm:text-xl md:text-3xl md:leading-9 sm:leading-6 leading-4">
                                    Mobility<br> 
                                    Store
                                </h5>
                            </div>
                        </div>
                    </div>
                </RouterLink>
                <RouterLink to="/productos/checkout-module">
                    <div class="product-item flex flex-col">
                        <div class="">
                            <img class="h-28" src="../../assets/images/productos/checkout@4x.png"/>
                            <div class="grid col-span-4">
                                <img src="../../assets/images/logo-tec2x.png" class="h-6 pb-1 w-full object-contain object-left" alt="">
                                <h5 class="max-w-xs font-bold text-primaryBlue text-md sm:text-xl md:text-3xl xl:text-4xl md:leading-9 sm:leading-6 leading-4">
                                    Checkout<br> 
                                    Module
                                </h5>
                            </div>
                        </div>
                    </div>
                </RouterLink>
                <RouterLink to="/productos/trade-in-module">
                    <div class="product-item flex flex-col">
                        <div class="">
                            <img class="h-28" src="../../assets/images/productos/trade-in-module@4x.png"/>
                            <div class="grid col-span-4">
                                <img src="../../assets/images/logo-tec2x.png" class="h-6 pb-1 w-full object-contain object-left" alt="">
                                <h5 class="max-w-xs font-bold text-primaryBlue text-md sm:text-xl md:text-3xl xl:text-4xl md:leading-9 sm:leading-6 leading-4">
                                    Trade In<br> 
                                    Module
                                </h5>
                            </div>
                        </div>
                    </div>
                </RouterLink>
                <RouterLink to="/productos/accesories-&-parts">
                    <div class="product-item flex flex-col">
                        <div class="">
                            <img class="h-28" src="../../assets/images/productos/accesories@4x.png"/>
                            <div class="grid col-span-4">
                                <img src="../../assets/images/logo-tec2x.png" class="h-6 pb-1 w-full object-contain object-left" alt="">
                                <h5 class="max-w-xs font-bold text-primaryBlue text-md sm:text-xl md:text-3xl xl:text-4xl md:leading-9 sm:leading-6 leading-4">
                                    Accessories<br> 
                                    & Spare Parts<br> 
                                    Module
                                </h5>
                            </div>
                        </div>
                    </div>
                </RouterLink>
            </div>
        </div>
    </section>
</template>