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
    <div class="text-[#01001e] h-full flex">
      <div class="w-64 bg-white border-r border-zinc-200">
        <AppMenuMain :menus="PC.menuItems.nodes" />
      </div>
      <div class="flex-1 overflow-auto bg-white">
        <AppMenuTop :menus="TOP.menuItems.nodes" />
        <slot />
      </div>
      <div class="w-60 bg-white">
        567
      </div>
    </div>
  </div>
</template>

<style lang="less" scoped></style>
