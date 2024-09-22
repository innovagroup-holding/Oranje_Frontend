<template>
  <li class="nav-item dropdown">
    <router-link
      class="nav-link dropdown-toggle arrow-none d-flex justify-content-between align-items-center w-100"
      :class="menuItemActive('demos', currentRouteName) && 'active'"
      :to="{ name: 'home' }"
    >
      {{ $t("nav.home") }}
    </router-link>
  </li>
</template>

<script lang="ts" setup>
import router from "@/router";
import type { MenuItemType } from "@/helpers/menu";
// import { splitArray } from "@/helpers/array";
import { faAngleDown } from "@fortawesome/free-solid-svg-icons";
import { menuItemActive } from "@/components/topbar/AppMenu/getActiveClass";

const currentRouteName = router.currentRoute.value.name;

// type DemosMenuDropdownProps = {
//   menuItems: MenuItemType[];
// };

// const props = defineProps<DemosMenuDropdownProps>();
// const splitMenuitems = splitArray(props.menuItems, 7);
</script>
