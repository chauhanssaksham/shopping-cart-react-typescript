import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import * as firebase from 'firebase'
import 'firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyDCmI0HVABviSJVvQomiMlPVZW_tPqgfIA",
    authDomain: "shopping-cart-34be0.firebaseapp.com",
    databaseURL: "https://shopping-cart-34be0.firebaseio.com",
    projectId: "shopping-cart-34be0",
    storageBucket: "shopping-cart-34be0.appspot.com",
    messagingSenderId: "402328265200",
    appId: "1:402328265200:web:2c6f95de0c4539b6a07d35",
    measurementId: "G-TVWH0LMKV2"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
