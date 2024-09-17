<!-- <template>
  <section>
    <b-container>
      <b-row>
        <b-col md="4">
          <div class="avatar avatar-xl mb-md-4">
            <Swiper
              loop
              class="swiper-img-scale overflow-hidden"
              :modules="[EffectFade, Autoplay]"
              :effect="'fade'"
              :autoplay="{
                delay: 1500,
                disableOnInteraction: false
              }"
            >
              <SwiperSlide v-for="(avatar, idx) in swiperAvatars" :key="idx">
                <img
                  class="avatar-img rounded-circle border border-2 border-white"
                  :src="avatar"
                  alt="avatar"
                />
              </SwiperSlide>
            </Swiper>
          </div>

          <h2 class="mb-md-4">Hear from our satisfied clients ❤️</h2>
          <p class="mb-md-4">
            Read what our satisfied clients have to say about their experiences with our platform.
          </p>
        </b-col>

        <b-col md="7" class="ms-auto">
          <b-tabs
            pills
            end
            navItemClass="d-flex align-items-center text-start p-3"
            nav-class="nav-pills-testimonial nav-justified mb-4 mb-lg-0"
            content-class="mb-md-4"
            nav-wrapper-class="pt-2"
          >
            <template v-for="(testimonial, idx) in testimonials" :key="idx">
              <TestimonialCard :testimonial="testimonial" />
            </template>
          </b-tabs>
        </b-col>
      </b-row>
    </b-container>
  </section>
</template>

<script lang="ts" setup>
import { Swiper, SwiperSlide } from 'swiper/vue'
import { Autoplay, EffectFade } from 'swiper/modules'
import { testimonials } from '@/views/demos/DigitalAgency/data'
import TestimonialCard from '@/views/demos/DigitalAgency/components/TestimonialCard.vue'

import avatar1 from '@/assets/images/avatar/01.jpg'
import avatar10 from '@/assets/images/avatar/10.jpg'
import avatar5 from '@/assets/images/avatar/05.jpg'
import avatar9 from '@/assets/images/avatar/09.jpg'

const swiperAvatars = [avatar9, avatar1, avatar10, avatar5]
</script> -->

<template>
  <section class="pt-0">
    <b-container
      class="aos overflow-hidden"
      data-aos="zoom-out-up"
      data-aos-delay="200"
      data-aos-duration="1200"
      data-aos-easing="ease-in-out"
    >
      <div
        class="rounded-3 position-relative overflow-hidden p-4 p-md-6"
        style="background-size: cover; background-position: center"
        :style="{ backgroundImage: `url('${bg5Img}')` }"
      >
        <div class="bg-overlay bg-dark bg-opacity-75"></div>

        <b-row class="position-relative z-index-1">
          <b-col lg="4" class="mb-5 mb-lg-0">
            <div class="d-flex flex-column h-100">
              <ul class="list-group list-group-borderless mb-4">
                <li
                  class="list-group-item text-white fs-2 fw-semibold d-flex p-0"
                >
                  {{ $t("testimonials.title1") }}
                </li>
                <li
                  class="list-group-item text-white fs-3 fw-semibold d-flex p-0"
                >
                  {{ $t("testimonials.title2") }}
                </li>
                <li
                  class="list-group-item text-white fs-3 fw-semibold d-flex p-0"
                >
                  {{ $t("testimonials.title3") }}. . .
                </li>
              </ul>
            </div>
          </b-col>

          <b-col lg="8" xl="6" class="ms-auto">
            <b-card no-body class="p-4 p-sm-5">
              <b-card-header class="bg-transparent p-0">
                <h5>Here our customers experience</h5>
              </b-card-header>

              <b-card-body class="p-0 pt-4">
                <Swiper
                  :modules="[Autoplay, Pagination]"
                  :autoplay="{
                    delay: 5000,
                  }"
                  :loop="true"
                  :spaceBetween="30"
                  :grabCursor="true"
                  :pagination="{
                    el: '.swiper-pagination',
                    clickable: true,
                  }"
                >
                  <SwiperSlide
                    v-for="(item, idx) in testimonials"
                    :key="idx"
                    class="pb-5"
                  >
                    <TestimonialCard :testimonial="item" />
                  </SwiperSlide>

                  <div
                    class="swiper-pagination position-absolute bottom-0"
                  ></div>
                </Swiper>
              </b-card-body>
            </b-card>
          </b-col>
        </b-row>
      </div>
    </b-container>
  </section>
</template>

<script setup lang="ts">
import { Swiper, SwiperSlide } from "swiper/vue";
import { Autoplay, Pagination } from "swiper/modules";
import { testimonials } from "@/views/demos/DigitalAgency/data";
import TestimonialCard from "@/views/demos/DigitalAgency/components/TestimonialCard.vue";
import { BIconArrowRight } from "bootstrap-icons-vue";
import bg5Img from "@/assets/images/bg/05.jpg";
</script>
