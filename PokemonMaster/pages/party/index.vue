/* eslint-disable no-console */
<template>
  <v-container>
    <p>手持ちポケモンのページ</p>
    <v-row>
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
          ><v-img :src="pokemon.srcNormal"></v-img>
          <v-card-title>{{ pokemon.name }}</v-card-title>
          <v-card-subtitle v-if="pokemon.type.length == 1">{{
            pokemon.type[0]
          }}</v-card-subtitle>
          <v-card-subtitle v-else
            >{{ pokemon.type[0] }}・{{ pokemon.type[1] }}</v-card-subtitle
          >
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn icon @click.prevent @click="addFavorite(pokemon)">
              <v-icon>mdi-heart</v-icon>
            </v-btn>
            <v-btn icon @click.prevent @click="addParty(pokemon)"
              ><v-icon>mdi-briefcase-plus-outline</v-icon></v-btn
            >
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
// import axios from 'axios'
import firebase from '~/plugins/firebase'
export default {
  data() {
    return {
      keyword: '',
      party: [],
      pokemons: [],
    }
  },
  mounted() {
    const that = this
    const db = firebase.firestore()
    const dbParty = db.collection('party').orderBy('createdAt', 'desc')
    dbParty.get().then((snapshot) => {
      snapshot.forEach((doc) => {
        const party = doc.data()
        that.pokemons = [
          ...that.pokemons,
          {
            id: party.id,
            name: party.name,
            type: party.type,
            srcIcon: party.srcIcon,
            srcNormal: party.srcNormal,
            srcSmall: party.srcSmall,
            createdAt: party.createdAt,
            updatedAt: party.updatedAt,
          },
        ]
      })
    })
  },
  methods: {
    toPokemon() {
      this.$router.push(`/pokemons/${this.pokemon.id}`)
    },
    toSearch() {
      this.$router.push({ name: 'keyword', query: { name: this.keyword } })
    },
    addFavorite(pokemon) {
      const db = firebase.firestore()
      const dbFavorites = db.collection('favorites')
      const timestamp = firebase.firestore.Timestamp.now()
      dbFavorites.get().then((snap) => {
        const size = snap.size
        console.log(size)
      })
      dbFavorites
        .add({
          id: pokemon.id,
          name: pokemon.name,
          type: pokemon.type,
          srcIcon: pokemon.srcIcon,
          srcNormal: pokemon.srcNormal,
          srcSmall: pokemon.srcSmall,
          createdAt: timestamp,
          updatedAt: timestamp,
        })
        .then((ref) => {
          console.log('add ID :', ref.id)
        })
        .catch((err) => {
          alert(err)
        })
      alert(pokemon.name + 'をお気に入りに入れました。')
    },
    addParty() {
      console.log('手持ちに追加しました。')
    },
  },
}
</script>
