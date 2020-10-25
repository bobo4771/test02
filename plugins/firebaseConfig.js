import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

// Initialize Cloud Firestore through Firebase
if (!firebase.apps.length) {
  const firebaseConfig = {
    apiKey: 'AIzaSyDuutIGJfnQQp5dxbe_EoE6FDcA3w_NDTI',
    authDomain: 'test01-2db5f.firebaseapp.com',
    databaseURL: 'https://test01-2db5f.firebaseio.com',
    projectId: 'test01-2db5f',
    storageBucket: 'test01-2db5f.appspot.com',
    messagingSenderId: '568307594134',
    appId: '1:568307594134:web:245e24d9df3b0caa0c23b7',
    measurementId: 'G-THXR1VZZDH',
  }
  firebase.initializeApp(firebaseConfig)
}

export const db = firebase.firestore()
