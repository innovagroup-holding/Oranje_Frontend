<template>
  <div class="dropdown">
    <button
      class="btn dropdown-toggle arrow-none d-flex justify-content-between align-items-center w-100"
      type="button"
      id="dropdownMenuButton"
      @click="toggleDropdown"
    >
      {{ currentLanguage }}
      <font-awesome-icon :icon="faAngleDown" class="fa-sm ms-1" />
    </button>
    <ul
      class="dropdown-menu"
      :class="{ show: dropdownOpen }"
      aria-labelledby="dropdownMenuButton"
    >
      <li>
        <button @click="setLanguage('en')" class="dropdown-item">EN</button>
      </li>
      <li>
        <button @click="setLanguage('nl')" class="dropdown-item">NL</button>
      </li>
    </ul>
  </div>
</template>

<script lang="ts" setup>
import { faAngleDown } from "@fortawesome/free-solid-svg-icons";

import { ref, onMounted } from "vue";
import { useI18n } from "vue-i18n";

const dropdownOpen = ref(false);
const { locale } = useI18n();
const currentLanguage = ref("EN");
onMounted(() => {
  const savedLanguage = localStorage.getItem("language");
  if (savedLanguage) {
    setLanguage(savedLanguage);
  } else {
    setLanguage("en");
  }
});
function toggleDropdown() {
  dropdownOpen.value = !dropdownOpen.value;
}

function setLanguage(lang: string) {
  locale.value = lang;
  currentLanguage.value = lang === "en" ? "EN" : "NL";
  dropdownOpen.value = false;
  localStorage.setItem("language", lang);
}
</script>

<style scoped>
.dropdown-menu {
  min-width: auto;
}
</style>
