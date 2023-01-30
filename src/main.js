import App from './App.vue'
import { createApp } from 'vue'
import { registerPlugins } from '@/plugins'

import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyDeTy4Bcn6B6fnrgGvPmvr6rZN4q0TLtgA",
    authDomain: "twitter-5139d.firebaseapp.com",
    projectId: "twitter-5139d",
    storageBucket: "twitter-5139d.appspot.com",
    messagingSenderId: "1022084560214",
    appId: "1:1022084560214:web:5b684ed708033888fd92f7",
    measurementId: "G-CSP6K10KN3"
  };

// Initialize Firebase
const appFirebase = initializeApp(firebaseConfig);


// Initialize Firebase Authentication and get a reference to the service
const firebaseAuth = getAuth(appFirebase);
console.log('firebaseAuth', firebaseAuth);

const app = createApp(App)

registerPlugins(app)

app.mount('#app')
