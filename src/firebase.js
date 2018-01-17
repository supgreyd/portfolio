import { initializeApp } from 'firebase'

const app = initializeApp({
  apiKey: "AIzaSyC59nwlJjvtUvX9NzdEGOsUkoFBHNKdOEw",
  authDomain: "portfolio-613f6.firebaseapp.com",
  databaseURL: "https://portfolio-613f6.firebaseio.com",
  projectId: "portfolio-613f6",
  storageBucket: "portfolio-613f6.appspot.com",
  messagingSenderId: "534516068743"
})

export const db = app.database()
export const messageRef = db.ref('messages')
