<template>
  <section class="pt-xl-6">
    <b-container class="position-relative z-index-2 pt-lg-6">
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
          class="ms-auto aos"
          data-aos="fade-left"
          data-aos-delay="200"
          data-aos-duration="1000"
          data-aos-easing="ease-in-out"
        >
          <h4 class="mb-4">The Air Care</h4>
          <p class="lh-lg pt-3">
            <span class="dropcap fs-1 heading-color bg-transparent rounded px-2"
              >T</span
            >
            ransform various environments with our specialized air care
            fragrances. Whether it's for upscale hotels, busy airports, or
            modern fitness centers, our air fragrances are crafted to leave a
            lasting impression. We focus on creating bespoke scents that enhance
            any space, including both traditional and contemporary air fragrance
            solutions. Our goal is to provide your business with aromas that not
            only refresh but also create a memorable atmosphere.
          </p>
        </b-col>
      </b-row>
    </b-container>
  </section>
</template>

<script lang="ts" setup>
import CustomGLightbox from "@/components/CustomGLightbox.vue";

import backgroundImg9 from "@/assets/images/photo_2024-09-11_17-22-57.jpg";
</script>
