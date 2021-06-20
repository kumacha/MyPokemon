<template>
  <v-container>
    <v-row>
      <v-img :src="pokemons.srcNormal"></v-img>
    </v-row>
    <v-row
      ><v-col
        ><p>No.{{ pokemons.id }}</p></v-col
      >
      <v-col
        ><p>名前：{{ pokemons.name }}</p></v-col
      ></v-row
    >
    <v-row
      ><v-col
        ><p>
          タイプ：{{ pokemons.typeFirst }} {{ pokemons.typeSecond }}
        </p></v-col
      ></v-row
    >
    <v-row>
      <v-col
        ><v-btn style="color: #ff0080" outlined>お気に入りに追加</v-btn></v-col
      >
      <v-col
        ><v-btn style="color: #2d8c3c" outlined>手持ちに加える</v-btn></v-col
      >
    </v-row>
    <v-row
      ><v-btn color="primary" block outlined @click="goBack()"
        >全体ページに戻る</v-btn
      ></v-row
    >
  </v-container>
</template>

<script>
import axios from 'axios'
export default {
  data() {
    return {
      pokemons: {
        id: '',
        name: '',
        typeFirst: '',
        typeSecond: '',
        srcNormal: '',
        srcSmall: '',
        srcIcon: '',
      },
    }
  },
  mounted() {
    axios
      .get('pokemon.json')
      .then((response) => {
        // 図鑑番号操作
        if (response.data[0].id < 10) {
          response.data[0].id = '00' + response.data[0].id
        } else if (response.data[0].id < 100) {
          response.data[0].id = '0' + response.data[0].id
        }
        // JSONをオブジェクトに置き換えるよ
        this.pokemons.id = response.data[0].id
        this.pokemons.name = response.data[0].name
        this.pokemons.typeFirst = response.data[0].type[0]
        this.pokemons.typeSecond = response.data[0].type[1]
        this.pokemons.srcNormal = response.data[0].src.normal
        this.pokemons.srcSmall = response.data[0].src.small
        this.pokemons.srcIcon = response.data[0].src.icon
      })
      .catch((err) => {
        alert('エラー:' + err)
      })
  },
  methods: {
    goBack() {
      this.$router.go(-1)
    },
  },
  // mounted() {
  //   const JSONContent = require('../data/pokemon.json')
  //   this.pokemons = JSONContent
  // },
}
</script>
