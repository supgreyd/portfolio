import { initializeApp } from 'firebase'

const app = initializeApp({
  apiKey: "AIzaSyDXxHj5WzNwFKCLKZ4Aei-uTYf7lMxxVLc",
  authDomain: "konstantinbozhyk.firebaseapp.com",
  databaseURL: "https://konstantinbozhyk.firebaseio.com",
  projectId: "konstantinbozhyk",
  storageBucket: "konstantinbozhyk.appspot.com",
  messagingSenderId: "727988542465"
})

export const db = app.database()
export const messageRef = db.ref('messages')

