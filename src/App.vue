<script setup>
import { RouterLink, RouterView } from 'vue-router'
import Footer from './components/partials/Footer.vue'
import Header from './components/partials/Header.vue'
</script>

<template>
  <main>
    <Header />
    <!-- -->
    <RouterView />
    <!-- -->
    <Footer />
  </main>
</template>

