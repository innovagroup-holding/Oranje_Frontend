<template>
  <TopNavigationBar3 />
  <main>
    <Hero />
    <About />
    <Blogs />
    <Testimonials />

    <CTA />
  </main>
</template>

<script lang="ts" setup>
import TopNavigationBar3 from "@/components/navbar/BlogNavbar.vue";
import Hero from "@/views/demos/DigitalAgency/components/Hero.vue";
import CTA from "@/views/demos/DigitalAgency/components/CTA.vue";
import Blogs from "@/views/demos/DigitalAgency/components/Blogs.vue";
import Testimonials from "@/views/demos/DigitalAgency/components/Testimonials.vue";
import About from "@/views/demos/DigitalAgency/components/About.vue";
</script>
