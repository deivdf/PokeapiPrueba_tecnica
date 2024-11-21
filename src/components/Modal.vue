<template>
  <div v-if="show" class="fixed inset-0 flex items-center justify-center z-50 bg-gray-800 bg-opacity-50">
    <div class="bg-white rounded-lg p-8 w-96">
      <button @click="closeModal" class="absolute top-2 right-2 text-gray-500 hover:text-gray-700">&times;</button>
      <img :src="pokemon?.sprites.front_default" :alt="pokemon?.name" class="w-full h-auto mb-4">
      <h2 class="text-2xl font-bold mb-2">{{ pokemon?.name }}</h2>
      <p v-if="pokemon">ID: {{ pokemon.id }}</p>
      <p v-if="pokemon">Tipos: {{ pokemon.types.map(type => type.type.name).join(', ') }}</p>
      <!-- Agrega más detalles aquí -->
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType, ref } from 'vue';
import type { Pokemon } from '../types/type';


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
    const closeModal = () => {
       emit('close-modal')
    }

    return {
      closeModal
    };
  },
});

</script>