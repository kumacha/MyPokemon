<template>
  <v-container>
    <v-row>
      <v-form v-model="valid" @submit.prevent
        ><v-text-field
          v-model="keyword"
          label="ポケモンの名前"
          @keydown.enter="toSearch()"
        ></v-text-field>
      </v-form>
      <v-btn :to="{ name: 'keyword', query: { name: keyword } }">検索</v-btn>
    </v-row>
    <v-row>
      <v-col v-for="type in types" :key="type.id">
        <v-btn :to="{ name: 'types-id', params: { id: type.name } }">{{
          type.name
        }}</v-btn>
      </v-col>
    </v-row>
    <!-- <v-row>
      <v-col
        v-for="pokemon in pokemons"
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
    </v-row> -->
  </v-container>
</template>

<script>
import axios from 'axios'
export default {
  data() {
    return {
      types: [
        { id: 1, name: 'ノーマル' },
        { id: 2, name: 'かくとう' },
        { id: 3, name: 'ひこう' },
        { id: 4, name: 'どく' },
        { id: 5, name: 'じめん' },
        { id: 6, name: 'いわ' },
        { id: 7, name: 'むし' },
        { id: 8, name: 'ゴースト' },
        { id: 9, name: 'はがね' },
        { id: 10, name: 'ほのお' },
        { id: 11, name: 'みず' },
        { id: 12, name: 'くさ' },
        { id: 13, name: 'でんき' },
        { id: 14, name: 'エスパー' },
        { id: 15, name: 'こおり' },
        { id: 16, name: 'ドラゴン' },
        { id: 17, name: 'あく' },
        { id: 18, name: 'フェアリー' },
      ],
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
        if (pokemon.type.includes(this.type)) {
          pokemons.push(pokemon)
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
    toType() {
      this.$router.push(`/types/${this.keyword}`)
    },
    filteredTypes() {
      const pokemons = []
      for (const i in this.pokemons) {
        const pokemon = this.pokemons[i]
        for (const k in this.types) {
          const type = this.types[k]
          if (pokemon.type.includes(type.name)) {
            pokemons.push(pokemon)
          }
        }
      }
      return pokemons
    },
  },
}
</script>
