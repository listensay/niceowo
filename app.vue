<script lang="ts" setup>
const website = await useFetchWebsite()

useHead({
  titleTemplate: (titleChunk) => {
    return titleChunk ? `${titleChunk} - ${website.seo?.title}` : `${website.seo?.title} - ${website.seo?.description}`;
  },
  meta: [
    {
      name: 'description',
      content: website.base?.description
    }
  ]
})
</script>

<template>
  <div>
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>

<style>
.page-enter-active,
.page-leave-active {
  transition: all 0.4s;
}
.page-enter-from,
.page-leave-to {
  opacity: 0;
  filter: blur(1rem);
}
</style>