<template>
  <router-link v-if="blog.route" :to="blog.route" @click="scrollToTop">
    <article
      class="card-hover-shadow border h-100 card bg-transparent aos"
      data-aos="flip-left"
      data-aos-delay="200"
      data-aos-duration="1200"
      data-aos-easing="ease-in-out"
    >
      <img :src="blog.image" alt="blog-img" />

      <b-card-body class="p-4">
        <b-card-title tag="h6">{{ $t(blog.title) }}</b-card-title>
        <b-card-text>{{ $t(blog.category) }}</b-card-text>
      </b-card-body>
    </article>
  </router-link>
</template>

<script lang="ts" setup>
import type { BlogType } from "@/types";
import type { PropType } from "vue";

defineProps({
  blog: {
    type: Object as PropType<BlogType>,
    required: true,
  },
});
const scrollToTop = () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
};
</script>

<style scoped>
.card {
  text-align: center;
}

.card:hover {
  cursor: pointer;
  border-bottom: 4px solid #de3217 !important;
  transform: translateY(-15px);
  transition: 0.3s ease-in-out;
}
</style>
