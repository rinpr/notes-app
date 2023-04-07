<script setup lang="ts">
import { ref } from 'vue';
import NoteCard from "./components/NoteCard.vue";
import NotesModal from "./components/NotesModal.vue";

const showModal = ref(false)

const openAddNoteModal = () => {
  showModal.value = true
}

const updateShowModal = (e: boolean) => {
  showModal.value = e
}
</script>

<template>
  <div class="min-h-[100vh] bg-dark-900 grid grid-cols-3 gap-2">
    <NoteCard/>
    <NoteCard/>
    <NoteCard/>
    <NoteCard/>
    <font-awesome-icon :icon="['fas', 'plus-circle']" size="3x" class="text-yellow-400 fixed bottom-2 right-2" :style="{ color: '#e3c524'}" @click="openAddNoteModal"/>
    <NotesModal :open-modal="showModal" @show-modal="updateShowModal"/>
  </div>
</template>

<style scoped>
  @import url('https://fonts.googleapis.com/css2?family=Roboto&display=swap');
  body {
    font-family: 'Roboto', sans-serif;
    margin: 0;
  }
</style>
