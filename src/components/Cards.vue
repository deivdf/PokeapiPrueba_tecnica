<template>
  <div class="border rounded-lg p-4 cursor-pointer bg-slate-50 shadow-2xl transform hover:-translate-y-1 hover:scale-105 hover:shadow-lg transition duration-300 ease-in-out" @click="openModal">
    <img :src="pokemon.sprites.front_default" :alt="pokemon.name" class="w-full h-auto mb-2">
    <h2 class="text-xl font-semibold text-center p-4 bg-slate-400 rounded-2xl">{{ pokemon.name }}</h2>
  </div>
</template>

<script lang="ts">
//importacion de funciones propias de vue
import { defineComponent, PropType } from 'vue';
// Importa el tipo
import type { Pokemon } from '../types/type'; 

export default defineComponent({
  props: {
    pokemon: {
      type: Object as PropType<Pokemon>,
      required: true,
    },
  },
  emits: ['open-modal'],
  setup(props, { emit }) {
    const openModal = () => {
      // Emite el pokemon al padre
      emit('open-modal', props.pokemon); 
    };

    return {
      openModal,
    };
  },
});
</script>