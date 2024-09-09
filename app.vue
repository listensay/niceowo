<script lang="ts" setup>
const website = await useFetchWebsite()

useHead({
  titleTemplate: (titleChunk) => {
    return titleChunk ? `${titleChunk} - ${website.generalSettings?.title}` : `${website.generalSettings?.title} - ${website.generalSettings?.description}`;
  },
  meta: [
    {
      name: 'description',
      content: website.generalSettings?.description
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