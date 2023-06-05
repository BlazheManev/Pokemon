import { defineStore } from 'pinia';
import { PokemonModel } from '@/utils/types';

export const usePokemonStore = defineStore('pokemon', {
  state: () => ({
    collection: [] as PokemonModel[],
  }),
  actions: {
    addToCollection(pokemon: PokemonModel) {
      this.collection.push(pokemon);
    },
    removeFromCollection(pokemon: PokemonModel) {
      const index = this.collection.findIndex((p) => p === pokemon);
      if (index !== -1) {
        this.collection.splice(index, 1);
      }
    },
  },
});
