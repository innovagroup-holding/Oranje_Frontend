<!-- <template>
  <article class="card card-img-scale border p-2 h-100">
    <div class="card-img-scale-wrapper position-relative rounded overflow-hidden">
      <img :src="blog.image" class="card-img img-scale" alt="service img" />
      <div class="badge text-bg-dark position-absolute top-0 start-0 m-3">{{ blog.category }}</div>
    </div>

    <b-card-body class="d-flex flex-column px-2">
      <div class="small mb-3 icons-center">
        <BIconCalendar class="me-1" />
        {{ blog.publishedAt?.month }} {{ blog.publishedAt?.date }}, {{ blog.publishedAt?.year }}
      </div>
      <b-card-title tag="h6" class="mb-3">
        <router-link v-if="blog.route" :to="blog.route" class="stretched-link">{{
          blog.title
        }}</router-link>
      </b-card-title>
      <div class="d-flex justify-content-between align-items-center mt-auto">
        <div class="d-flex align-items-center">
          <div class="avatar avatar-xs flex-shrink-0 me-2">
            <img class="avatar-img rounded" :src="blog.publishedBy?.avatar" alt="avatar" />
          </div>
          <p class="mb-0">By {{ blog.publishedBy?.firstName }} {{ blog.publishedBy?.lastName }}</p>
        </div>
        <b-button variant="dark" class="btn btn-round flex-shrink-0 flex-centered">
          <BIconArrowUpRight />
        </b-button>
      </div>
    </b-card-body>
  </article>
</template>

<script lang="ts" setup>
import type { PropType } from 'vue'
import { BIconCalendar, BIconArrowUpRight } from 'bootstrap-icons-vue'
import type { BlogType } from '@/types'

defineProps({
  blog: {
    type: Object as PropType<BlogType>,
    required: true
  }
})
</script> -->

<!-- <template>
  <article class="card-hover-shadow border h-100 card bg-transparent">
    <div class="image-container">
      <img :src="blog.image" class="card-img-circle" alt="blog-img" />
    </div>
    <div>
      <img :src="blog.image" class="card-img" alt="blog-img" />
      <b-card-body class="p-4">
        <b-card-title tag="h6">{{ blog.title }}</b-card-title>
        <b-card-text>{{ blog.category }}</b-card-text>
      </b-card-body>
    </div>
  </article>
</template>

<script lang="ts" setup>
import { BIconArrowRight } from "bootstrap-icons-vue";
import type { BlogType } from "@/types";
import type { PropType } from "vue";

defineProps({
  blog: {
    type: Object as PropType<BlogType>,
    required: true,
  },
});
</script>
<style scoped>
.card {
  position: relative;
  text-align: center;
}

.image-container {
  display: flex;
  justify-content: center;
  margin-top: -50px; 
}

.card-img-circle {
  width: 100px;
  height: 100px;
  border-radius: 50%;
  object-fit: cover;
  border: 3px solid #fff;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}
.card:hover {
  cursor: pointer;
  transition: 0.3s ease-in-out;
  border-bottom: 4px solid #de3217 !important;
}
</style> -->

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
        <b-card-title tag="h6">{{ blog.title }}</b-card-title>
        <b-card-text>{{ blog.category }}</b-card-text>
      </b-card-body>
    </article>
  </router-link>
</template>

<script lang="ts" setup>
import { onMounted } from "vue";
import AOS from "aos";
import { BIconArrowRight } from "bootstrap-icons-vue";
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
onMounted(() => {
  AOS.init();
});
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
