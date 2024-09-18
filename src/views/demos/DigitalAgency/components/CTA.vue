<template>
  <section
    class="position-relative z-index-2 py-0 mb-n7 aos overflow-hidden"
    data-aos="flip-up"
    data-aos-delay="200"
    data-aos-duration="1200"
    data-aos-easing="ease-in-out"
  >
    <b-container class="position-relative">
      <div
        class="rounded position-relative overflow-hidden p-4 p-sm-5"
        style="background-size: cover; background-position: center"
        :style="{ backgroundImage: `url('${bg5Img}')` }"
      >
        <div class="bg-overlay bg-dark bg-opacity-50"></div>

        <figure class="position-absolute top-0 start-0 ms-n8">
          <svg
            width="371"
            height="354"
            viewBox="0 0 371 354"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <ellipse
              cx="172.5"
              cy="176.5"
              rx="131.5"
              ry="125.5"
              fill="url(#paint0_linear_195_2)"
            ></ellipse>
            <ellipse
              cx="185.5"
              cy="177"
              rx="185.5"
              ry="177"
              fill="url(#paint1_linear_195_2)"
            ></ellipse>
            <defs>
              <linearGradient
                id="paint0_linear_195_2"
                x1="172.5"
                y1="51"
                x2="172.5"
                y2="302"
                gradientUnits="userSpaceOnUse"
              >
                <stop
                  offset="0.0569271"
                  stop-color="#D9D9D9"
                  stop-opacity="0.6"
                ></stop>
                <stop
                  offset="0.998202"
                  stop-color="#D9D9D9"
                  stop-opacity="0"
                ></stop>
              </linearGradient>
              <linearGradient
                id="paint1_linear_195_2"
                x1="185.5"
                y1="0"
                x2="185.5"
                y2="354"
                gradientUnits="userSpaceOnUse"
              >
                <stop
                  offset="0.0569271"
                  stop-color="#D9D9D9"
                  stop-opacity="0.4"
                ></stop>
                <stop
                  offset="0.998202"
                  stop-color="#D9D9D9"
                  stop-opacity="0"
                ></stop>
              </linearGradient>
            </defs>
          </svg>
        </figure>
        <b-row class="g-4 position-relative">
          <b-col lg="7" class="mx-auto text-center">
            <h2
              class="text-white mb-4"
              style="text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.6)"
            >
              {{ $t("call.title") }}
            </h2>
            <p
              class="text-white mb-4"
              style="text-shadow: 1px 1px 3px rgba(0, 0, 0, 0.6)"
            >
              {{ $t("call.subtitle") }}
            </p>
            <div
              class="d-flex justify-content-center align-items-center gap-1 gap-sm-2"
            >
              <router-link
                @click="scrollToTop"
                :to="{ name: 'contact.v1' }"
                class="btn btn-dark icons-center"
              >
                <BIconTelephone class="me-2" />
                {{ $t("call.call") }}
              </router-link>
            </div>
          </b-col>
        </b-row>
      </div>
    </b-container>
  </section>
</template>

<script lang="ts" setup>
import { BIconEnvelope, BIconTelephone } from "bootstrap-icons-vue";
import bg5Img from "@/assets/backgroundForCTA.jpg";
import ctaVectorImg from "@/assets/images/elements/cta-vector.svg";

const scrollToTop = () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
};
</script>
