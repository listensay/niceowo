<script setup>
/**
 * TODO: 
 * 1. 点击加载更多文章
 */

const after = ref(null)
const hasNextPage = ref(null)
const list = ref([])

// 获取文章
const getPost = async (first, after = null) => {
  const result = await useFetchPost().getPostList(first, after)

  list.value = result.posts.list
  if (!result.hasNextPage) {
    hasNextPage.value = false
  } else {
    after.value = result.after
    hasNextPage.value = true
  }
}

await getPost(10, after.value)
</script>

<template>
  <div class="works">
    <div class="flex">
      <div v-for="item in list" class="mb-4 mr-4 border border-zinc-200 rounded-md overflow-hidden">
        <NuxtLink :to="item.article.uri">
          <div class="mb-3">
            <template v-if="item.article.featuredImage">
              <div class="w-48 h-48 overflow-hidden">
                <img :src="item.article.featuredImage.node.sourceUrl" class="w-full h-full object-cover" alt="">
              </div>
            </template>
            <template v-else>
              <div class="bg-white border-b w-48 h-48 flex justify-center items-center">{{ item.article.title }}</div>
            </template>
            <div class="w-48 text-sm p-2 h-24">
              <div>{{ item.article.title }}</div>
              <div class="text-sm" v-html="item.excerpt"></div>
            </div>
          </div>
        </NuxtLink>
      </div>
    </div>
  </div>
</template>

<style lang="less" scoped></style>
