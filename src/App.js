import React from 'react';
import logo from './logo.svg';
import './App.css';
import Home from './components/home.jsx'
import Header from './components/header'
import Footer from './components/footer'
import Test from './components/test.jsx'


function App() {
  return (
    <div className="App">
      <Header />
      {/* <Test /> */}
      <Home />
      <Footer />
    </div>
  );
}

export default App;
