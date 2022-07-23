import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { App, serviceWorker } from './app';

import 'react-dates/initialize';
import 'react-dates/lib/css/_datepicker.css';

// This is where the magic happens. React renders our App component
// inside the div with the id "root"

// Import the functions you need from the SDKs you need
import firebase from "firebase/compat/app";
import { getAnalytics } from "firebase/analytics";
import 'firebase/compat/auth';
//import * as firebase from "firebase/app";
//import "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries


// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyArH_vqRQQu93ShsMPMG3RwIMZ1KGhrnrA",
  authDomain: "restaurant-reservations-c1db6.firebaseapp.com",
  projectId: "restaurant-reservations-c1db6",
  storageBucket: "restaurant-reservations-c1db6.appspot.com",
  messagingSenderId: "944585250118",
  appId: "1:944585250118:web:993e2e8b01683ec1374147",
  measurementId: "G-K5KC4S772X"
};

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

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
