<script setup>
const after = ref(null)
const hasNextPage = ref(null)
const list = ref([])

// 获取文章
const getPosts = async (first, after = null) => {
  const result = await useFetchPost().getPostList(first, after)
  list.value = result.posts.list
  if (!result.hasNextPage) {
    hasNextPage.value = false
  } else {
    after.value = result.after
    hasNextPage.value = true
  }
}

await getPosts(10, after.value)

const wsinfo = useWsinfo().value
console.log(wsinfo)
</script>

<template>
  <div class="home">
    <div class="relative pb-4 mb-6">
      <div class="h-64 bg-[#423DAF]"></div>
      <div class="mx-8">
        <div class="avatar -mt-16 flex justify-between">
          <img class="w-32 h-32 border border-zinc-100" :src="wsinfo.avatar" :alt="wsinfo.nickname">
          <div class="flex items-center">
            <button class="block bg-red-500 p-2">Like: 16</button>
          </div>
        </div>
        <div class="text-lg mt-4 mb-2">{{ wsinfo.nickname }}</div>
        <div class="text-sm mb-4 text-zinc-700">{{ wsinfo.about }}</div>
        <div class="flex">
          <div v-for="item in wsinfo.social_links" :key="item.name">
            <a :href="item.url" target="_blank" class="mr-2 block">
              <img :src="item.icon" :alt="item.name" class="h-8">
            </a>
          </div>
        </div>
      </div>
    </div>
    <div class="p-8">
      <div class="text-2xl mb-4">最新文章</div>
      <div class="grid grid-cols-5 gap-4">
        <div v-for="item in list" class="mb-4">
          <NuxtLink :to="item.article.uri">
            <div class="mb-3">
              <template v-if="item.article.featuredImage">
                <div class="w-48 h-48 overflow-hidden">
                  <img :src="item.article.featuredImage.node.sourceUrl" alt="">
                </div>
              </template>
              <template v-else>
                <div class="bg-white border w-48 h-48 flex justify-center items-center">{{ item.article.title }}</div>
              </template>
            </div>
            <div>{{ item.article.title }}</div>
          </NuxtLink>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="less" scoped></style>
