<template>
    <header class="w-full fixed top-0 z-50">
      <div :class="[bgNavbar ? 'bg-transparent shadow-none py-6 ' : 'bg-white shadow-lg']" class="wrapper w-full px-5 hover:shadow-xl smooth">
        <div :class="[isOpen ? 'bg-white' : 'h-24']" class="nav-wrapper max-w-screen-xl mx-auto flex flex-wrap lg:flex-wrap justify-between items-center overflow-hidden">
          <!-- LOGO -->
          <RouterLink rel="noopener noreferrer" to="/" aria-label="Back to homepage" class="h-full  flex w-full flex-1">
            <img alt="Vue logo" class="" src="../../assets/svg/logo-simplitec.svg" />
          </RouterLink>
          <!-- burger -->
          <button @click="toggle()" class="p-4 lg:hidden flex justify-center items-center h-auto w-auto ">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" class="w-6 h-6 dark:text-coolGray-100">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path>
            </svg>
          </button>

          <div class="menu-wrapper w-full lg:w-auto text-md text-gray-800">
            <nav class="links-wrapper flex flex-col text-center lg:text-right lg:flex-row flex-nowrap gap-6 font-thin text-lg">
              <!-- -->
              <RouterLink class="hover:text-black smooth" to="/productos">Productos</RouterLink>
              <RouterLink class="hover:text-black smooth" to="/">Casos de éxito</RouterLink>
              <RouterLink class="hover:text-black smooth" to="/">Programa de resellers</RouterLink>
              <RouterLink class="hover:text-black smooth" to="/">Nosotros</RouterLink>
              <RouterLink class="hover:text-black smooth" to="/">Blog</RouterLink>
              <RouterLink class="hover:text-black smooth" to="/contacto">Contacto</RouterLink>
              <!-- -->
            </nav>
          </div>

          

        </div>
      </div>
      
      
    </header>
</template>
<script>
export default {
  components: {
  },
  data () {
    return {
      bgNavbar: true,
      lastScrollPosition: 0,
      scrollValue: 0,
      isOpen: false,
      inputOpen: false
    }
  },
  computed: {
  },
  mounted () {
    this.lastScrollPosition = window.pageYOffset
    window.addEventListener('scroll', this.onScroll)
  },
  beforeDestroy () {
    window.removeEventListener('scroll', this.onScroll)
  },
  methods: {
    toggle () {
      this.isOpen = !this.isOpen
    },
    onScroll () {
      if (window.pageYOffset <= 200) {
        this.bgNavbar = true
      } else {
        this.bgNavbar = false
      }
    }
  }
}
</script>
<style scoped>
header {
  line-height: 1.5;
  max-height: 15vh;
}

nav a.router-link-exact-active {
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

nav a {
  display: inline-block;
}

nav a:first-of-type {
  border: 0;
}

@media (min-width: 1024px) {

}
</style>
