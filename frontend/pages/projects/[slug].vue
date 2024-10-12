<template>
  <ContentQuery
    v-slot="{ data }"
    :path="$route.path"
    find="one"
  >
    <ContentRenderer :value="data">
      <h1>{{ data.title }}</h1>
      <ContentRendererMarkdown :value="data" />
    </ContentRenderer>
  </ContentQuery>
</template>
