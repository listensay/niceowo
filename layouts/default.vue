<script setup>
const result = await useFetchMenus()
const menus = ref([])
menus.value = result.menus.nodes

const PC = ref([])
const TOP = ref([])
if(menus.value.length !== 0) {
  PC.value = menus.value.filter(item => item.locations[0] === 'MAIN')[0]
  TOP.value = menus.value.filter(item => item.locations[0] === 'TOP')[0]
}
</script>

<template>
  <div class="layout h-[100vh] p-8">
    <div class="bg-[#01001e] text-white h-full flex">
      <div class=" w-52 bg-[#0c0b24]">
        LOGO 12312321
        <div v-for="item in PC.menuItems.nodes" :key="item.id">
          <NuxtLink :to="item.uri">{{ item.label }}</NuxtLink>
        </div>
      </div>
      <div class="flex-1">
        {{ TOP }}
        <slot />
      </div>
      <div class="w-64">
        567
      </div>
    </div>
  </div>
</template>

<style lang="less" scoped></style>
