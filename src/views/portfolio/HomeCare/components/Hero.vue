<template>
  <section class="pt-8 position-relative overflow-hidden">
    <figure class="position-absolute top-0 start-50 translate-middle">
      <svg
        class="fill-orange opacity-2"
        width="1990"
        height="859"
        viewBox="0 0 1990 859"
        fill="#fceae7"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M1990 429.5C1990 666.706 1544.52 859 995 859C445.477 859 0 666.706 0 429.5C0 192.294 445.477 0 995 0C1544.52 0 1990 192.294 1990 429.5Z"
        />
      </svg>
    </figure>

    <b-container class="pt-lg-4">
      <b-row class="g-4 g-xxl-5">
        <b-col
          lg="7"
          class="position-relative mx-auto text-center aos"
          data-aos="fade-up"
          data-aos-delay="200"
          data-aos-duration="1000"
          data-aos-easing="ease-in-out"
        >
          <div class="d-flex justify-content-center mb-3">
            <nav aria-label="breadcrumb">
              <ol class="breadcrumb breadcrumb-dots pb-0 mb-0">
                <li class="breadcrumb-item"><a href="/">Home</a></li>
                <li class="breadcrumb-item"><a href="#">Categories</a></li>

                <li class="breadcrumb-item active" aria-current="page">
                  Home Care
                </li>
              </ol>
            </nav>
          </div>

          <h1 class="py-3">Home Care</h1>
        </b-col>
      </b-row>
    </b-container>
  </section>
</template>

<script setup lang="ts">
import { onMounted } from "vue";
import AOS from "aos";
onMounted(() => {
  AOS.init({ once: true });
});
</script>
