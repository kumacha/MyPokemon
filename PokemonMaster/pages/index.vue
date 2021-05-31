<template>
  <v-container>
    <v-row>
      <v-col v-for="(pokemon, index) in pokemons" :key="index" md="2">
        <!-- <v-img src="~/assets/images/001.png"></v-img> -->
        <!-- <v-img :src="require(pokemon.src.normal)"></v-img> -->
        <v-img :src="pokemon.src.normal"></v-img>
        <h1>{{ pokemon.name }}</h1>
        <h1>{{ pokemon.type[0] }} {{ pokemon.type[1] }}</h1>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
// import axios from 'axios'
export default {
  data() {
    return {
      pokemons: [],
    }
  },
  mounted() {
    const JSONContent = require('../data/pokemon.json')
    // console.log(JSONContent.id)
    this.pokemons = JSONContent
  },
}
</script>
