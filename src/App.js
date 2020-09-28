import React from 'react';
import './css/app.css';
import Navbar from "./components/homeComponents/Navbar"
import MiniHeader from "./components/homeComponents/MiniHeader";
import Footer from "./components/homeComponents/Footer";


function App() {
  return (
    <div className="App">
      <MiniHeader />
      <Navbar />
      <Footer />
    </div>
  );
}

export default App;
