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
  <div class="article" v-html="article.content"></div>
</template>

<style lang="less" scoped></style>
