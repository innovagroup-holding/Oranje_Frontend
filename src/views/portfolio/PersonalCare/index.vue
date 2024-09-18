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
import Cta from "@/views/portfolio/PersonalCare/components/Cta.vue";
import Hero from "@/views/portfolio/PersonalCare/components/Hero.vue";
import Description from "@/views/portfolio/PersonalCare/components/Description.vue";
</script>
