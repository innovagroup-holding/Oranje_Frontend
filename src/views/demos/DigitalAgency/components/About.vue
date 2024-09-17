<!-- <template>
  <section class="pt-0">
    <b-container>
      <b-row>
        <b-col lg="11" class="mx-auto">
          <b-row class="g-4 g-lg-5 align-items-center">
            <b-col md="6" lg="4" class="text-center">
              <div
                class="icon-xxl bg-primary rounded-circle mx-auto mb-n7"
                style="width: 150px; height: 150px"
              ></div>
              <span class="heading-color fw-bold" style="font-size: 6rem; line-height: 1.25"
                >28</span
              >
              <h6 class="w-50 mx-auto">Years of working experience</h6>
            </b-col>

            <b-col md="6" lg="4">
              <h6 class="text-body fw-normal">Since 1996</h6>
              <h3>Genuinely corporate UK-based enterprises</h3>
            </b-col>

            <b-col lg="4">
              <p class="mb-4">
                Embrace a new era of digital success with Mizzle. Our team combines cutting-edge
                design with robust development to deliver websites that captivate and convert.
              </p>
              <router-link to="#" class="btn btn-dark mb-0">Know more about us</router-link>
            </b-col>
          </b-row>
        </b-col>
      </b-row>
    </b-container>
  </section>
</template>

<script lang="ts" setup></script> -->
<template>
  <section class="pb-0 pt-0 position-relative overflow-hidden">
    <b-container>
      <b-row>
        <b-col
          lg="7"
          class="aos"
          data-aos="fade-right"
          data-aos-delay="200"
          data-aos-duration="1200"
          data-aos-easing="ease-in-out"
        >
          <div class="inner-container mx-auto">
            <h1 class="mb-4">
              {{ $t("aboutSection.title1") }}
              <span>
                <svg
                  width="76"
                  height="51"
                  viewBox="0 0 76 51"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <mask id="path-1-inside-1_3060_294" fill="white">
                    <path
                      d="M25.5 51C18.737 51 12.251 48.3134 7.46878 43.5312C2.6866 38.749 -1.88135e-07 32.263 0 25.5C1.88135e-07 18.737 2.6866 12.251 7.46878 7.46878C12.251 2.6866 18.737 -8.06482e-08 25.5 0L25.5 25.5L25.5 51Z"
                    />
                  </mask>
                  <path
                    d="M25.5 51C18.737 51 12.251 48.3134 7.46878 43.5312C2.6866 38.749 -1.88135e-07 32.263 0 25.5C1.88135e-07 18.737 2.6866 12.251 7.46878 7.46878C12.251 2.6866 18.737 -8.06482e-08 25.5 0L25.5 25.5L25.5 51Z"
                    fill="white"
                    stroke="#202124"
                    stroke-width="4"
                    mask="url(#path-1-inside-1_3060_294)"
                  />
                  <path
                    d="M50.5 51C43.737 51 37.251 48.3134 32.4688 43.5312C27.6866 38.749 25 32.263 25 25.5C25 18.737 27.6866 12.251 32.4688 7.46878C37.251 2.6866 43.737 -8.06482e-08 50.5 0L50.5 25.5L50.5 51Z"
                    fill="#202124"
                  />
                  <path
                    d="M75.5 51C68.737 51 62.251 48.3134 57.4688 43.5312C52.6866 38.749 50 32.263 50 25.5C50 18.737 52.6866 12.251 57.4688 7.46878C62.251 2.6866 68.737 -8.06482e-08 75.5 0V25.5L75.5 51Z"
                    fill="#DE3217"
                  />
                </svg>
              </span>
              {{ $t("aboutSection.title2") }}
            </h1>
            <p class="my-5">
              {{ $t("aboutSection.subtitle") }}
            </p>

            <div class="mt-6">
              <router-link
                class="btn btn-lg btn-primary border"
                :to="{ name: 'about-us' }"
              >
                {{ $t("aboutSection.call") }}</router-link
              >
            </div>
          </div></b-col
        >

        <b-col
          lg="5"
          class="d-flex align-items-end justify-content-end aos d-lg-block d-none"
          data-aos="fade-left"
          data-aos-delay="200"
          data-aos-duration="1200"
          data-aos-easing="ease-in-out"
        >
          <img :src="icon1" alt="about-us" width="85%" height="85%" />
        </b-col>
      </b-row>
    </b-container>
  </section>
</template>

<script lang="ts" setup>
import icon1 from "@/assets/about-section-in-home.png";
</script>
