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
            :link="showcaseImg5"
            data-glightbox
            data-gallery="image-popup"
          >
            <img :src="backgroundImg9" class="rounded" alt="portfolio-img" />
          </CustomGLightbox>
        </b-col>
        <b-col
          sm="6"
          class="ms-auto aos"
          data-aos="fade-left"
          data-aos-delay="200"
          data-aos-duration="1000"
          data-aos-easing="ease-in-out"
        >
          <h4 class="mb-4">The Fine Fragrance</h4>
          <p class="lh-lg">
            <span class="dropcap fs-1 heading-color bg-transparent rounded px-2"
              >D</span
            >ive into the sophisticated realm of fine fragrances with
            <span class="text-primary fw-bolder fs-6">Oranje</span>
            Fragrance. We leverage the latest advancements in fragrance
            technology to craft scents that are both luxurious and cutting-edge.
            Our fine fragrances are designed to meet the highest standards of
            quality, offering exceptional value for your brand. Ideal for both
            personal use and commercial applications, our scents are crafted to
            elevate your product offerings and set new benchmarks in olfactory
            excellence.
          </p>
        </b-col>
      </b-row>
    </b-container>
  </section>
</template>

<script lang="ts" setup>
import CustomGLightbox from "@/components/CustomGLightbox.vue";

import showcaseImg5 from "@/assets/images/portfolio/showcase/05.jpg";
import showcase1 from "@/assets/images/portfolio/showcase/01.jpg";
import backgroundImg8 from "@/assets/images/photo_2024-09-11_17-35-23.jpg";
import backgroundImg9 from "@/assets/images/photo_2024-09-11_17-22-57.jpg";
import backgroundImg10 from "@/assets/images/photo_2024-09-11_17-31-26.jpg";
</script>
