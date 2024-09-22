<template>
  <li class="nav-item dropdown">
    <router-link
      class="nav-link dropdown-toggle arrow-none d-flex justify-content-between align-items-center w-100"
      :class="menuItemActive('about', currentRouteName) && 'active'"
      :to="{ name: 'about-us' }"
    >
      {{ $t("nav.about") }}
    </router-link>
  </li>
</template>

<script lang="ts" setup>
import router from "@/router";
import { supportLink } from "@/helpers";
import type { MenuItemType } from "@/helpers/menu";
import MenuItem from "@/components/topbar/AppMenu/MenuItem.vue";
import MenuItemWithChildren from "@/components/topbar/AppMenu/MenuItemWithChildren.vue";
import { menuItemActive } from "@/components/topbar/AppMenu/getActiveClass";
import { faAngleDown } from "@fortawesome/free-solid-svg-icons";
import { BIconLifePreserver } from "bootstrap-icons-vue";

// type PagesMenuDropdownProps = {
//   menuItems: MenuItemType[];
// };

// defineProps<PagesMenuDropdownProps>();

const currentRouteName = router.currentRoute.value.name;
</script>
