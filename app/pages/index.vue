/* eslint-disable no-console */
<template>
  <div>
    <v-btn @click="login()">ログイン</v-btn>
    <SearchPlace />
    <PokemonArray />
  </div>
</template>

<script>
import firebase from '~/plugins/firebase'
import PokemonArray from '~/components/PokemonArray.vue'
import SearchPlace from '~/components/SearchPlace.vue'
export default {
  components: {
    PokemonArray,
    SearchPlace,
  },
  methods: {
    login() {
      firebase.auth().onAuthStateChanged(async (user) => {
        // 未ログイン時
        if (!user) {
          // 匿名ログインする
          firebase.auth().signInAnonymously()
          console.log('ログインしました。')
        }
        // ログイン時
        else {
          // ログイン済みのユーザー情報があるかをチェック
          const dbUser = await firebase
            .firestore()
            .collection('users')
            .doc(user.uid)
            .get()
          if (!dbUser.exists) {
            // Firestore にユーザー用のドキュメントが作られていなければ作る
            await dbUser.ref.set({
              userId: user.uid,
              userName: 'テストユーザー',
              createdAt: firebase.firestore.Timestamp.now(),
            })
            console.log('ユーザー登録しました。')
          }
        }
      })
    },
  },
}
</script>
