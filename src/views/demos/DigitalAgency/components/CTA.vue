<!-- <template>
  <section class="position-relative z-index-2 pt-0">
    <b-container class="position-relative">
      <div
        class="bg-dark rounded position-relative overflow-hidden p-4 p-sm-6"
        :style="`background:url(${backgroundImg}) no-repeat; background-size:cover; background-position:center;`"
      >
        <b-row class="align-items-center position-relative">
          <b-col md="6" xl="7" class="mb-4 mb-xl-0">
            <h2 class="text-white">Subscribe to our newsletter</h2>
            <p class="text-white mb-0">
              We've always worked very hard to give our customers the best experience.
            </p>
          </b-col>

          <b-form class="col-md-6 col-xl-4 ms-xl-auto">
            <b-form-input class="mb-3" type="email" placeholder="Enter your email address" />
            <router-link to="#" class="btn btn-primary mb-0 d-grid">Subscribe now!</router-link>
          </b-form>
        </b-row>
      </div>
    </b-container>
  </section>
</template>

<script lang="ts" setup>
import backgroundImg from '@/assets/images/bg/15.jpg'
</script> -->

<template>
  <section class="pt-0">
    <b-container>
      <div class="bg-dark rounded position-relative overflow-hidden p-4 p-sm-7">
        <div
          class="position-absolute top-0 start-0 mt-n8 mt-xl-n5 d-none d-md-block"
        >
          <img :src="saasDecoration05" class="rotate-33 h-200px" alt="" />
        </div>

        <div class="position-absolute end-0 bottom-0 d-none d-lg-block">
          <img :src="ctaVectorImg" class="h-200px h-xl-300px" alt="" />
        </div>

        <b-row class="g-4 position-relative">
          <b-col lg="10" xl="7" class="mx-auto text-center">
            <h3 class="text-white mb-3">Ready to Transform Your Senses?</h3>
            <p class="text-white opacity-8">
              Contact us today to discover how our fragrances and flavours can
              elevate your products.
            </p>
            <router-link class="btn btn-primary" :to="{ name: 'contact.v1' }">
              Contact us
            </router-link>
          </b-col>
        </b-row>
      </div>
    </b-container>
  </section>
</template>

<script setup lang="ts">
import ctaVectorImg from "@/assets/images/elements/cta-vector.svg";
import saasDecoration05 from "@/assets/images/elements/saas-decoration/05.png";
</script>
