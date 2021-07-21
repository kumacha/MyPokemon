import firebase, { auth } from '~/plugins/firebase'

export const strict = false

export const state = () => ({
  user: {
    uid: '',
    email: '',
  },
  loggedIn: false,
})

export const actions = {
  login({ commit }, payload) {
    auth()
      .signInWithEmailAndPassword(payload.email, payload.password)
      .then((user) => {
        console.log('成功！')
        firebase.auth().onAuthStateChanged(function (user) {
          if (user) {
            commit('getData', { uid: user.uid, email: user.email })
            console.log(user.uid)
          }
        })
      })
      .catch((error) => {
        alert(error)
      })
  },
  signInWithTwitter({ commit }) {
    return auth().signInWithPopup(new auth.TwitterAuthProvider())
  },

  signInWithFacebook({ commit }) {
    return auth().signInWithPopup(new auth.FacebookAuthProvider())
  },

  signInWithGoogle({ commit }) {
    return auth().signInWithPopup(new auth.GoogleAuthProvider())
  },

  signOut() {
    return auth().signOut()
  },
}

export const mutations = {
  getData(state, payload) {
    state.user.uid = payload.uid
    state.user.email = payload.email
  },
}
export const getters = {
  user(state) {
    return state.user
  },
  isAuthenticated(state) {
    return !!state.user
  },
}
