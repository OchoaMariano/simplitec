<template>
    <header class="h-screen w-full bg-white relative">
        <section class="hero-wrapper contenedor__base mx-auto relative w-full h-full py-24 px-5 grid md:grid-cols-2 items-end gap-8">
            <!-- TITLE -->
            <div class="w-full flex flex-col justify-end max-w-2xl">
                <h1 class="text-primary title pb-3 font-medium">Contacto</h1>
                <div class="gradient__divider "></div>
                <form action="" class="grid grid-cols-2 gap-4 pt-4 pb-6">
                    <!-- first row -->
                    <div class="relative z-0 w-full group py-2">
                        <label class="block">
                            <span class=" text-primaryBlue font-bold text-xl text-xl">NOMBRE</span>
                            <input type="text" class="
                                mt-0
                                block
                                w-full
                                px-0.5
                                text-primaryBlue
                                border-0 border-b-2 border-gray-200
                                focus:ring-0 focus:border-primaryBlue
                            " placeholder="Ingresá tu nombre">
                        </label>
                    </div>
                    <div class="relative z-0 w-full group py-2">
                        <label class="block">
                            <span class=" text-primaryBlue font-bold text-xl ">APELLIDO</span>
                            <input type="text" class="
                                mt-0
                                block
                                w-full
                                px-0.5
                                text-primaryBlue
                                border-0 border-b-2 border-gray-200
                                focus:ring-0 focus:border-primaryBlue
                            " placeholder="Ingresá tu apellido">
                        </label>
                    </div>
                    <!-- second row -->
                    <div class="relative z-0 w-full group py-2">
                        <label class="block">
                            <span class=" text-primaryBlue font-bold text-xl ">EMPRESA</span>
                            <input type="text" class="
                                mt-0
                                block
                                w-full
                                px-0.5
                                text-primaryBlue
                                border-0 border-b-2 border-gray-200
                                focus:ring-0 focus:border-primaryBlue
                            " placeholder="Ingresá el nombre de empresa ">
                        </label>
                        
                    </div>
                    <div class="relative z-0 w-full group py-2">
                        <label class="block">
                            <span class=" text-primaryBlue font-bold text-xl ">PAÍS</span>
                            <input type="text" class="
                                mt-0
                                block
                                w-full
                                px-0.5
                                text-primaryBlue
                                border-0 border-b-2 border-gray-200
                                focus:ring-0 focus:border-primaryBlue
                            " placeholder="Ingresá tu país">
                        </label>
                    </div>
                    <!-- third row -->
                    <div class="relative z-0 w-full group py-2">
                        <label class="block">
                            <span class=" text-primaryBlue font-bold text-xl ">EMAIL</span>
                            <input type="email" class="
                                mt-0
                                block
                                w-full
                                px-0.5
                                text-primaryBlue
                                border-0 border-b-2 border-gray-200
                                focus:ring-0 focus:border-primaryBlue
                            " placeholder="Ingresá tu email">
                        </label>
                    </div>
                    <div class="relative z-0 w-full group py-2">
                        <label class="block">
                            <span class="text-primaryBlue font-bold text-xl">TELÉFONO</span>
                            <input type="number" class="
                                mt-0
                                block
                                w-full
                                px-0.5
                                text-primaryBlue
                                border-0 border-b-2 border-gray-200
                                focus:ring-0 focus:border-primaryBlue
                            " placeholder="Ingresá tu teléfono">
                        </label>
                    </div>
                    <!-- last row -->
                    <div class="col-span-2 relative z-0 w-full group py-2">
                        <label class="block">
                            <span class="text-primaryBlue font-bold text-xl">CONTANOS SOBRE TU NEGOCIO</span>
                            <textarea class="
                                mt-0
                                block
                                w-full
                                px-0.5
                                text-primaryBlue
                                border-0 border-b-2 border-gray-200
                                focus:ring-0 focus:border-primaryBlue
                            " rows="1" placeholder="Escribí tu mensaje"></textarea>
                        </label>
                        
                    </div>
                    <div class="btns-wrapper col-span-2 flex justify-between items-center gap-4 py-5">
                        <button class="btn__primary">Enviar</button>
                        <div class="social-icons flex items-center flex-nowrap gap-6">
                            <span class="w-12 h-12 rounded-full shadow-lg cursor-pointer transition ease-in-out delay-100 bg-gradient-to-r hover:-translate-y-1 hover:scale-110 hover:from-cyan hover:to-secondaryBlue">
                                 <img src="../../assets/images/contacto/instagram-icon-blue.svg" class="" />
                            </span>
                            <span class="w-12 h-12 rounded-full shadow-lg cursor-pointer transition ease-in-out delay-100 bg-gradient-to-r hover:-translate-y-1 hover:scale-110 hover:from-cyan hover:to-secondaryBlue">
                                <img src="../../assets/images/contacto/twitter-icon-blue.svg" class="" />
                            </span>
                            <span class="w-12 h-12 rounded-full shadow-lg cursor-pointer transition ease-in-out delay-100 bg-gradient-to-r hover:-translate-y-1 hover:scale-110 hover:from-cyan hover:to-secondaryBlue">
                                <img src="../../assets/images/contacto/linkedin-icon-blue.svg" class="" />
                            </span>
                            
                        </div>
                    </div>
                </form>
            </div>
            <!-- ++++ -->
            <!-- IMG -->
            <div class="w-full flex flex-col justify-end">
                <img src="../../assets/images/contact-image.png" class="object-center object-contain w-full h-full" alt="">
            </div>
            <!-- ++++ -->
        </section>
    </header>
</template>