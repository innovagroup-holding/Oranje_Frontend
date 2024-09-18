<template>
  <b-card
    no-body
    class="card-img-scale bg-transparent overflow-hidden mb-6 mb-xl-8"
  >
    <b-row
      class="g-xl-6 align-items-center aos"
      data-aos="fade-right"
      data-aos-delay="200"
      data-aos-duration="1000"
      data-aos-easing="ease-in-out"
    >
      <b-col lg="6">
        <div class="card-img-scale-wrapper rounded-2 h-100">
          <img :src="item.image" class="img-scale" alt="portfolio-img" />
        </div>
      </b-col>

      <b-col lg="6">
        <b-card-body class="h-100 px-0 p-xl-5">
          <b-card-title class="mb-5 px-1">{{ $t(item.title) }}</b-card-title>
          <p class="card-text mb-3 mb-lg-4 fs-6 px-1">
            {{ $t(item.description) }}
          </p>
        </b-card-body>
      </b-col>
    </b-row>
  </b-card>
</template>

<script lang="ts" setup>
import type { PropType } from "vue";
import { type CardCaseType } from "@/views/pages/about/About/data";

defineProps({
  item: {
    type: Object as PropType<CardCaseType>,
    required: true,
  },
});
</script>
