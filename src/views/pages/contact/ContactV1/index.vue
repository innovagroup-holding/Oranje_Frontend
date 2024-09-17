<template>
  <TopNavigationBar3 />
  <main>
    <Hero />

    <ContactMap />
  </main>
  <Footer9 />
</template>

<script setup lang="ts">
import TopNavigationBar3 from "@/components/navbar/BlogNavbar.vue";

import Hero from "@/views/pages/contact/ContactV1/components/Hero.vue";
import ContactMap from "@/views/pages/contact/ContactV1/components/ContactAndMap.vue";
import Footer9 from "@/views/pages/contact/ContactV1/components/Footer9.vue";
</script>
