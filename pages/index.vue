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
</script>

<template>
  <div class="home">
    <div class="panel h-64 bg-[#423DAF] p-8">
      <div class="text-5xl text-white mb-4">
        Welcome to
      </div>
      <div class="text-5xl text-white">
        My homepage
      </div>
    </div>
    <div class="p-4">
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
