<template>
  <div v-if="show" class="fixed  inset-0 flex items-center justify-center z-50 bg-gray-800 bg-opacity-50">
    <div class="bg-slate-300 rounded-lg p-8 w-96">
      <button @click="closeModal" class="top-2 right-2 text-slate-100 hover:text-red-700 bg-slate-900 hover:bg-slate-200 pl-5 py-3 pr-5 rounded-full shadow-xl">X</button>
      <img :src="pokemon?.sprites.front_default" :alt="pokemon?.name" class="w-full h-auto mb-4">
      <div class="transform hover:-translate-y-1 hover:scale-105 hover:shadow-lg transition duration-300 ease-in-out bg-slate-50 hover:bg-slate-100 shadow-xl font-bold py-2 px-4 rounded">
          <h2 class="text-2xl font-bold mb-10 text-center">{{ pokemon?.name }}:</h2>
          <p v-if="pokemon" class="font-semibold ml-4">ID: {{ pokemon.id }}</p>
          <p v-if="pokemon" class="font-semibold  ml-4">Tipos: {{ pokemon.types.map(type => type.type.name).join(', ') }}</p>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
//se importan los types de la aplicación y las definiciones de los componentes
import { defineComponent, PropType } from 'vue';
import type { Pokemon } from '../types/type';

//se definen los componentes de el modal y sus funciones para cerrarlo

export default defineComponent({
    props: {
        show:{
            type: Boolean,
            required: true,
        },
        pokemon: {
            type: Object as PropType<Pokemon | null>,
            default: null,
        }
    },
    emits: ['close-modal'],

  setup(props, { emit }) {
    console.log(props.pokemon)
    const closeModal = () => {
       emit('close-modal')
    }

    return {
      closeModal
    };
  },
});

</script>
