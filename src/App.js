// App.js
import React from 'react';
import Navbar from './components/Navbar.js';
import Header from './components/Header.js';
import SufskSection from './components/SufskSection.js';
import UshtrimetSection from './components/UshtrimetSection.js';
import KalkulatoriTFSection from './components/KalkulatoriTFSection.js';

function App() {
  return (
    <body className="w3-black">
      <Navbar />
      <div id="main">
        <Header />
        <SufskSection />
        <UshtrimetSection />
        <KalkulatoriTFSection />
      </div>
    </body>
  );
}

export default App;
