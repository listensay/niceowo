<script setup>
defineProps({
  title: {
    type: String,
    default: '标题'
  },
  link: {
    type: String,
    default: '/'
  }
})
</script>

<template>
  <div class="more-nav">
    <div class="mb-6 flex justify-between items-center">
      <div class="text-lg">{{ title }} </div>
      <NuxtLink :to="link" class="block text-sm">更多内容</NuxtLink>
    </div>
  </div>
</template>

<style lang="less" scoped></style>
