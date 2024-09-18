<template>
  <TopNavigationBar11 data-bs-theme="light" />
  <main>
    <Hero />
    <Description />
    <Cta />
  </main>
</template>
<script setup lang="ts">
import TopNavigationBar11 from "@/views/portfolio/AirCare/components/TopNavigationBar11.vue";
import Cta from "@/views/portfolio/HomeCare/components/Cta.vue";
import Hero from "@/views/portfolio/HomeCare/components/Hero.vue";
import Description from "@/views/portfolio/HomeCare/components/Description.vue";
</script>
