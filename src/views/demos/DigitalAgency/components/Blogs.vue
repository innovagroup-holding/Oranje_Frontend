<template>
  <section>
    <b-container>
      <div class="inner-container text-center mb-sm-4">
        <h2 class="mb-0">{{ $t("categories.title") }}</h2>
      </div>

      <b-row class="g-4 g-lg-5">
        <b-col md="3" v-for="(blog, idx) in blogs" :key="idx" class="mt-7">
          <BlogCard :blog="blog" />
        </b-col>
      </b-row>
    </b-container>
  </section>
</template>

<script lang="ts" setup>
import BlogCard from "@/views/demos/DigitalAgency/components/BlogCard.vue";
import { blogs } from "@/views/demos/DigitalAgency/data";
</script>
