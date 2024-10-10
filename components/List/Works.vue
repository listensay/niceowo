<script setup>
const after = ref(null)
const hasNextPage = ref(null)
const list = ref([])

// 获取文章
const getWorks = async (first, after = null) => {
  const result = await useFetchWorks().getWorksList(first, after)
  list.value = result.works.list
  if (!result.hasNextPage) {
    hasNextPage.value = false
  } else {
    after.value = result.after
    hasNextPage.value = true
  }
}

await getWorks(10, after.value)
</script>

<template>
  <div class="works">
    <div class="py-4 rounded-md overflow-hidden">
      <div class="flex pb-4 mb-2 border-b border-zinc-100 text-sm">
        <div class="w-[10%] text-center">#</div>
        <div class="w-[62%]">作品</div>
        <div class="w-[10%] text-center">时间</div>
        <!-- TODO: 作者 -->
        <!-- <div class="w-[18%] text-center">作者</div> -->
      </div>
      <div>
        <div v-for="(item, index) in list" :key="item.id" class="overflow-hidden w-full py-4">
          <NuxtLink :to="item.uri" class="block w-full">
            <div class="w-full">
              <div class="flex items-center w-full">
                <div class="w-[10%] text-center text-sm">{{ index < 10 ? `0${index + 1}` : index + 1 }}</div>
                <div class="flex w-[62%] items-center">
                  <div>
                    <template v-if="item.featuredImage">
                      <img :src="item.featuredImage.node.sourceUrl" class="w-12 h-12 object-cover" :alt="item.title">
                    </template>
                    <template v-else>
                      <img src="./defult" class="w-12 h-12 object-cover" :alt="item.title">              
                    </template>
                  </div>
                  <div class="ml-4">
                    <div class="mb-2 text-sm">{{ item.title }}</div>
                    <div class="text-sm text-zinc-600" v-html="item.excerpt"></div>
                  </div>
                </div>
                <div class="text-sm w-[10%] text-center">
                  <time :datetime="$dayjs(item.date).format('YYYY/MM/DD').toString()">{{ $dayjs(item.date).format('YYYY-MM-DD').toString() }} </time>
                </div>
                <!-- <div class="text-center w-[18%]"></div> -->
              </div>
            </div>
          </NuxtLink>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="less" scoped></style>
