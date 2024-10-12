<template>
  <ContentQuery
    v-slot="{ data }"
    :path="$route.path"
    find="one"
  >
    <HomeHeading class="pt-5" />
    <div class="pt-5">
      <ContentRenderer :value="data">
        <NuxtLink
          to="#"
          class="hover:underline"
        >
          <span class="text-slate-100">&gt; {{ data.title }}</span> <span class="text-slate-500">{{ data.dateCreated }}</span>
        </NuxtLink>
        <div class="text-sm pt-3">
          <ContentRendererMarkdown :value="data" />
        </div>
      </ContentRenderer>
    </div>
  </ContentQuery>
</template>
