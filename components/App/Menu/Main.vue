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

const logo = useWsinfo().value.logo
const description = useWsinfo().value.description
</script>

<template>
  <div class="menu">
    <div class="p-6">
      <div class="mt-4 mb-14 text-lg">
        <NuxtLink :to="'/'">
          <img :src="logo" width="100" :alt="description">
        </NuxtLink>
      </div>
      <div v-for="item in menus" :key="item.id" class="mb-6" :class="{ 'text-blue-500': currentActive === item.id }" @click="currentActive = item.id">
        <NuxtLink :to="item.uri === '' ? '/' : item.uri">{{ item.label }}</NuxtLink>
      </div>
    </div>
  </div>
</template>

<style lang="less" scoped></style>
