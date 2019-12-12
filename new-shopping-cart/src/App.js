import React, { useEffect, useState } from 'react';
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

const App = () => {
  const [data, setData] = useState({});
  const products = Object.values(data);
  useEffect(() => {
    const fetchProducts = async () => {
      const response = await fetch('./data/products.json');
      const json = await response.json();
      setData(json);
    };
    fetchProducts();
  }, []);

  return (
    <ul>
      {products.map(product => <li key={product.sku}>{product.title}</li>)}
    </ul>
  );
};

export default App;