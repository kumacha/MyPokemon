/* eslint-disable no-console */
<template>
  <v-container>
    <p>お気に入りポケモンのページ</p>
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
      favorites: [],
      pokemons: [],
    }
  },
  mounted() {
    const that = this
    const db = firebase.firestore()
    const dbFavorites = db.collection('favorites').orderBy('createdAt', 'desc')
    dbFavorites.get().then((snapshot) => {
      snapshot.forEach((doc) => {
        const favorites = doc.data()
        that.pokemons = [
          ...that.pokemons,
          {
            id: favorites.id,
            name: favorites.name,
            type: favorites.type,
            srcIcon: favorites.srcIcon,
            srcNormal: favorites.srcNormal,
            srcSmall: favorites.srcSmall,
            createdAt: favorites.createdAt,
            updatedAt: favorites.updatedAt,
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
    addParty(pokemon) {
      const db = firebase.firestore()
      const dbParty = db.collection('party')
      const timestamp = firebase.firestore.Timestamp.now()
      dbParty.get().then((snap) => {
        const size = snap.size
        if (size < 6) {
          dbParty
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
              console.log(size)
            })
            .catch((err) => {
              alert(err)
            })
          alert(pokemon.name + 'を手持ちに入れました。')
        } else {
          alert('手持ちがいっぱいです。')
        }
      })
    },
  },
}
</script>
