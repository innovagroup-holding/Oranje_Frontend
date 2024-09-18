<template>
  <section
    class="vh-xl-auto vh-100 bg-light py-0 overflow-hidden"
    data-bs-theme="light"
  >
    <b-container fluid class="h-100 p-0">
      <b-row class="h-100 g-0">
        <b-col lg="6" class="m-auto order-2">
          <div class="px-5 px-xxl-8 py-6 py-lg-8">
            <h1
              class="display-8 mb-4 lh-base position-relative aos"
              data-aos="fade-up"
              data-aos-delay="200"
              data-aos-duration="1000"
              data-aos-easing="ease-in-out"
            >
              {{ $t("aboutPage.hero.title1") }}
              <span class="position-relative z-index-2">
                {{ $t("aboutPage.hero.title2") }}
                <span
                  class="w-100 h-auto bg-primary p-1 p-md-2 position-absolute bottom-0 start-0 mb-2 mb-sm-3 z-index-n1"
                ></span>
              </span>
              <span
                class="position-absolute top-0 start-0 translate-middle mt-0 ms-n4"
              >
                <svg
                  class="fill-primary"
                  width="86"
                  height="105"
                  viewBox="0 0 86 105"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M50.9805 4.63769C51.6165 4.24345 56.4262 10.3524 61.7246 18.1163C67.0564 25.8003 72.7966 35.1061 75.9634 40.6314C82.2158 51.6489 85.8889 61.2748 84.5362 62.0301C83.1029 62.7522 77.2708 54.3462 71.0415 43.3853C67.8986 37.9165 62.7042 28.3199 58.293 20.1246C53.8819 11.9293 50.2874 5.05535 50.9805 4.63769Z"
                  />
                  <path
                    d="M64.0889 66.7297C63.5001 67.2372 60.6142 65.1098 57.1179 62.637C53.6451 60.2207 49.5285 57.539 47.2336 56.0303C42.5967 52.8997 39.0022 49.8707 39.6599 48.4069C40.2841 47.0231 45.3294 47.9307 50.3923 51.2838C52.9286 52.892 56.9393 56.2802 59.8742 59.6469C62.809 63.0137 64.6779 66.2223 64.0889 66.7297Z"
                  />
                  <path
                    d="M55.1316 86.0595C55.1297 86.856 48.7063 87.4433 40.9853 87.6368C33.2643 87.8295 24.2555 87.492 19.0669 87.0413C8.68981 86.139 0.434871 83.7683 0.656712 82.218C0.878555 80.6685 9.34356 80.5005 19.5833 81.393C24.7149 81.867 33.5706 82.7978 41.1895 83.6415C48.832 84.5408 55.1571 85.32 55.1316 86.0595Z"
                  />
                </svg>
              </span>
            </h1>

            <p
              class="mb-5 aos"
              data-aos="fade-up"
              data-aos-delay="200"
              data-aos-duration="2000"
              data-aos-easing="ease-in-out"
            >
              {{ $t("aboutPage.hero.subtitle") }}
            </p>
            <router-link
              :to="{ name: 'contact.v1' }"
              class="btn btn-lg btn-primary mb-0 aos"
              data-aos="fade-up"
              data-aos-delay="200"
              data-aos-duration="2500"
              data-aos-easing="ease-in-out"
            >
              {{ $t("aboutPage.hero.call") }}</router-link
            >
          </div>
        </b-col>

        <b-col lg="6" class="order-1 order-lg-2">
          <Swiper
            class="swiper-img-scale h-100"
            :modules="[EffectFade, Autoplay, Pagination]"
            loop
            :effect="'fade'"
            :speed="1500"
            :autoplay="{
              delay: 3000,
              disableOnInteraction: false,
            }"
            :pagination="{
              el: '.swiper-pagination',
              clickable: true,
            }"
          >
            <SwiperSlide v-for="(image, idx) in swiperImages" :key="idx">
              <div
                class="h-100 scale-img py-9"
                :style="`background-image:url(${image}); background-position: center left; background-size: cover;`"
              ></div>
            </SwiperSlide>
          </Swiper>
        </b-col>
      </b-row>
    </b-container>
  </section>
</template>

<script lang="ts" setup>
import { Swiper, SwiperSlide } from "swiper/vue";
import { EffectFade, Autoplay, Pagination } from "swiper/modules";

import backgroundImg7 from "@/assets/images/bg/07.jpg";
import backgroundImg12 from "@/assets/images/bg/12.jpg";
import backgroundImg13 from "@/assets/images/bg/13.jpg";
import { onMounted } from "vue";
import AOS from "aos";
onMounted(() => {
  AOS.init({ once: true });
});
const swiperImages = [backgroundImg7, backgroundImg12, backgroundImg13];
</script>
