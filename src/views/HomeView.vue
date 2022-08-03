<script setup>
import MainHero from '@/components/home/MainHero.vue'
import SplitSection from '@/components/home/SplitSection.vue'
import LideresSection from '@/components/home/LideresSection.vue'
import ProductosSection from '@/components/home/ProductosSection.vue'
import CtaDemoSection from '@/components/home/CtaDemoSection.vue'
import ReviewsSection from '@/components/home/ReviewsSection.vue'
import QuotesSection from '@/components/home/QuotesSection.vue'
import CtaContactSection from '@/components/home/CtaContactSection.vue'
import PartnersSection from '@/components/home/PartnersSection.vue'
import CasesSection from '@/components/home/CasesSection.vue'
</script>

<template>
  <main class="overflow-hidden w-full h-full ">
    <MainHero />
    <SplitSection />
    <LideresSection />
    <ProductosSection />
    <CtaDemoSection />
    <PartnersSection />
    <CasesSection />
    <ReviewsSection />
    <QuotesSection />
    <CtaContactSection />
  </main>
</template>
