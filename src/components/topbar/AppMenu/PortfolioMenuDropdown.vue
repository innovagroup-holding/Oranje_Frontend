<template>
  <li class="nav-item dropdown">
    <a
      class="nav-link dropdown-toggle arrow-none d-flex justify-content-between align-items-center w-100"
      href="#"
      :class="menuItemActive('portfolio', currentRouteName) && 'active'"
    >
      {{ $t("nav.categories") }}

      <font-awesome-icon :icon="faAngleDown" class="fa-sm ms-1" />
    </a>
    <div class="dropdown-menu dropdown-menu-center dropdown-menu-size-sm p-3">
      <b-row class="g-xl-3">
        <b-col>
          <ul class="list-unstyled text-center">
            <li v-for="item in menuItems" :key="item.key">
              <router-link
                class="dropdown-item"
                v-if="item.route"
                :to="{ name: item.route.name }"
                :class="{ active: item.route.name === currentRouteName }"
              >
                {{ item.label }}
              </router-link>
            </li>
          </ul>
        </b-col>
      </b-row>
    </div>
  </li>
</template>

<script lang="ts" setup>
import router from "@/router";
import type { MenuItemType } from "@/helpers/menu";
import { menuItemActive } from "@/components/topbar/AppMenu/getActiveClass";

import { BIconArrowRight } from "bootstrap-icons-vue";
import { faAngleDown } from "@fortawesome/free-solid-svg-icons";

import portfolioList1Img from "@/assets/images/portfolio/list/01.jpg";
import portfolioList2Img from "@/assets/images/portfolio/list/02.jpg";

type PortfolioMenuDropdownProps = {
  menuItems: MenuItemType[];
};

defineProps<PortfolioMenuDropdownProps>();

const currentRouteName = router.currentRoute.value.name;
</script>
