<template>
  <div class="w-full fixed top-0 z-50 smooth"
    :class="[bgNavbar ? 'bg-transparent shadow-none py-6 xl:py-10' : 'bg-white shadow-lg py-6']">
    <vsm-menu :menu="menu" class="contenedor__base" element="header" handler="hover" align="center" :screen-offset="10"
      :dropdown-offset="0" @open-dropdown="onOpenDropdown" @close-dropdown="onCloseDropdown">
      <template #default>
        <!--MEGAMENU HOVER-->
        <div class="relative grid gap-10 bg-white p-8 lg:grid-cols-2" style="width: 600px">

          <RouterLink to="/productos/digital-retailing"
            class="-m-3 flex items-center rounded-lg p-2 transition duration-150 ease-in-out hover:bg-gray-100 focus:outline-none focus-visible:ring focus-visible:primaryBlue focus-visible:ring-opacity-50">
            <div class="flex h-8 w-8 shrink-0 items-center justify-center text-white sm:h-12 sm:w-12">
              <div>
                <img src="../../assets/images/SVG/icono-1.svg" class="h-10 h-10" />
              </div>
            </div>
            <div class="ml-4">
              <img src="../../assets/images/logo-tec2x.png" class="h-3" />
              <p class="text-lg text-primary font-medium">Digital Retailing</p>
            </div>
          </RouterLink>
          <RouterLink to="/productos/dealer-ecommerce"
            class="-m-3 flex items-center rounded-lg p-2 transition duration-150 ease-in-out hover:bg-gray-100 focus:outline-none focus-visible:ring focus-visible:primaryBlue focus-visible:ring-opacity-50">
            <div class="flex h-10 w-10 shrink-0 items-center justify-center text-white sm:h-12 sm:w-12">
              <div>
                <img src="../../assets/images/SVG/icono-2.svg" class="h-10 h-10" />
              </div>
            </div>
            <div class="ml-4">
              <img src="../../assets/images/logo-tec2x.png" class="h-3" />
              <p class="text-primaryBlue text-lg font-medium leading-5">Dealer E-Commerce & One Data</p>
            </div>
          </RouterLink>
          <RouterLink to="/productos/mobility-store"
            class="-m-3 flex items-center rounded-lg p-2 transition duration-150 ease-in-out hover:bg-gray-100 focus:outline-none focus-visible:ring focus-visible:primaryBlue focus-visible:ring-opacity-50">
            <div class="flex h-10 w-10 shrink-0 items-center justify-center text-white sm:h-12 sm:w-12">
              <div>
                <img src="../../assets/images/SVG/icono-3.svg" class="h-10 h-10" />
              </div>
            </div>
            <div class="ml-4">
              <img src="../../assets/images/logo-tec2x.png" class="h-3" />
              <p class="text-primaryBlue text-lg font-medium leading-5">Mobility Store</p>
            </div>
          </RouterLink>

          <RouterLink to="/productos/trade-in-module"
            class="-m-3 flex items-center rounded-lg p-2 transition duration-150 ease-in-out hover:bg-gray-100 focus:outline-none focus-visible:ring focus-visible:primaryBlue focus-visible:ring-opacity-50">
            <div class="flex h-10 w-10 shrink-0 items-center justify-center text-white sm:h-12 sm:w-12">
              <div>
                <img src="../../assets/images/SVG/icono-4.svg" class="h-10 h-10" />
              </div>
            </div>
            <div class="ml-4">
              <img src="../../assets/images/logo-tec2x.png" class="h-3" />
              <p class="text-primaryBlue text-lg font-medium leading-5">Trade In Module</p>
            </div>
          </RouterLink>
          <RouterLink to="/productos/checkout-module"
            class="-m-3 flex items-center rounded-lg p-2 transition duration-150 ease-in-out hover:bg-gray-100 focus:outline-none focus-visible:ring focus-visible:primaryBlue focus-visible:ring-opacity-50">
            <div class="flex h-10 w-10 shrink-0 items-center justify-center text-white sm:h-12 sm:w-12">
              <div>
                <img src="../../assets/images/SVG/icono-5.svg" class="h-10 h-10" />
              </div>
            </div>
            <div class="ml-4">
              <img src="../../assets/images/logo-tec2x.png" class="h-3" />
              <p class="text-primaryBlue text-lg font-medium leading-5"> Checkout Module</p>
            </div>
          </RouterLink>
          <RouterLink to="/productos/accesories-&-parts"
            class="-m-3 flex items-center rounded-lg p-2 transition duration-150 ease-in-out hover:bg-gray-100 focus:outline-none focus-visible:ring focus-visible:primaryBlue focus-visible:ring-opacity-50">
            <div class="flex h-10 w-10 shrink-0 items-center justify-center text-white sm:h-12 sm:w-12">
              <div>
                <img src="../../assets/images/SVG/icono-6.svg" class="h-10 h-10" />
              </div>
            </div>
            <div class="ml-4">
              <img src="../../assets/images/logo-tec2x.png" class="h-3" />
              <p class="text-primaryBlue text-lg font-medium leading-5">Accessories & Spare Parts Module</p>
            </div>
          </RouterLink>

        </div>
        <div class="backGris p-4 background-hover" data-v-69cc2ec6="">
          <RouterLink to="/productos"
            class="flow-root rounded-md px-2 py-2 transition duration-150 ease-in-out hover:bg-gray-100 focus:outline-none focus-visible:ring focus-visible:primaryBlue focus-visible:ring-opacity-50">
            <span class="flex items-center">
              <span class="text-primaryBlue text-xl font-medium">
                Ver todos los productos 
                <ArrowNarrowRightIcon class="h-5 w-5 text-primaryBlue" aria-hidden="true" />
              </span>
            </span>
            <span class="block text-md text-textGris w-4/6">
              Plataformas y servicios tecnológicos personalizados diseñados para la industria automotriz.
            </span>
          </RouterLink>
        </div>
      </template>
      <template #before-nav>
        <!-- LOGO -->
        <li>
          <router-link to="/" class="">
            <img :class="[bgNavbar ? 'h-6 lg:h-10' : 'h-6 lg:h-10']" src="../../assets/images/SVG/simplitec-logo.svg"
              alt="Simplitec logo">
          </router-link>
        </li>
      </template>
      <template #title="data" class="">
        <!--LIST MENU-->
        {{ data.item.title }}
      </template>
      <template #after-nav>
        <!--Mobile Burger, buttons, etc-->
        <li class="vsm-mob-hide">
          <LanguageSwitcher />
        </li>
        <!--Set "display: block" for the .vsm-mob-show class to display content-->
        <vsm-mob>
          <div class="relative grid gap-10 bg-white p-8" style="max-width: 100%">

            <RouterLink to="/"
              class="-m-3 flex items-center rounded-lg p-2 transition duration-150 ease-in-out hover:bg-gray-100 focus:outline-none focus-visible:ring focus-visible:primaryBlue focus-visible:ring-opacity-50">
              <div class="flex h-10 w-10 shrink-0 items-center justify-center text-white sm:h-12 sm:w-12">
                <div>
                  <img src="../../assets/images/SVG/icono-1.svg" class="h-40 w-40" />
                </div>
              </div>
              <div class="ml-4">
                <img src="../../assets/images/logo-tec2x.png" class="h-3" />
                <p class="text-lg text-primary font-medium">Digital Retailing</p>
              </div>
            </RouterLink>
            <RouterLink to="/"
              class="-m-3 flex items-center rounded-lg p-2 transition duration-150 ease-in-out hover:bg-gray-100 focus:outline-none focus-visible:ring focus-visible:primaryBlue focus-visible:ring-opacity-50">
              <div class="flex h-10 w-10 shrink-0 items-center justify-center text-white sm:h-12 sm:w-12">
                <div>
                  <img src="../../assets/images/SVG/icono-2.svg" class="h-40 w-40" />
                </div>
              </div>
              <div class="ml-4">
                <img src="../../assets/images/logo-tec2x.png" class="h-3" />
                <p class="text-primaryBlue text-lg font-medium leading-5">Dealer E-Commerce & One Data</p>
              </div>
            </RouterLink>
            <RouterLink to="/"
              class="-m-3 flex items-center rounded-lg p-2 transition duration-150 ease-in-out hover:bg-gray-100 focus:outline-none focus-visible:ring focus-visible:primaryBlue focus-visible:ring-opacity-50">
              <div class="flex h-10 w-10 shrink-0 items-center justify-center text-white sm:h-12 sm:w-12">
                <div>
                  <img src="../../assets/images/SVG/icono-3.svg" class="h-40 w-40" />
                </div>
              </div>
              <div class="ml-4">
                <img src="../../assets/images/logo-tec2x.png" class="h-3" />
                <p class="text-primaryBlue text-lg font-medium leading-5">Mobility Store</p>
              </div>
            </RouterLink>

            <RouterLink to="/"
              class="-m-3 flex items-center rounded-lg p-2 transition duration-150 ease-in-out hover:bg-gray-100 focus:outline-none focus-visible:ring focus-visible:primaryBlue focus-visible:ring-opacity-50">
              <div class="flex h-10 w-10 shrink-0 items-center justify-center text-white sm:h-12 sm:w-12">
                <div>
                  <img src="../../assets/images/SVG/icono-4.svg" class="h-40 w-40" />
                </div>
              </div>
              <div class="ml-4">
                <img src="../../assets/images/logo-tec2x.png" class="h-3" />
                <p class="text-primaryBlue text-lg font-medium leading-5">Trade In Module</p>
              </div>
            </RouterLink>
            <RouterLink to="/"
              class="-m-3 flex items-center rounded-lg p-2 transition duration-150 ease-in-out hover:bg-gray-100 focus:outline-none focus-visible:ring focus-visible:primaryBlue focus-visible:ring-opacity-50">
              <div class="flex h-10 w-10 shrink-0 items-center justify-center text-white sm:h-12 sm:w-12">
                <div>
                  <img src="../../assets/images/SVG/icono-5.svg" class="h-40 w-40" />
                </div>
              </div>
              <div class="ml-4">
                <img src="../../assets/images/logo-tec2x.png" class="h-3" />
                <p class="text-primaryBlue text-lg font-medium leading-5"> Checkout Module</p>
              </div>
            </RouterLink>
            <RouterLink to="/"
              class="-m-3 flex items-center rounded-lg p-2 transition duration-150 ease-in-out hover:bg-gray-100 focus:outline-none focus-visible:ring focus-visible:primaryBlue focus-visible:ring-opacity-50">
              <div class="flex h-10 w-10 shrink-0 items-center justify-center text-white sm:h-12 sm:w-12">
                <div>
                  <img src="../../assets/images/SVG/icono-6.svg" class="h-40 w-40" />
                </div>
              </div>
              <div class="ml-4">
                <img src="../../assets/images/logo-tec2x.png" class="h-3" />
                <p class="text-primaryBlue text-lg font-medium leading-5">Accessories & Spare Parts Module</p>
              </div>
            </RouterLink>

          </div>
          
        </vsm-mob>
      </template>

    </vsm-menu>
  </div>
