<template>
  <div class="text-slate-100 text-sm">
    <h2>
      blog
    </h2>
    <ol class="list-disc list-inside pt-2 space-y-1">
      <li
        v-for="post in posts"
        :key="post._id"
        class="text-xs"
      >
        <NuxtLink
          :to="post._path"
          class="hover:underline"
        >
          <span class="text-slate-500">{{ post.dateCreated }}</span> <span>{{ post.title }}</span>
        </NuxtLink>
      </li>
    </ol>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  posts: Array
}>()
</script>
