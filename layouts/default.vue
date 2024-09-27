<script setup>
const result = await useFetchMenus()
const menus = ref([])
menus.value = result.menus.nodes
const PC = ref([])
const TOP = ref([])

if(menus.value.length !== 0) {
  if(menus.value.filter(item => item.locations[0] === 'MAIN')[0]) {
    PC.value = menus.value.filter(item => item.locations[0] === 'MAIN')[0].menuItems.nodes
  }
  if(menus.value.filter(item => item.locations[0] === 'TOP')[0]) {
    TOP.value = menus.value.filter(item => item.locations[0] === 'TOP')[0].menuItems.nodes
  }
}
</script>

<template>
  <div class="layout h-[100vh] px-8">
    <div class="text-[#01001e] h-full flex">
      <div class="w-64 bg-white border-r border-zinc-200">
          <template v-if="PC.length > 0">
            <AppMenuMain :menus="PC" />
          </template>
          <template v-else>
            <div>未设置左侧菜单</div>
          </template>
      </div>
      <div class="flex-1 overflow-auto bg-white">
        <template v-if="TOP.length > 0">
          <AppMenuTop :menus="TOP" />
        </template>
        <template v-else>
          <div>未设置顶部菜单</div>
        </template>
        <slot />
      </div>
      <div class="w-60 bg-white">
        567
      </div>
    </div>
  </div>
</template>

<style lang="less" scoped></style>
