// src/App.js
import React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Header from './components/Header';
import Hero from './components/Hero';
import Features from './components/Features'; // Import component mới
import Footer from './components/Footer';     // Import component mới

function App() {
  return (
    <>
      <CssBaseline />
      <Header />
      <main>
        <Hero />
        <Features /> {/* Thêm component Features vào đây */}
      </main>
      <Footer /> {/* Thêm component Footer vào đây */}
    </>
  );
}

export default App;