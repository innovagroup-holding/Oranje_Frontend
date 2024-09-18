<template>
  <section class="pt-0">
    <Swiper
      class="overflow-hidden"
      :modules="[EffectFade, Autoplay, Pagination]"
      :loop="true"
      :effect="'fade'"
      :speed="1000"
      :autoplay="{
        delay: 3000,
        disableOnInteraction: false,
      }"
      :pagination="{
        el: '.swiper-pagination',
        clickable: true,
      }"
    >
      <SwiperSlide>
        <b-card
          no-body
          class="overflow-hidden min-vh-100 rounded-0"
          :style="`background:url(${hero1}) no-repeat; background-size:cover; background-position:top center;`"
        >
          <div class="bg-overlay bg-linear-overlay"></div>

          <div
            class="position-relative z-index-2 d-flex flex-column m-auto h-100 py-9"
          >
            <b-container>
              <b-row>
                <b-col
                  sm="11"
                  lg="8"
                  xl="7"
                  class="text-center m-auto aos"
                  data-aos="fade-right"
                  data-aos-delay="200"
                  data-aos-duration="1200"
                  data-aos-easing="ease-in-out"
                >
                  <h1 class="text-white display-5 mb-4">
                    {{ $t("hero.title") }}
                  </h1>
                  <p class="text-white mb-5">
                    {{ $t("hero.subtitle") }}
                  </p>
                  <router-link
                    class="btn btn-lg btn-white icon-link icon-link-hover mb-0"
                    :to="{ name: 'contact.v1' }"
                  >
                    {{ $t("hero.call") }} <BIconArrowRight class="bi" />
                  </router-link>
                </b-col>
              </b-row>
            </b-container>
          </div>
        </b-card>
      </SwiperSlide>
      <SwiperSlide>
        <b-card
          no-body
          class="overflow-hidden min-vh-100 rounded-0"
          :style="`background:url(${hero2}) no-repeat; background-size:cover; background-position:center;`"
        >
          <div class="bg-overlay bg-linear-overlay"></div>

          <div
            class="position-relative z-index-2 d-flex flex-column m-auto h-100 py-9"
          >
            <b-container>
              <b-row>
                <b-col
                  sm="11"
                  lg="8"
                  xl="7"
                  class="text-center m-auto aos"
                  data-aos="fade-left"
                  data-aos-delay="200"
                  data-aos-duration="1200"
                  data-aos-easing="ease-in-out"
                >
                  <h1 class="text-white display-5 mb-4">
                    {{ $t("hero.title") }}
                  </h1>
                  <p class="text-white mb-5">
                    {{ $t("hero.subtitle") }}
                  </p>
                  <router-link
                    class="btn btn-lg btn-white icon-link icon-link-hover mb-0"
                    :to="{ name: 'contact.v1' }"
                  >
                    {{ $t("hero.call") }}<BIconArrowRight class="bi" />
                  </router-link>
                </b-col>
              </b-row>
            </b-container>
          </div>
        </b-card>
      </SwiperSlide>
      <SwiperSlide>
        <b-card
          no-body
          class="overflow-hidden min-vh-100 rounded-0"
          :style="`background:url(${hero3}) no-repeat; background-size:cover; background-position:center;`"
        >
          <div class="bg-overlay bg-linear-overlay"></div>

          <div
            class="position-relative z-index-2 d-flex flex-column m-auto h-100 py-9"
          >
            <b-container>
              <b-row>
                <b-col
                  sm="11"
                  lg="8"
                  xl="7"
                  class="text-center m-auto aos"
                  data-aos="fade-left"
                  data-aos-delay="200"
                  data-aos-duration="1200"
                  data-aos-easing="ease-in-out"
                >
                  <h1 class="text-white display-5 mb-4">
                    {{ $t("hero.title") }}
                  </h1>
                  <p class="text-white mb-5">
                    {{ $t("hero.subtitle") }}
                  </p>
                  <router-link
                    class="btn btn-lg btn-white icon-link icon-link-hover mb-0"
                    :to="{ name: 'contact.v1' }"
                  >
                    {{ $t("hero.call") }}<BIconArrowRight class="bi" />
                  </router-link>
                </b-col>
              </b-row>
            </b-container>
          </div>
        </b-card>
      </SwiperSlide>
      <SwiperSlide>
        <b-card
          no-body
          class="overflow-hidden min-vh-100 rounded-0"
          :style="`background:url(${hero4}) no-repeat; background-size:cover; background-position:center;`"
        >
          <div class="bg-overlay bg-linear-overlay"></div>

          <div
            class="position-relative z-index-2 d-flex flex-column m-auto h-100 py-9"
          >
            <b-container>
              <b-row>
                <b-col
                  sm="11"
                  lg="8"
                  xl="7"
                  class="text-center m-auto aos"
                  data-aos="fade-left"
                  data-aos-delay="200"
                  data-aos-duration="1200"
                  data-aos-easing="ease-in-out"
                >
                  <h1 class="text-white display-5 mb-4">
                    {{ $t("hero.title") }}
                  </h1>
                  <p class="text-white mb-5">
                    {{ $t("hero.subtitle") }}
                  </p>
                  <router-link
                    class="btn btn-lg btn-white icon-link icon-link-hover mb-0"
                    :to="{ name: 'contact.v1' }"
                  >
                    {{ $t("hero.call") }}<BIconArrowRight class="bi" />
                  </router-link>
                </b-col>
              </b-row>
            </b-container>
          </div>
        </b-card>
      </SwiperSlide>
      <SwiperSlide>
        <b-card
          no-body
          class="overflow-hidden min-vh-100 rounded-0"
          :style="`background:url(${hero5}) no-repeat; background-size:cover; background-position:top center;`"
        >
          <div class="bg-overlay bg-linear-overlay"></div>

          <div
            class="position-relative z-index-2 d-flex flex-column m-auto h-100 py-9"
          >
            <b-container>
              <b-row>
                <b-col
                  sm="11"
                  lg="8"
                  xl="7"
                  class="text-center m-auto aos"
                  data-aos="fade-left"
                  data-aos-delay="200"
                  data-aos-duration="1200"
                  data-aos-easing="ease-in-out"
                >
                  <h1 class="text-white display-5 mb-4">
                    {{ $t("hero.title") }}
                  </h1>
                  <p class="text-white mb-5">
                    {{ $t("hero.subtitle") }}
                  </p>
                  <router-link
                    class="btn btn-lg btn-white icon-link icon-link-hover mb-0"
                    :to="{ name: 'contact.v1' }"
                  >
                    {{ $t("hero.call") }}<BIconArrowRight class="bi" />
                  </router-link>
                </b-col>
              </b-row>
            </b-container>
          </div>
        </b-card>
      </SwiperSlide>
      <div
        class="swiper-pagination swiper-pagination-line position-absolute bottom-0 mb-3"
      ></div>
    </Swiper>
  </section>
</template>

<script lang="ts" setup>
import { Swiper, SwiperSlide } from "swiper/vue";
import { EffectFade, Autoplay, Pagination } from "swiper/modules";
import { BIconArrowRight } from "bootstrap-icons-vue";
import hero1 from "@/assets/Hero1.jpg";
import hero2 from "@/assets/Hero2.png";
import hero3 from "@/assets/Hero3.jpg";
import hero4 from "@/assets/Hero4.jpg";
import hero5 from "@/assets/Hero5.png";
import { onMounted } from "vue";
import AOS from "aos";
onMounted(() => {
  AOS.init({ once: true });
});
</script>
