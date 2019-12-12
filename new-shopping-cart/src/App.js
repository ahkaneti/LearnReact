import React from 'react';
import logo from './logo.svg';
import './App.css';
import firebase from 'firebase/app';
import 'firebase/database';


const firebaseConfig = {
  apiKey: "AIzaSyBTOEmS_C2198-Zgxi1ME8nEmnVPkVC2v0",
  authDomain: "shoppingcart-dd86e.firebaseapp.com",
  databaseURL: "https://shoppingcart-dd86e.firebaseio.com",
  projectId: "shoppingcart-dd86e",
  storageBucket: "shoppingcart-dd86e.appspot.com",
  messagingSenderId: "211645572432",
  appId: "1:211645572432:web:613ea9c1dc6e9c87537855",
  measurementId: "G-98T1J5168S"
};

firebase.initializeApp(firebaseConfig);

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
