<template>
  <v-container>
    <v-row>
      <v-form v-model="valid"
        ><v-text-field
          v-model="keyword"
          :counter="10"
          label="Pokemon Name"
          required
        ></v-text-field>
      </v-form>
    </v-row>
    <v-row>
      <v-col v-for="pokemon in filteredPokemons" :key="pokemon.id" md="2">
        <!-- <v-img src="~/assets/images/001.png"></v-img> -->
        <!-- <v-img :src="require(pokemon.src.normal)"></v-img> -->
        <v-card
          ><v-img :src="pokemon.src.normal"></v-img>
          <v-card-title>{{ pokemon.name }}</v-card-title>
          <v-card-subtitle
            >{{ pokemon.type[0] }} {{ pokemon.type[1] }}</v-card-subtitle
          >
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
// import axios from 'axios'
export default {
  data() {
    return {
      valid: true,
      keyword: '',
      pokemons: [],
    }
  },
  computed: {
    filteredPokemons() {
      const pokemons = []
      for (const i in this.pokemons) {
        const pokemon = this.pokemons[i]

        if (pokemon.name.includes(this.keyword)) {
          pokemons.push(pokemon)
        }
      }
      return pokemons
    },
  },
  mounted() {
    const JSONContent = require('../data/pokemon.json')
    this.pokemons = JSONContent
  },
}
</script>
