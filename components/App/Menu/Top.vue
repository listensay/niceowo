<script setup>
const props = defineProps({
  menus: {
    type: Object,
    default: () => {
      return {}
    }
  }
})

const currentActive = ref(props.menus[0].id)
</script>

<template>
  <div class="topMenu">
    <nav>
      <ul class="flex items-center h-14 p-4 border-b border-zinc-200 z-10 bg-white">
        <li v-for="menu in menus" :key="menu.id" :class="{ 'text-blue-500': currentActive === menu.id }">
          <NuxtLink :to="menu.uri">{{ menu.label }}</NuxtLink>
        </li>
      </ul>
    </nav>
  </div>
</template>

<style lang="less" scoped></style>
