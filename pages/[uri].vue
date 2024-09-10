<script setup>
const route = useRoute()
const uri = route.params.uri
let result
try {
  result = await useFetchPost().getPostDetail(uri)
} catch (error) {
  console.log(error)
}
const article = result.nodeByUri
</script>

<template>
  <div class="article p-8 bg-white">
    <div class="flex items-center">
      <div class="bg-white border w-48 h-48 flex justify-center items-center mr-4">{{ article.title }}</div>
      <div>
        <div class="text-lg mb-4">{{ article.title }}</div>
        <div class="mb-4">时间: {{ article.date }}</div>
      </div>
    </div>
    <article class="prose max-w-full" v-html="article.content"></article>
  </div>
</template>

<style lang="less" scoped></style>
