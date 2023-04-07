<script setup lang="ts">
import { ref } from 'vue';
import { newNote, Note } from './common.interfance';
import NoteCard from "./components/NoteCard.vue";
import NotesModal from "./components/NotesModal.vue";
import DeleteModal from "./components/deleteModal.vue";

const showModal = ref(false)
const showDeleteModal = ref(false)
const notes = ref(Array<Note>())
const selectedNote = ref(<Note>{})
const isNoteEdit = ref(false)

const openAddNoteModal = () => {
  showModal.value = true
  selectedNote.value = {} as Note
}

const updateShowModal = (e: boolean) => {
  showModal.value = e
  isNoteEdit.value = false
}

const openDeleteModal = (note: Note) => {
  selectedNote.value = {} as Note
  selectedNote.value = notes.value.find((el)=> el.id == note.id) as Note
  showDeleteModal.value = true
}

const openEditModal = (note: Note) => {
  selectedNote.value = {} as Note
  selectedNote.value = notes.value.find((el)=> el.id == note.id) as Note
  showModal.value = true
}

const updateDeleteModal = (e: boolean) => {
  showDeleteModal.value = e
}

const addNote = (note:newNote) => {
  let newnote = {
    id: notes.value.length + 1,
    title:note.title,
    point:note.point
  }
  notes.value.push(newnote)
  
}

const deleteNote = () => {
  let selectedindex = notes.value.findIndex(el => el.id == selectedNote.value.id)
  notes.value.splice(selectedindex, 1)
  selectedNote.value = {} as Note
}

const editNote = (note: Note) => {
  let selectedindex = notes.value.findIndex(el => el.id == selectedNote.value.id)
  notes.value[selectedindex] = note
  notes.value.splice(selectedindex, 1)
  selectedNote.value = {} as Note
  isNoteEdit.value = false
}
</script>

<template>
  <div class="min-h-[100vh] bg-dark-900 grid grid-cols-3 gap-2">
    <NoteCard v-for="note in notes" @showdeletemodal="openDeleteModal" @showeditmodal="openEditModal" :note="note"/>
    <font-awesome-icon :icon="['fas', 'plus-circle']" size="3x" class="text-yellow-400 fixed bottom-2 right-2" :style="{ color: '#e3c524'}" @click="openAddNoteModal"/>
    <NotesModal :open-modal="showModal" :note="selectedNote" :edit="isNoteEdit" @show-modal="updateShowModal" @savenote="addNote" @editnote="editNote"/>
    <DeleteModal :open-modal="showDeleteModal" @showdeletemodal="updateDeleteModal" @delete="deleteNote"/>
  </div>
</template>

<style scoped>
  @import url('https://fonts.googleapis.com/css2?family=Roboto&display=swap');
  * {
    font-family: 'Roboto', sans-serif;
  }
  body {
    margin: 0;
  }
</style>
