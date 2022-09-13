<script setup>
</script>

<template>
  <div class="flex flex-col justify-center items-center">  
    <h1 class="font-sans text-center my-9 font-bold text-2xl md:text-5xl">Anisong Playlist Maker</h1>
    <p class="text-center mb-5">Use this tool to create Spotify playlists based on your MyAnimeList entries.</p>
    <img src="../assets/mio.png" alt="" class="object-cover w-full max-w-[80%] md:max-w-[45%]">
    <div class="w-24 h-12 text-center rounded mx-auto mb-5 py-3 bg-gray-600 hover:bg-gray-700 active:bg-gray-800">
      <button class="text-white"><RouterLink to="/auth">Start here</RouterLink></button>
    </div>
  </div>
</template>
