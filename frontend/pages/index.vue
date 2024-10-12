<template>
  <div>
    <HomeHeading class="pt-5" />
    <HomeBlog
      class="pt-5"
      :posts="blogData"
    />
    <HomeProjects
      class="pt-5"
      :posts="projectsData"
    />
    <HomeLinks class="pt-5" />
    <HomeMoreLinks class="pt-5" />
  </div>
</template>

<script setup lang="ts">
const { data: blogData } = await useAsyncData('blog-list', () => queryContent('/blog').find())
const { data: projectsData } = await useAsyncData('projects-list', () => queryContent('/projects').find())
</script>
