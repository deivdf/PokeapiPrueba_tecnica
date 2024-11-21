// src/services/PokemonService.ts
import axios from 'axios';
import { PokemonSchema, type Pokemon } from '../types/type';

class PokemonService {
  async getPokemons(limit: number = 20): Promise<Pokemon[]> {
    try {
      const response = await axios.get(`https://pokeapi.co/api/v2/pokemon?limit=${limit}`);
      const results = response.data.results;

      const pokemonPromises = results.map(async (result: any) => {
        const pokemonResponse = await axios.get(result.url);
        const pokemonData = pokemonResponse.data;
        return PokemonSchema.parse(pokemonData); // Parsea con Zod
      });

      return Promise.all(pokemonPromises);
    } catch (error: any) {
      throw new Error(`Error fetching Pokemons: ${error.message}`);
    }
  }


  async getPokemonById(id: number): Promise<Pokemon> {
    try {
       const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`);
       return PokemonSchema.parse(response.data);
    } catch (error: any) {
        throw new Error(`Error fetching Pokemon with ID ${id}: ${error.message}`);
    }
  }
}

export default new PokemonService();