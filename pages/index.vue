<template>
  <div>
    <div class="pokemon-card" v-if="pokemon">
      <div class="pokemon-info">
        <v-img
          :src="pokemon.img"
          alt="Pokemon Image"
          class="pokemon-image"
        ></v-img>
        <div class="line"></div>
        <div class="pokemon-details">
          <h3>{{ pokemon.name }}</h3>
          <p>💚 Health points: {{ pokemon.stats.hp }}</p>
          <p>🗡️Attack: {{ pokemon.stats.attack }}</p>
          <p>🛡️Defense: {{ pokemon.stats.defense }}</p>
          <p>⏩Speed: {{ pokemon.stats.speed }}</p>
        </div>
      </div>
    </div>
    <div class="button-container">
      <v-btn @click="addToCollection" class="action-button green" dark>
        <span class="emoji">➕</span> Keep
      </v-btn>
      <v-btn @click="searchNewPokemon" class="action-button blue" dark>
        <span class="emoji">🔍</span> SEARCH
      </v-btn>
    </div>
   <v-snackbar
      v-model="showSnackbar"
      timeout="3000"
      color="green"
      location="top right"
    >
      Added {{ addedPokemonName }}
    </v-snackbar>
  </div>
</template>

<style scoped>
  .pokemon-card {
    width: 600px;
    margin: 0 auto;
    border: 1px solid #ddd;
    box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
  }

  .pokemon-info {
    display: flex;
    align-items: center;
  }

  .pokemon-image {
    max-width: 150px;
    height: auto;
  }
.snackbar-top-left {
    top: 0;
    left: 0;
  }
  .line {
    width: 1px;
    height: 80px; 
    background-color: #ddd;
    margin: 0 20px; 
  }

  .pokemon-details {
    flex: 1;
  }

  .button-container {
    display: flex;
    justify-content: center;
    margin-top: 20px;
  }

  .action-button {
    margin: 0 10px;
  }

  .blue {
    background-color: rgb(11, 109, 236);
  }

  .green {
    background-color: rgb(22, 243, 22);
  }

  .emoji {
    margin-right: 5px;
    color: white;
  }
</style>

<script setup lang="ts">
  import { ref } from 'vue'
  import axios from 'axios'
  import { usePokemonStore } from '@/store'
  import { PokemonResponse, PokemonModel } from '@/utils/types'

  const pokemonStore = usePokemonStore()

  const pokemon = ref<PokemonModel | null>(null)
  const showSnackbar = ref(false)

  async function fetchRandomPokemon() {
    try {
      const randomPokemonId = Math.floor(Math.random() * 1000) + 1
      const response = await axios.get<PokemonResponse>(
        `https://pokeapi.co/api/v2/pokemon/${randomPokemonId}`
      )
      const pokemonData = response.data
      const pokemonModel: PokemonModel = {
        name: pokemonData.name,
        stats: {
          hp:
            pokemonData.stats.find((stat) => stat.stat.name === 'hp')
              ?.base_stat || 0,
          attack:
            pokemonData.stats.find((stat) => stat.stat.name === 'attack')
              ?.base_stat || 0,
          defense:
            pokemonData.stats.find((stat) => stat.stat.name === 'defense')
              ?.base_stat || 0,
          speed:
            pokemonData.stats.find((stat) => stat.stat.name === 'speed')
              ?.base_stat || 0,
        },
        mainAbility: pokemonData.abilities[0].ability.name,
        img: pokemonData.sprites.front_default,
      }

      // Check if the same Pokémon already exists in the collection
      const isDuplicate = pokemonStore.collection.some(
        (p) => p.name === pokemonModel.name
      )
      if (isDuplicate) {
        fetchRandomPokemon() // Fetch a new Pokémon if it's a duplicate
      } else {
        pokemon.value = pokemonModel
      }
    } catch (error) {
      console.error('Error fetching random Pokémon:', error)
    }
  }
let addedPokemonName = ref('');

function addToCollection() {
  if (pokemon.value) {
    const isDuplicate = pokemonStore.collection.some((p) => p.name === pokemon.value?.name);
    if (!isDuplicate) {
      pokemonStore.addToCollection(pokemon.value);
      addedPokemonName = pokemon.value.name;
      console.log(pokemon.value.name)
      console.log(addedPokemonName)
      showSnackbar.value = true;
      fetchRandomPokemon(); // Fetch a new Pokémon after adding it to the collection
    }
  }
}

  function searchNewPokemon() {
    fetchRandomPokemon()
  }

  fetchRandomPokemon()
</script>
