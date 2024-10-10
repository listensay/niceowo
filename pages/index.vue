<script setup>
const wsinfo = useWsinfo().value
</script>

<template>
  <div class="home">
    <div class="relative pb-4">
      <div class="h-52 bg-fixed " 
          style="
          background-image: url(./bg.jpg);
          background-repeat: no-repeat;
          background-size: cover;
          background-position: center;
          "
      >
      </div>
      <div class="mx-8">
        <div class="avatar -mt-16 flex justify-between">
          <img class="w-24 h-24 border border-zinc-100" :src="wsinfo.avatar" :alt="wsinfo.nickname">
          <!-- <div class="flex items-center">
            <button class="block bg-red-500 p-2">Like: 16</button>
          </div> -->
        </div>
        <div class="text-lg mt-4 mb-2">{{ wsinfo.nickname }}</div>
        <div class="text-sm mb-4 text-zinc-700">{{ wsinfo.about }}</div>
        <div class="flex mb-4">
          <div v-for="item in wsinfo.social_links" :key="item.name">
            <a :href="item.url" target="_blank" class="mr-2 block">
              <img :src="item.icon" :alt="item.name" class="h-8">
            </a>
          </div>
        </div>
        <!-- 资料 -->
        <div class="rounded-md overflow-hidden text-sm">
          <div class="p-4 last:border-none border-b border-zinc-200" :style="{ backgroundColor: item.color === '' ? '#fef9c3' : item.color }" v-for="item in wsinfo.profile">
            <div>
              <div class="mb-1 font-bold text-zinc-800">{{ item.key }}</div>
              <div class="text-zinc-700">{{ item.value }}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="p-8 pt-4">
      <MoreNav title="作品集" link="/works" />
      <ListWorks />
      <div class="mt-6">
        <MoreNav title="文章" link="/articles" />
        <ListArticles />
      </div>
    </div>
  </div>
</template>

<style lang="less" scoped></style>
