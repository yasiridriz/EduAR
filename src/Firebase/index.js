import firebase from "firebase/app";
import "firebase/storage";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD8p_GaIouLgXNymFMyCWM7KglBwuhfD3s",
  authDomain: "eduar-e8265.firebaseapp.com",
  databaseURL: "https://eduar-e8265.firebaseio.com",
  projectId: "eduar-e8265",
  storageBucket: "eduar-e8265.appspot.com",
  messagingSenderId: "37522154283",
  appId: "1:37522154283:web:465b3937f262c337e39b6e"
};

// Initialize Firebase

firebase.initializeApp(firebaseConfig);

const storage = firebase.storage();

export { firebase, storage as default };
