<template>
  <StickyHeader className="header-absolute" data-bs-theme="light">
    <nav class="navbar navbar-expand-xl bg-light px-lg-5" data-bs-theme="light">
      <b-container>
        <LogoBox class-name="me-5" />

        <AppMenu showContactUs ul-class="mx-auto" @click="scrollToTop" />

        <ul class="nav align-items-center dropdown-hover ms-sm-2">
          <ThemeToggleDropdown />
          <LanguageDropdown />

          <li class="nav-item">
            <MobileNavbarToggler />
          </li>
        </ul>
      </b-container>
    </nav>
  </StickyHeader>
</template>

<script lang="ts" setup>
import StickyHeader from "@/components/topbar/StickyHeader.vue";
import LogoBox from "@/components/topbar/LogoBox.vue";
import ThemeToggleDropdown from "@/components/topbar/ThemeToggleDropdown.vue";
import LanguageDropdown from "@/components/topbar/LanguageDropdown.vue";
import MobileNavbarToggler from "@/components/topbar/MobileNavbarToggler.vue";
import { BIconSearch } from "bootstrap-icons-vue";
import AppMenu from "@/components/topbar/AppMenu/index.vue";
const scrollToTop = () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
};
</script>
<style scoped>
.navbar {
  padding: 0 !important;
  margin: 0 !important;
  height: 70px !important;
}
</style>
