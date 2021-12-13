import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'; 
import React, { useState } from 'react' 
import MyTown from './components/MyTown';
import AboutMe from './/components/AboutMe';

function App() {
  // Declare a new state variable.
  const [selectedMenu, setSelectedMenu] = useState("A");
  return (
    <div className="App">
      <div class="p-5">
        <h2>
          <nav class="nav">
            <a class={selectedMenu === 'A'? "nav-link link-success" : "nav-link link-dark" } href="#" onClick={() => setSelectedMenu("A")}>About Me</a>
            <a class={selectedMenu === 'M'? "nav-link link-success" : "nav-link link-dark" } href="#" onClick={() => setSelectedMenu("M")}>My Town</a>
          </nav>
        </h2>

        <div class="col-6">
          {selectedMenu === "M"? <MyTown></MyTown> : <AboutMe></AboutMe> }
        </div>
        
        
        
      </div>

    </div>
  );
}

export default App;
