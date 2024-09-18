<template>
  <TopNavigationBar3 />
  <main>
    <Hero />
    <Cards />
    <CTA />
  </main>
</template>

<script lang="ts" setup>
import TopNavigationBar3 from "@/components/navbar/BlogNavbar.vue";

import Hero from "@/views/pages/about/About/components/Hero.vue";

import Cards from "@/views/pages/about/About/components/Cards.vue";
import CTA from "@/views/pages/about/About/components/CTA.vue";
</script>
