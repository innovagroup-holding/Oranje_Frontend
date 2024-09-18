<template>
  <section class="pt-xl-6">
    <b-container class="pt-lg-6 position-relative z-index-2">
      <b-row class="g-4 g-xl-6">
        <b-col
          sm="6"
          class="aos"
          data-aos="fade-right"
          data-aos-delay="200"
          data-aos-duration="1000"
          data-aos-easing="ease-in-out"
        >
          <CustomGLightbox
            :link="backgroundImg9"
            data-glightbox
            data-gallery="image-popup"
          >
            <img :src="backgroundImg9" class="rounded" alt="portfolio-img" />
          </CustomGLightbox>
        </b-col>
        <b-col
          sm="6"
          class="ms-auto aos d-flex align-self-center flex-column"
          data-aos="fade-left"
          data-aos-delay="200"
          data-aos-duration="1000"
          data-aos-easing="ease-in-out"
        >
          <h4 class="mb-lg-5">{{ $t("fineFragrance.title") }}</h4>
          <p class="lh-lg">
            <span class="dropcap fs-1 heading-color bg-transparent rounded px-2"
              >D</span
            >{{ $t("fineFragrance.subtitle1") }}
            <span class="text-primary fw-bolder fs-6">Oranje</span>
            {{ $t("fineFragrance.subtitle2") }}
          </p>
        </b-col>
      </b-row>
    </b-container>
  </section>
</template>

<script lang="ts" setup>
import CustomGLightbox from "@/components/CustomGLightbox.vue";

import backgroundImg9 from "@/assets/Fine Fragrance.jpg";
</script>
