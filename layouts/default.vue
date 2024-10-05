<template>
  <div class="layout h-[100vh] px-24">
    <div class="text-[#01001e] h-full flex">
      <div class="w-64 bg-white border-r border-zinc-200">
        <AppSideLeft />
      </div>
      <div class="flex-1 overflow-auto bg-white">
        <slot />
      </div>
      <div class="w-64 bg-white">
        <AppSideRight />
      </div>
    </div>
  </div>
</template>

<style lang="less" scoped></style>
