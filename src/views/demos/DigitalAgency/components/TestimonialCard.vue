<!-- <template>
  <b-tab>
    <template #title>
      <div class="avatar flex-shrink-0">
        <img class="avatar-img rounded-circle" :src="testimonial.user.avatar" alt="avatar" />
      </div>
      <div class="ms-2">
        <h6 class="mb-0">{{ testimonial.user.firstName }} {{ testimonial.user.lastName }}</h6>
        <p class="mb-0 small">{{ testimonial.user.role }}</p>
      </div>
    </template>
    <div
      class="icon-lg bg-dark text-white rounded-circle mb-4 d-flex align-items-center justify-content-center"
    >
      <BIconQuote class="fa-xl" />
    </div>
    <ul class="list-inline mb-4">
      <template v-if="testimonial.rating">
        <li
          v-for="(_star, idx) in new Array(Math.floor(testimonial.rating))"
          :key="idx"
          class="list-inline-item me-1"
        >
          <font-awesome-icon :icon="faStar" class="text-warning" />
        </li>
      </template>
      <li v-if="!Number.isInteger(testimonial.rating)" class="list-inline-item me-1">
        <font-awesome-icon :icon="faStarHalfAlt" class="text-warning" />
      </li>
      <template v-if="testimonial.rating && testimonial.rating < 5">
        <li
          v-for="(_val, idx) in new Array(5 - Math.ceil(testimonial.rating))"
          :key="idx"
          class="list-inline-item me-1"
        >
          <font-awesome-icon :icon="FaStar" class="text-warning" />
        </li>
      </template>
    </ul>
    <h6 class="mb-2">"{{ testimonial.title }}"</h6>
    <p class="heading-color">{{ testimonial.comment }}</p>
  </b-tab>
</template>

<script lang="ts" setup>
import type { TestimonialType } from '@/types'
import type { PropType } from 'vue'
import { faStar, faStarHalfAlt } from '@fortawesome/free-solid-svg-icons'
import { faStar as FaStar } from '@fortawesome/free-regular-svg-icons'
import { BIconQuote } from 'bootstrap-icons-vue'

defineProps({
  testimonial: {
    type: Object as PropType<TestimonialType>,
    required: true
  }
})
</script> -->

<template>
  <ul class="list-inline mb-3">
    <li class="list-inline-item me-0">
      <BIconStarFill class="text-warning" />
    </li>
    <li class="list-inline-item me-0">
      <BIconStarFill class="text-warning" />
    </li>
    <li class="list-inline-item me-0">
      <BIconStarFill class="text-warning" />
    </li>
    <li class="list-inline-item me-0">
      <BIconStarFill class="text-warning" />
    </li>
    <li class="list-inline-item me-0">
      <BIconStarHalf class="text-warning" />
    </li>
  </ul>

  <q class="lead heading-color fs-6 lh-sm">{{ testimonial.comment }}</q>

  <div class="d-sm-flex align-items-center mt-4">
    <div class="avatar flex-shrink-0">
      <img
        class="avatar-img rounded-circle"
        :src="testimonial.user.avatar"
        alt="avatar"
      />
    </div>

    <div class="ms-sm-3 mt-2 mt-sm-0">
      <span class="heading-color fw-semibold mb-0"
        >{{ testimonial.user.firstName }}
      </span>
      <p class="mb-0 small">{{ testimonial.user.role }}</p>
    </div>
  </div>
</template>

<script setup lang="ts">
import { type PropType } from "vue";
import type { TestimonialType } from "@/types";
import { BIconStarFill, BIconStarHalf } from "bootstrap-icons-vue";

defineProps({
  testimonial: {
    type: Object as PropType<TestimonialType>,
    required: true,
  },
});
</script>
