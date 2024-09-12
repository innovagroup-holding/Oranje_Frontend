<template>
  <section>
    <b-container class="pb-0 mb-0">
      <template v-for="(item, idx) in cardCases" :key="idx">
        <template v-if="idx % 2 === 0">
          <CaseCard :item="item" />
        </template>

        <template v-else>
          <CaseCard2 :item="item" />
        </template>
      </template>
    </b-container>
  </section>
</template>

<script lang="ts" setup>
import { cardCases } from "@/views/pages/about/About/data";
import CaseCard from "@/views/pages/about/About/components/CaseCard.vue";
import CaseCard2 from "@/views/pages/about/About/components/CaseCard2.vue";
</script>
