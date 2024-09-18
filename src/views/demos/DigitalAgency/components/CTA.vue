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
        <div
          class="bg-opacity-25 bg-dark position-absolute top-0 start-0 w-100 h-100"
        ></div>

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
import { BIconTelephone } from "bootstrap-icons-vue";
import bg5Img from "@/assets/backgroundForCTA.jpg";
</script>
