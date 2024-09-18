<template>
  <section class="pt-0">
    <b-container>
      <div
        class="bg-primary bg-opacity-10 rounded p-4 p-sm-5 aos"
        data-aos="flip-up"
        data-aos-delay="200"
        data-aos-duration="1000"
        data-aos-easing="ease-in-out"
      >
        <b-row>
          <b-col lg="7" class="text-center mx-auto">
            <ul class="avatar-group mb-4 justify-content-center">
              <li class="avatar avatar-xs">
                <img
                  class="avatar-img rounded-circle"
                  :src="avatar06"
                  alt="avatar"
                />
              </li>
              <li class="avatar avatar">
                <img
                  class="avatar-img rounded-circle"
                  :src="avatar05"
                  alt="avatar"
                />
              </li>
              <li class="avatar avatar-lg z-index-2">
                <img
                  class="avatar-img rounded-circle"
                  :src="avatar02"
                  alt="avatar"
                />
              </li>
              <li class="avatar avatar z-index-1">
                <img
                  class="avatar-img rounded-circle"
                  :src="avatar03"
                  alt="avatar"
                />
              </li>
              <li class="avatar avatar-xs">
                <img
                  class="avatar-img rounded-circle"
                  :src="avatar04"
                  alt="avatar"
                />
              </li>
            </ul>

            <p class="mb-4">
              {{ $t("fineFragrance.text") }}
            </p>

            <router-link
              :to="{ name: 'contact.v1' }"
              class="btn btn-lg btn-dark mb-0"
            >
              {{ $t("fineFragrance.btn") }}
            </router-link>
          </b-col>
        </b-row>
      </div>
    </b-container>
  </section>
</template>

<script setup lang="ts">
import avatar02 from "@/assets/Customer photos/Young woman3.png";
import avatar03 from "@/assets/Customer photos/young man3.png";
import avatar04 from "@/assets/Customer photos/Young woman5.png";
import avatar05 from "@/assets/Customer photos/Young woman4.png";
import avatar06 from "@/assets/Customer photos/young man2.png";
</script>
