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
          :to="data._path"
          class="hover:underline"
        >
          <h1 class="text-slate-50 pb-2">
            &gt; {{ data.title }}
            <span class="text-slate-500">
              {{ data.dateCreated }}
            </span>
          </h1>
        </NuxtLink>
        <div class="text-sm">
          <ContentRendererMarkdown
            :value="data"
          />
        </div>
      </ContentRenderer>
    </div>
  </ContentQuery>
</template>
