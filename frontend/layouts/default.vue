<template>
  <div class="bg-slate-950 min-h-screen text-slate-200 font-mono">
    <div
      class="mx-auto"
    >
      <div
        class="mx-auto max-w-xl"
      >
        <div class="flex justify-center overflow-hidden">
          <PrefixsumArt />
        </div>
        <div class="px-5">
          <slot />
        </div>
        <div class="px-5 mt-8">
          <div class="pt-3 pb-8 border-t border-slate-700">
            <p class="text-slate-700 text-sm">
              prefixsum &copy; {{ date }}
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const date = new Date().getFullYear()
</script>

<style>
body {
  overflow-y: scroll;
}
</style>
