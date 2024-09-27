<script setup>
const props = defineProps({
  menus: {
    type: Object,
    default: () => {
      return {}
    }
  }
})

const currentActive = ref(null)
if(props.menus) {
  currentActive.value = props.menus[0].id
}
</script>

<template>
  <div class="menu">
    <div class="p-6">
      <div class="mb-8 text-lg">1梦博客</div>
      <div v-for="item in menus" :key="item.id" class="mb-4" :class="{ 'text-blue-500': currentActive === item.id }" @click="currentActive = item.id">
        <NuxtLink :to="item.uri">{{ item.label }}</NuxtLink>
      </div>
    </div>
  </div>
</template>

<style lang="less" scoped></style>
