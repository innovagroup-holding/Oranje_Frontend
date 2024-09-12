<template>
  <section class="pt-xl-8">
    <b-container class="pt-4 pt-xl-0 position-relative z-index-2">
      <b-row class="g-4 g-xl-6">
        <b-col sm="6">
          <CustomGLightbox
            :link="backgroundImg10"
            data-glightbox
            data-gallery="image-popup"
          >
            <img :src="backgroundImg10" class="rounded" alt="portfolio-img" />
          </CustomGLightbox>
        </b-col>
        <b-col sm="6" class="ms-auto">
          <h4 class="mb-2">The Personal Care</h4>
          <p class="lh-lg">
            <span class="dropcap fs-1 heading-color bg-light rounded px-2"
              >A</span
            >t
            <span class="text-primary fw-bolder fs-6">Oranje</span>
            Fragrance & Flavor, we understand the critical importance of
            fragrance in personal care products. Our personal care scents are
            meticulously developed to align with the specific needs of hair and
            skin products. Each fragrance is engineered for stability, skin
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
