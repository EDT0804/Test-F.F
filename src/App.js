import React from 'react';
import Navbar from './components/Navbar';
import Kalkulatori from './components/Kalkulatori.js';

function App() {
  let component;
  switch (window.location.pathname) {
    case "/":
      component = <sufsk />;
      break;
    case "/kalkulatori":
      component = <Kalkulatori />;
      break;
    default:
      component = null;
  }

  return (
    <>
      <Navbar />
      <div className="container">{component}</div>
    </>
  );
}

export default App;
