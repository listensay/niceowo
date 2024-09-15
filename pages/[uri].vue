<script setup>
const route = useRoute()
const uri = route.params.uri
let result
try {
  result = await useFetchPost().getPostDetail(uri)
} catch (error) {
  console.log(error)
}

const article = ref(null)
article.value = result.data
console.log(article.value)

useSeoMeta({
  title: article.value.title,
  description: article.value.excerpt
})
</script>

<template>
  <div class="article p-8 bg-white">
    <!-- 有缩略图的显示方式 -->
    <template v-if="article.featuredImage">
        <div class="flex items-center pb-8">
          <div class="w-48 h-48 flex justify-center items-center mr-8 overflow-hidden">
            <img :src="article.featuredImage.node.sourceUrl" :alt="article.featuredImage.node.title">
          </div>
          <div>
            <div class="text-lg mb-4">{{ article.title }}</div>
            <div>
              <NuxtLink :to="article.author.node.uri" class="flex items-center mb-4">
                <img class="w-8 h-8 rounded-full mr-2" :src="article.author.node.avatar.url" :alt="article.author.node.name">
                <div>
                  {{ article.author.node.name }}
                </div>
              </NuxtLink>
            </div>
            <div class="categories  mb-4">
              <span>分类: </span>
              <NuxtLink v-for="item in article.categories.nodes" :key="item.id" :to="item.uri" class="mr-2">
                {{ item.name }}
              </NuxtLink>
            </div>
            <div>
              <time :datetime="$dayjs(article.date).format('YYYY/MM/DD').toString()">{{ $dayjs(article.date).format('YYYY-MM-DD').toString() }} </time>
            </div>
          </div>
        </div>
      </template>
      <!-- 无缩略图显示方式 -->
      <template v-else>
        <div class="py-8">
          <div class="text-3xl mb-6">{{ article.title }}</div>
          <time class="mb-6 block" :datetime="$dayjs(article.date).format('YYYY/MM/DD').toString()">{{ $dayjs(article.date).format('YYYY-MM-DD').toString() }} </time>
          <div class="mb-4 flex items-center">
            <NuxtLink class="flex items-center mr-4">
              <img class="w-8 h-8 rounded-full mr-2" :src="article.author.node.avatar.url" :alt="article.author.node.name">
              <div>
                {{ article.author.node.name }}
              </div>
            </NuxtLink>
            <template v-if="article.categories">
              <div class="categories  mr-4">
                <span>分类: </span>
                <NuxtLink v-for="item in article.categories.nodes" :key="item.id" :to="item.uri" class="mr-2">
                  {{ item.name }}
                </NuxtLink>
              </div>
            </template>
          </div>
        </div>
      </template>
    <article class="prose max-w-full mb-4" v-html="article.content"></article>
    <!-- <div class="shadow-md my-8 rounded-md">
      <div class="p-4">Comments </div>
      <div class="p-4">
        <div v-for="item in article.comments.nodes">
          <div class="flex mb-4">
            <img :src="item.author.node.avatar.url" :alt="item.author.node.name" class=" rounded-full w-10 h-10 mr-2" />
            <div class="text-sm">
              <NuxtLink>
                {{ item.author.node.name }}
              </NuxtLink>
              <div class="my-2 text-zinc-700" v-html="item.content"></div>  
              <time class="text-zinc-500" :datetime="$dayjs(item.date).format('YYYY/MM/DD').toString()">{{ $dayjs(item.date).format('YYYY-MM-DD').toString() }} </time>
            </div>
          </div>
        </div>
      </div>
    </div> -->
  </div>
</template>

<style lang="less" scoped></style>
