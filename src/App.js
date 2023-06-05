// App.js
import React from 'react';
import Header from './pages/Header.js';
import SufskSection from './pages/SufskSection.js';
import UshtrimetSection from './pages/UshtrimetSection.js';
import KalkulatoriTFSection from './pages/KalkulatoriTFSection.js';

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
