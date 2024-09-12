<template>
  <section class="pt-7 pb-0">
    <b-container fluid class="pt-3 pt-xl-5">
      <b-row>
        <b-col xxl="11" class="mx-auto">
          <b-card
            no-body
            class="bg-parallax h-300px h-md-400px h-xl-500px overflow-hidden"
            style="background-size: cover; background-position: center"
            :style="{ backgroundImage: `url('${bg4Img}')` }"
          >
            <div class="bg-overlay bg-dark bg-opacity-50"></div>

            <div
              class="card-img-overlay d-flex align-items-center justify-content-center text-center z-index-2"
            >
              <h1 class="display-4 text-white">We're Superheroes</h1>
            </div>
          </b-card>
        </b-col>
        <!-- <p class="display-8 d-block text-black">
          Welcome to Oranje Fragrance & Flavor, where passion meets innovation
          in the world of scent and taste. Established in 2019, we are a Dutch
          company dedicated to crafting exceptional fragrances and flavors for a
          diverse range of applications, including fine fragrances, personal
          care products, home care solutions, air care, and food flavors. Our
          mission is to elevate your products with unique and captivating scents
          while staying ahead of the latest trends and innovations in the
          industry."
        </p> -->
      </b-row>
    </b-container>
  </section>
</template>

<script setup lang="ts">
import { onMounted } from "vue";
import { jarallax } from "jarallax";

import bg4Img from "@/assets/images/bg/04.jpg";

onMounted(() => {
  jarallax(document.querySelectorAll(".bg-parallax"), {
    speed: 0.4,
  });
});
</script>
