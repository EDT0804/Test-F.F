// App.js
import React from 'react';
import Navbar from './components/Navbar.js';
import Header from './pages/Header.js';
import SUFSK from './pages/SUFSK.js';
import Ushtrimet from './pages/Ushtrimet.js';
import KalkulatoriTF from './pages/KalkulatoriTF.js';

function App() {
  return (
    <body className="w3-black">
      <Navbar />
      <div id="main">
        <Header />
        <SUFSK />
        <Ushtrimet />
        <KalkulatoriTF />
      </div>
    </body>
  );
}

export default App;
