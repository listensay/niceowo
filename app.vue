<script lang="ts" setup>
const website = <any> await useFetchWebsite()
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
