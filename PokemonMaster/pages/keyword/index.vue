<template>
  <v-container>
    <v-row>
      <v-form v-model="valid" @submit.prevent
        ><v-text-field
          v-model="keyword"
          :label="keyword"
          :placeholder="$route.query.name"
          @keydown.enter="toSearch()"
        ></v-text-field>
      </v-form>
      <v-btn :to="{ name: 'keyword', query: { name: keyword } }">検索</v-btn>
    </v-row>
    <v-row>
      <p v-if="filteredPokemons.length == 0">検索結果は0件でした。</p>
      <p v-else>検索結果は{{ filteredPokemons.length }}件ありました。</p>
    </v-row>
    <v-row>
      <v-col
        v-for="pokemon in filteredPokemons"
        :key="pokemon.id"
        xs="6"
        sm="3"
        md="2"
        lg="2"
      >
        <v-card
          min-width="140px"
          max-width="150px"
          :to="{ name: 'pokemons-id', params: { id: pokemon.id } }"
          ><v-img :src="pokemon.src.normal"></v-img>
          <v-card-title>{{ pokemon.name }}</v-card-title>
          <v-card-subtitle v-if="pokemon.type.length == 1">{{
            pokemon.type[0]
          }}</v-card-subtitle>
          <v-card-subtitle v-else
            >{{ pokemon.type[0] }}・{{ pokemon.type[1] }}</v-card-subtitle
          >
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import axios from 'axios'
export default {
  data() {
    return {
      type: true,
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
        if (pokemon.name.includes(this.$route.query.name)) {
          pokemons.push(pokemon)
          if (pokemons.length === 0) {
            console.log('検索結果0ですよ')
          }
        }
      }
      return pokemons
    },
  },
  mounted() {
    axios
      .get('pokemon.json')
      .then((response) => {
        this.pokemons = response.data
      })
      .catch((err) => {
        console.log('エラー:' + err)
      })
  },
  methods: {
    toPokemon() {
      this.$router.push(`/pokemons/${this.pokemon.id}`)
    },
    toSearch() {
      this.$router.push({ name: 'keyword', query: { name: this.keyword } })
    },
  },
}
</script>
