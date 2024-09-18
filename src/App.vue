<template>
  <div>
    <RouterView />
    <BackToTop />
  </div>
  <Footer />
</template>

<script setup lang="ts">
import { RouterLink, RouterView } from "vue-router";
import BackToTop from "@/components/BackToTop.vue";
import Footer from "@/components/footer/Footer9.vue";

import configureFakeBackend from "@/helpers/fake-backend";

import { useLayoutStore } from "@/stores/layout";

configureFakeBackend();
const useLayout = useLayoutStore();
useLayout.setTheme(useLayout.theme);
</script>
