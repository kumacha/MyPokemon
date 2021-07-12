import firebase from 'firebase'

if (!firebase.apps.length) {
  firebase.initializeApp({
    apiKey: 'AIzaSyAX9vxwFkGozBL5rzHwSc0o919YqOCfUOU',
    authDomain: 'ca-tech-challenge-store.firebaseapp.com',
    projectId: 'ca-tech-challenge-store',
    storageBucket: 'ca-tech-challenge-store.appspot.com',
    messagingSenderId: '1019884163665',
    appId: '1:1019884163665:web:4efbd17e52fe003671de70',
    measurementId: 'G-TTH6JKZVRC',
  })
}

export default firebase
export const auth = firebase.auth
