<template>
  <div class="pokemon-cart">
    <h2>My Pokémon Collection</h2>
    <div class="pokemon-container">
      <div v-for="pokemon in pokemonStore.collection" :key="pokemon.name" class="pokemon-item">
        <div class="pokemon-info">
          <v-img :src="pokemon.img" alt="Pokemon Image" class="pokemon-image"></v-img>
          <div class="pokemon-details">
            <h3 class="pokemon-name">{{ pokemon.name }}</h3>
            <span @click="removeFromCollection(pokemon)" class="delete-button">
              🗑
            </span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.pokemon-cart {
  padding: 20px;
  border: 1px solid #ddd;
  border-radius: 4px;
  background-color: #f9f9f9;
}

.pokemon-container {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}

.pokemon-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 10px;
  text-align: center;
  width: 150px;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
  border: 1px solid #ddd;
  border-radius: 4px;
  padding: 10px;
}

.pokemon-image {
  width: 150px;
  height: 120px;
  object-fit: cover;
  margin-right: 10px;
}

.pokemon-info {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.pokemon-details {
  display: flex;
  align-items: center;
}

.pokemon-name {
  margin-right: 10px;
}

.delete-button {
  cursor: pointer;
  font-size: 20px;
  line-height: 1;
  padding: 4px;
  background-color: red;
width: 24px;
  height: 24px;
  border-radius: 50%;
}
</style>

<script setup lang="ts">
import { usePokemonStore } from '@/store';

const pokemonStore = usePokemonStore();

function removeFromCollection(pokemon) {
  pokemonStore.removeFromCollection(pokemon);
}
</script>
