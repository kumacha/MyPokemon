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
        >戻る</v-btn
      ></v-row
    >
  </v-container>
</template>

<script>
import axios from 'axios'
export default {
  data() {
    return {
      id: this.$route.params.id,
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
      .get('../pokemon.json')
      .then((response) => {
        console.log(response.data)
        const n = this.$route.params.id - 1
        console.log(n)
        // 図鑑番号操作
        if (response.data[n].id < 10) {
          response.data[n].id = '00' + response.data[n].id
        } else if (response.data[n].id < 100) {
          response.data[n].id = '0' + response.data[n].id
        }
        console.log(n)
        // JSONをオブジェクトに置き換えるよ
        this.pokemons.id = response.data[n].id
        this.pokemons.name = response.data[n].name
        this.pokemons.typeFirst = response.data[n].type[0]
        this.pokemons.typeSecond = response.data[n].type[1]
        this.pokemons.srcNormal = response.data[n].src.normal
        this.pokemons.srcSmall = response.data[n].src.small
        this.pokemons.srcIcon = response.data[n].src.icon
      })
      .catch((err) => {
        console.log('エラー:' + err)
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
