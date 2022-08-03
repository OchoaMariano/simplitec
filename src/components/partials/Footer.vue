<template>
    <footer class="relative w-full h-full bg-primary px-5 pt-16 pb-10">
        <div class="contenedor__base grid md:grid-cols-2 lg:grid-cols-12 gap-4">
            <div class="grid grid-rows-3 grid-flow-col gap-8 justify-start items-end col-span-3">
                <div class="logos w-full md:flex items-start justify-between gap-4 flex-nowrap">
                    <img class="w-full h-8 object-contain object-left" src="../../assets/images/SVG/grupo-simpli.svg" alt="">
                </div>
                <div class="text-left justify-end items-end">
                    <a class=" hover:text-white smooth text-white" href="">info@gruposimpli.com</a>
                </div>
                <div class="text-left justify-end items-end">
                    <p class=" hover:text-white smooth text-white" href="">Esmeralda 1320 - 3B<br/> Buenos Aires, Argentina</p>
                </div>
            </div>
            <div class="grid grid-rows-3 grid-flow-col gap-8 justify-center col-span-6">
                <div class="logos w-full md:flex items-start justify-between gap-4 flex-nowrap">
                    <img class="w-full h-12 object-contain object-center" src="../../assets/images/SVG/simplitec-logo-footer.svg" alt="">
                </div>
                <div class="social-icon w-full flex justify-center items-end gap-4 flex-nowrap">
                    <span class="w-10 h-10 rounded-full shadow-lg cursor-pointer transition ease-in-out delay-100 bg-gradient-to-r hover:-translate-y-1 hover:scale-110 hover:from-cyan hover:to-secondaryBlue">
                        <img src="../../assets/images/SVG/instagram_1.svg" class="" />
                    </span>
                    <span class="w-10 h-10 rounded-full shadow-lg cursor-pointer transition ease-in-out delay-100 bg-gradient-to-r hover:-translate-y-1 hover:scale-110 hover:from-cyan hover:to-secondaryBlue">
                        <img src="../../assets/images/SVG/linkedin.svg" class="" />
                    </span>
                    <span class="w-10 h-10 rounded-full shadow-lg cursor-pointer transition ease-in-out delay-100 bg-gradient-to-r hover:-translate-y-1 hover:scale-110 hover:from-cyan hover:to-secondaryBlue">
                        <img src="../../assets/images/SVG/facebook.svg" class="" />
                    </span>
                </div>
                <div class="footer-links w-full flex justify-center items-end gap-3 flex-nowrap text-white">
                    <RouterLink class="hover:text-gray-400 smooth cool-link" to="/">Home</RouterLink>
                    <RouterLink class="hover:text-gray-400 smooth cool-link" to="/productos">Productos</RouterLink>
                    <RouterLink class="hover:text-gray-400 smooth cool-link" to="/contacto">Contacto</RouterLink>
                </div>
            </div>
            <div class="grid grid-rows-2 grid-flow-col gap-8 justify-end items-end col-span-3">
                <div class="logos w-full md:flex items-start justify-between gap-4 flex-nowrap">
                    <img class="w-full h-20 object-contain object-right" src="../../assets/images/SVG/true-commander-footer.svg" alt="">
                </div>
            
                <div class="text-right">
                    
                    <p class="text-right text-white">All rights reserved.</p>
                    <a href="" class="text-left text-white">Terms & Conditions</a>
                </div>
            
            </div>
        </div>
    </footer>
</template>