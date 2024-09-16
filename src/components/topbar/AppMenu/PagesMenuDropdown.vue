<template>
  <li class="nav-item dropdown">
    <a
      class="nav-link dropdown-toggle arrow-none d-flex justify-content-between align-items-center w-100"
      href="/about-us"
      :class="menuItemActive('about', currentRouteName) && 'active'"
    >
      {{ $t("nav.about") }}
    </a>
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

type PagesMenuDropdownProps = {
  menuItems: MenuItemType[];
};

defineProps<PagesMenuDropdownProps>();

const currentRouteName = router.currentRoute.value.name;
</script>
