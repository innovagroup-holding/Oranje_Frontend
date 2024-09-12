<template>
  <TopNavigationBar3 />
  <main>
    <Hero />
    <Cards />
    <CTA />
  </main>

  <Footer4 />
</template>

<script lang="ts" setup>
import TopNavigationBar3 from "@/views/demos/DigitalAgency/components/TopNavigationBar3.vue";
import Hero from "@/views/pages/about/About/components/Hero.vue";

import Cards from "@/views/pages/about/About/components/Cards.vue";
import CTA from "@/views/pages/about/About/components/CTA.vue";

import Footer4 from "@/views/pages/about/About/components/Footer4.vue";
</script>
