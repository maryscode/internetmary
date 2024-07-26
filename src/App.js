import React, { useState, useEffect } from 'react';
import './styles/styles.scss';
import Background from  './components/Background.js';
import Hello from  './components/Hello.js';
import Portfolio from  './components/Portfolio.js';


function App() {
  const [isHome, setIsHome] = useState(true);
  const [portfolio, setPortfolio] = useState(false);
  const handlePortfolioClick = (event) => {
    setIsHome(false);
  }
  return (
    <div className="App">
        <div className={`gradient ${isHome ? 'placeholder' : 'interior'}`} />  
      {isHome && (
        <Background bgClass={'home'} />  
      )}
      
      <header className="App-header">
        {isHome && (
          <div id="hello">
            <h1 className="animate3"><a href="mailto:maryschan@gmail.com"><span>Mary</span> Chan</a></h1>
            <p className="animate1">Creative and user-focused developer. 10+ years of experience. </p>

              <div className="animate3 flex-center">
                <button className="btn" onClick={handlePortfolioClick} >Portfolio</button>
                <a className="btn" href="https://www.linkedin.com/in/chanmary">LinkedIn</a>
              </div>
          </div>
        )}
      </header>
      { !isHome && (
        <Portfolio 
          onBackClick={setIsHome} 
        />
      )}
    </div>
  );
}

export default App;
