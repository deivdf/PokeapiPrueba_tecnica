<template>
  <div class="border rounded-lg p-4 cursor-pointer" @click="openModal">
    <img :src="pokemon.sprites.front_default" :alt="pokemon.name" class="w-full h-auto mb-2">
    <h2 class="text-xl font-semibold">{{ pokemon.name }}</h2>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue';
import type { Pokemon } from '../types/type'; // Importa el tipo

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
      emit('open-modal', props.pokemon); // Emite el pokemon al padre
    };

    return {
      openModal,
    };
  },
});
</script>