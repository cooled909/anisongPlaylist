<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
<div class="flex flex-col h-screen w-screen">
  <div class='flex justify-center items-center w-full h-full bg-gray-500'>
    <div class="basis-5/6 lg:basis-2/3 xl:basis-1/3 h-2/3 md:h-[60%] lg:h-2/3 bg-white rounded-md overflow-auto">
      <RouterView />
    </div>
  </div>
</div>
</template>

