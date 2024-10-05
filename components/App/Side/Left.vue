<script setup>
const result = await useFetchMenus()
const menus = ref([])
menus.value = result.menus.nodes
const PC = ref([])
if(menus.value.length !== 0) {
  if(menus.value.filter(item => item.locations[0] === 'MAIN')[0]) {
    PC.value = menus.value.filter(item => item.locations[0] === 'MAIN')[0].menuItems.nodes
  }
}
</script>

<template>
  <div class="app-side-left flex justify-between flex-col h-full">
    <div>
      <template v-if="PC.length > 0">
        <AppMenuMain :menus="PC" />
      </template>
      <template v-else>
        <div>未设置左侧菜单</div>
      </template>
    </div>
    <footer class="p-4 text-sm text-gray-500">
      2024 © <a href="https://blog.200205.net/">背影如正面</a> All Rights Reserved.
    </footer>
  </div>
</template>

<style lang="less" scoped></style>
