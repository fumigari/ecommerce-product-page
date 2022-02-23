import React from 'react';
import logomarca from 'src/images/logomarca.svg';
import './App.css';

function App() {
  return (
      <header className="App-header">
          <img src={logomarca}/>
          <ul className="List">
              <li className="List-item">
                  <a href=''>Collections</a>
              </li>
              <li className="List-item">
                  <a href=''>Men</a>
              </li>
              <li className="List-item">
                  <a href=''>Women</a>
              </li>
              <li className="List-item">
                  <a href=''>About</a>
              </li>
              <li className="List-item">
                  <a href=''>Contact</a>
              </li>
          </ul>
          <div>
              <img/>
              <img/>
          </div>
      </header>
  );
}

export default App;
