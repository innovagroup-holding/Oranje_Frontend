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
            :link="backgroundImg10"
            data-glightbox
            data-gallery="image-popup"
          >
            <img :src="backgroundImg10" class="rounded" alt="portfolio-img" />
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
          <h4 class="mb-2">The Personal Care</h4>
          <p class="lh-lg">
            <span class="dropcap fs-1 heading-color bg-transparent rounded px-2"
              >A</span
            >t
            <span class="text-primary fw-bolder fs-6">Oranje</span>
            Fragrance , we understand the critical importance of fragrance in
            personal care products. Our personal care scents are meticulously
            developed to align with the specific needs of hair and skin
            products. Each fragrance is engineered for stability, skin
            compatibility, and environmental sustainability. By partnering with
            industry leaders, we ensure that our fragrances not only meet but
            exceed the quality standards required for consumer satisfaction and
            market success.
          </p>
        </b-col>
      </b-row>
    </b-container>
  </section>
</template>

<script lang="ts" setup>
import CustomGLightbox from "@/components/CustomGLightbox.vue";
import backgroundImg10 from "@/assets/images/photo_2024-09-11_17-31-26.jpg";
</script>
