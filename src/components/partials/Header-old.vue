<template>
  <header class="w-full fixed top-0 z-50">
    <div :class="[bgNavbar ? 'bg-transparent shadow-none py-2' : 'bg-white shadow-lg py-0']" 
    class="wrapper w-full smooth">
        <nav
        class="
            contenedor__base 
            w-full
            lg:flex lg:justify-between 
        "
        >
        <div class="flex items-center justify-between">
            <router-link
            to="/"
            class=""
            >
               <!--  <LogoSimplitec /> -->
               <img alt="simplitec logo" :class="[bgNavbar ? 'h-20 lg:h-28' : 'h-20 lg:h-28']"  src="../../assets/svg/logo-simpli.svg" />
            </router-link>
            <!-- Mobile menu button -->
            <div @click="toggleNav" class="flex lg:hidden">
            <button
                type="button"
                class="
                text-gray-100
                hover:text-gray-400
                focus:outline-none focus:text-gray-400
                "
            >
                <svg viewBox="0 0 24 24" class="w-6 h-6 fill-current">
                <path
                    fill-rule="evenodd"
                    d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"
                ></path>
                </svg>
            </button>
            </div>
        </div>

        <!-- Mobile Menu open: "block", Menu closed: "hidden" -->
        <ul
            :class="showMenu ? 'flex' : 'hidden'"
            class="
            flex-col
            mt-8
            space-y-4
            lg:flex lg:space-y-0 lg:flex-row lg:items-center lg:mt-0 gap-6 text-xl
            "
        >
            <li class="">
                <RouterLink class="nav__link cool-link smooth" to="/productos">Productos</RouterLink>
            </li>
            <li class="">
                <RouterLink class="nav__link cool-link smooth" to="/">Casos de éxito</RouterLink>
            </li>
            <li class="">
                <RouterLink class="nav__link cool-link smooth" to="/">Programa de resellers</RouterLink>
            </li>
            <li class="">
                <RouterLink class="nav__link cool-link smooth" to="/">Nosotros</RouterLink>
            </li>
            <li class="">
                <RouterLink class="nav__link cool-link smooth" to="/">Blog</RouterLink>
            </li>
            <li class="">
                <RouterLink class="nav__link cool-link smooth hover:font-medium" to="/contacto">Contacto</RouterLink>
            </li>
        </ul>
        </nav>
    </div>
  </header>
</template>
<script>
import { ref } from 'vue';
import SimplitecLogo from '../assets/logo-simplitec.vue'
import LogoSimplitec from '../assets/logo-simplitec.vue'
export default {
    setup() {
        let showMenu = ref(false);
        const toggleNav = () => (showMenu.value = !showMenu.value);
        return { showMenu, toggleNav };
    },
    data() {
        return {
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
        onScroll() {
            if (window.pageYOffset <= 200) {
                this.bgNavbar = true;
            }
            else {
                this.bgNavbar = false;
            }
        }
    },
    components: { LogoSimplitec }
};
</script>
<style scoped>
.cool-link::after {
    content: '';
    display: block;
    width: 0;
    height: 3px;
    background: linear-gradient(45deg, #00C5E6, #569FD6);
    transition: width .2s;
}

.cool-link:hover::after {
    width: 100%;
    transition: width .3s;
}
</style>
