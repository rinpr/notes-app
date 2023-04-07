<template>
    <div class="min-h-[300px] max-h-[340px] rounded bg-gray-500 p-2 text-white">
        <div class="flex flex-row-reverse">
            <font-awesome-icon icon="trash" size="lg" @click="deleteNoteModal"/>
            <font-awesome-icon icon="pen-square" size="lg" class="mr-2" @click="editNoteModal"/>
        </div>
        <div>
            <h2> {{ note.title }} </h2>
            <p> {{ note.point }} </p>
        </div>

    </div>
</template>

<script setup lang="ts">
import { Note } from '../common.interfance'
import { ref, watch } from 'vue';

const props = defineProps<{
    note: Note
}>()

const title = ref("")
const point = ref("")

watch(props, ()=> {
    title.value = props.note.title
    point.value = props.note.title
})

const emit = defineEmits<{
    (e: 'showdeletemodal', value: Note): void
    (e: 'showeditmodal', value: Note): void
}>()

const deleteNoteModal = () => {
    emit('showdeletemodal', props.note)
}

const editNoteModal = () => {
    emit('showeditmodal', props.note)
}
</script>

<style scoped>

</style>