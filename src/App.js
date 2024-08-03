import React, { useState, useEffect } from 'react';
import './styles/styles.scss';
import Background from  './components/Background/Background.js';
import Nav from  './components/Nav/Nav.js';
import Footer from  './components/Footer/Footer.js';
import Portfolio from  './components/Portfolio/Portfolio.js';


function App() {
  const [currentScreen, setCurrentScreen] = useState('home');
  const [initialLoad, setInitialLoad] = useState(true);
  
  const handlePortfolioClick = (event) => {
    setInitialLoad(false)
  }
  const handleNavClick = (e) => {
    setCurrentScreen(e);
  }

  useEffect(() => {
    const timer = setTimeout(() => {
      setInitialLoad(false);
    }, 5000); 

    return () => clearTimeout(timer); 
  }, []);  

  return (
    <div className={`App ${currentScreen}`}>
      <Nav currentScreen={currentScreen} onMenuClick={setCurrentScreen} />
      
      {currentScreen !== 'portfolio' && (
        <Background bgClass={'home'} />  
      )}
        
        {currentScreen !== 'portfolio' && (
          <div id="hello" className={initialLoad ? 'initialLoad' : 'loaded'}>
            
            <h1 onClick={(e) => {handleNavClick('about')}}>
                  <span>Mary</span> 
                  <span>Chan</span>
            </h1>
            <p className="animate1">Creative and user-focused full-stack developer. 10+ years of experience. </p>
              <div className="animate2 flex-center">
                <button className="btn" onClick={(e) => {handleNavClick('about')}} >About Me</button>
                <button className="btn" onClick={(e) => {handleNavClick('portfolio')}} >Portfolio</button>
              </div>

            {currentScreen === 'about' && (             
              <div className="content animateFadeInDelay">
                <h2>Hello, I'm Mary.</h2>
                <p>I'm a full-stack web developer based in San Francisco. I love bringing ideas to life and solving problems with creativity.</p>
                
                {/* <p>My focus is on coding elegant and intuitive user experiences. </p> */}

<p>My goal is to help the user find what they’re looking for in a pleasant and engaging way. With a background in digital advertising, I've worked on everything from large-scale websites with a corporate team to independently designing and developing websites from the ground up. While my skillset encompasses the full stack of development, my expertise is in front-end coding and bridging the gap between design and data processing.  </p>
<p>Being in the industry for over a decade means I have to constantly learn new technologies and adapt as I go, often identifying what's a fad and what will stick around. Above all, I stand by the foundations of writing clean, organized code and paying close attention to accessibility.</p>
                <p>When I'm not coding, I can be found <a href="https://stringsmagazine.com/a-bow-of-humility-setting-aside-my-pride-helped-embrace-my-childlike-enthusiasm-for-music/" target='_blank'>playing the violin</a> with my chamber ensemble, jogging around the Presidio, working on a weekly craft project with my fellow female tech buddies, building something with my daughter, or exploring a new neighborhood with my husband.</p>
                <a className="btn" href="https://www.linkedin.com/in/chanmary">LinkedIn</a>
              </div>
            )}
          </div>
        )}
      
      { currentScreen === 'portfolio' && (
        <Portfolio />
      )}

      { currentScreen === 'portfolio' && (
        <Footer currentScreen={currentScreen} onMenuClick={setCurrentScreen} />
      )}
    </div>
  );
}

export default App;
