<template>
  <v-container>
    <v-row>
      <v-img :src="pokemon.srcNormal"></v-img>
    </v-row>
    <v-row
      ><v-col
        ><p>No.{{ pokemon.id }}</p></v-col
      >
      <v-col
        ><p>名前：{{ pokemon.name }}</p></v-col
      ></v-row
    >
    <v-row
      ><v-col
        ><p>タイプ：{{ pokemon.type[0] }} {{ pokemon.type[1] }}</p></v-col
      ></v-row
    >
    <v-row>
      <v-col
        ><v-btn style="color: #ff0080" outlined @click="addFavorite(pokemon)"
          >お気に入りに追加</v-btn
        ></v-col
      >
      <v-col
        ><v-btn style="color: #2d8c3c" outlined>手持ちに加える</v-btn></v-col
      >
    </v-row>
    <v-row
      ><v-btn color="primary" block outlined @click="goBack()"
        >戻る</v-btn
      ></v-row
    >
  </v-container>
</template>

<script>
import axios from 'axios'
import firebase from '~/plugins/firebase'
export default {
  data() {
    return {
      id: this.$route.params.id,
      pokemon: {
        id: '',
        name: '',
        type: [],
        srcNormal: '',
        srcSmall: '',
        srcIcon: '',
      },
    }
  },
  mounted() {
    axios
      .get('../pokemon.json')
      .then((response) => {
        const n = this.$route.params.id - 1
        // eslint-disable-next-line no-console
        console.log(n)
        // 図鑑番号操作
        if (response.data[n].id < 10) {
          response.data[n].id = '00' + response.data[n].id
        } else if (response.data[n].id < 100) {
          response.data[n].id = '0' + response.data[n].id
        }
        console.log(n)
        // JSONをオブジェクトに置き換えるよ
        this.pokemon.id = response.data[n].id
        this.pokemon.name = response.data[n].name
        this.pokemon.type = response.data[n].type
        this.pokemon.srcNormal = response.data[n].src.normal
        this.pokemon.srcSmall = response.data[n].src.small
        this.pokemon.srcIcon = response.data[n].src.icon
      })
      .catch((err) => {
        console.log('エラー:' + err)
      })
  },
  methods: {
    goBack() {
      this.$router.go(-1)
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
  },
  // mounted() {
  //   const JSONContent = require('../data/pokemon.json')
  //   this.pokemons = JSONContent
  // },
}
</script>
