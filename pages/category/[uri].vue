<script setup>
const route = useRoute()
const uri = route.params.uri
console.log(uri)

</script>

<template>
  <div>
    <div class="panel h-64 bg-[#423DAF] p-8">
      <div class="text-center text-white mb-4 text-5xl">
        Welcome to
      </div>
    </div>
  </div>
</template>

<style lang="less" scoped></style>