</template>

<script>
import LanguageSwitcher from "./LanguageSwitcher.vue";
import { ArrowNarrowRightIcon } from '@heroicons/vue/solid'
/* eslint-disable */
/*
 * Inside #after-nav and #before-nav it is recommended to use
 * to maintain the correct HTML structure:
 *   <li><!--Content--></li>
 */

export default {
    data() {
        return {
            menu: [
                {
                    // display menu item (can be overridden with title slot)
                    title: "Productos",
                    // this element now has dropdown content
                    dropdown: 'Productos',
                    // don't want a button element? Pass HTMLElement or global component
                    // (pass only as a string, component must be globally accessible)
                    element: "span",
                    // offset the position of the dropdown menu
                    align: "center",
                    // menu item can accept all attributes
                    attributes: {
                        // I want more classes! No problem
                        // string, array, object, not matter
                        class: ["nav__link smooth", { "my-class2": true }],
                        // Custom attributes
                        "data-big": "yes"
                    },
                    // add some events?
                    listeners: {
                        // all possible native events
                        mouseover: (evt) => {
                            console.log("news hover", evt);
                        }
                    },
                    // just extra properties in the object
                    new_section: false,
                },
                
                {
                    title: "Contacto",
                    attributes: {
                        href: "/contacto",
                        class: "nav__link cool-link smooth"
                    }
                }
                // ...
            ],
            bgNavbar: true,
            lastScrollPosition: 0,
            scrollValue: 0,
        };
    },
    mounted() {
        this.lastScrollPosition = window.pageYOffset;
        window.addEventListener("scroll", this.onScroll);
    },
    beforeDestroy() {
        window.removeEventListener("scroll", this.onScroll);
    },
    methods: {
        onOpenDropdown() {
            console.log("onOpenDropdown");
        },
        onCloseDropdown() {
            console.log("onCloseDropdown");
        },
        onScroll() {
            if (window.pageYOffset <= 200) {
                this.bgNavbar = true;
            }
            else {
                this.bgNavbar = false;
            }
        }
    },
    components: { LanguageSwitcher }
}
</script>
