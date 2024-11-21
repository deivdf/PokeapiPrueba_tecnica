<template>
  <div class="container mx-auto p-4">
    <h1 class="text-4xl font-bold mb-4 bg-cyan-500 w-full p-10  text-center">Pokédex</h1>

    <div v-if="loading" class="flex justify-center">
      <VueSpinner size="100" color="cyan" />
    </div>

    <div v-else-if="error">
      <p class="text-red-500">Error: {{ error.message }}</p>
    </div>

    <div v-else class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
      <PokemonCard v-for="pokemon in pokemons" :key="pokemon.id" :pokemon="pokemon" @open-modal="onOpenModal" />
    </div>

    <PokemonModal :show="showModal" :pokemon="selectedPokemon" @close-modal="onCloseModal" />
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, onMounted } from 'vue';
import PokemonCard from './components/Cards.vue';
import PokemonModal from './components/Modal.vue';
import type { Pokemon } from './types/type';
import PokemonService from './services/RecipeServices';
import {VueSpinner} from 'vue3-spinners';

export default defineComponent({
  components: {
    VueSpinner,
    PokemonCard,
    PokemonModal

  },
  setup() {
    const pokemons = ref<Pokemon[]>([]);
    const loading = ref(true);
    const error = ref<Error | null>(null);
    const selectedPokemon = ref<Pokemon | null>(null);
    const showModal = ref(false);
    const onOpenModal = (pokemon: Pokemon) =>{
        selectedPokemon.value = pokemon
        showModal.value = true
    }

    const onCloseModal = () =>{
        showModal.value = false
        selectedPokemon.value = null
    }


    const fetchPokemons = async () => {
      try {
        loading.value = true;
        pokemons.value = await PokemonService.getPokemons(); // Usa el servicio
      } catch (err: any) {
        error.value = err;
      } finally {
        loading.value = false;
      }
    };

    onMounted(fetchPokemons);

    return {
      pokemons,
      loading,
      error,
      selectedPokemon,
      showModal,
      onOpenModal,
      onCloseModal
    };
  },
});
</script>