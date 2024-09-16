<template>
  <router-link v-if="blog.route" :to="blog.route" @click="scrollToTop">
    <article
      class="card-hover-shadow border h-100 card bg-transparent aos"
      data-aos="flip-left"
      data-aos-delay="200"
      data-aos-duration="1200"
      data-aos-easing="ease-in-out"
    >
      <div class="image-container">
        <img :src="blog.icon" class="card-img-circle" alt="blog-img" />
        <img :src="blog.image" class="card-img-main" alt="blog-img" />
      </div>
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
  /* position: relative; */
  text-align: center;
}

.image-container {
  position: relative;
  display: flex;
  justify-content: center;
}

.card-img-main {
  width: 100%;
  height: auto;
  display: block;
}

.card-img-circle {
  position: absolute;
  top: 0;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 100px;
  height: 100px;
  border-radius: 50%;
  object-fit: cover;
  border: 3px solid #fff;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  background-color: #fff;
}

.card:hover {
  cursor: pointer;
  transition: 0.3s ease-in-out;
  border-bottom: 4px solid #de3217 !important;
}
</style>
