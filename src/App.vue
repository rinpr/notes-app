<script setup lang="ts">
import NoteCard from "./components/NoteCard.vue";
</script>

<template>
  <div class="min-h-[100vh] bg-dark-900 grid grid-cols-3 gap-2">
    <NoteCard />
    <NoteCard />
    <NoteCard />
    <NoteCard />
  </div>
</template>

<style scoped>
  @import url('https://fonts.googleapis.com/css2?family=Roboto&display=swap');
  body {
    font-family: 'Roboto', sans-serif;
    margin: 0;
  }
</style>
