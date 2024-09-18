<template>
  <b-collapse id="topbar-appmenu-collapse" class="navbar-collapse">
    <ul class="navbar-nav navbar-nav-scroll dropdown-hover" :class="ulClass">
      <DemosMenuDropdown />

      <AboutPage />

      <PortfolioMenuDropdown :menu-items="menuItems[2].children!" />

      <li v-if="showContactUs" class="nav-item">
        <router-link
          class="nav-link"
          :class="menuItemActive('contact', currentRouteName) && 'active'"
          :to="{ name: 'contact' }"
        >
          {{ $t("nav.contact") }}
        </router-link>
      </li>
    </ul>
  </b-collapse>
</template>

<script lang="ts" setup>
import { getAppMenuItems, type MenuItemType } from "@/helpers/menu";
import DemosMenuDropdown from "@/components/topbar/AppMenu/DemosMenuDropdown.vue";
import AboutPage from "@/components/topbar/AppMenu/AboutPage.vue";
import PortfolioMenuDropdown from "@/components/topbar/AppMenu/PortfolioMenuDropdown.vue";
import { menuItemActive } from "@/components/topbar/AppMenu/getActiveClass";
import router from "@/router";
type AppMenuProps = {
  showMegaMenu?: boolean;
  showResources?: boolean;
  showContactUs?: boolean;
  showDocs?: boolean;
  ulClass?: string;
};
const menuItems: MenuItemType[] = getAppMenuItems();

defineProps<AppMenuProps>();
const currentRouteName = router.currentRoute.value.name;
</script>
