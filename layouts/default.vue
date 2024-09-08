<script setup></script>

<template>
  <div class="layout h-[100vh] p-8">
    <div class="bg-[#01001e] text-white h-full flex">
      <div class=" w-24 bg-[#0c0b24]">
        123
      </div>
      <div class="flex-1">
        <slot />
      </div>
      <div class="w-64">
        567
      </div>
    </div>
  </div>
</template>

<style lang="less" scoped></style>
