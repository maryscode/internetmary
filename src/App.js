import React, { useState, useEffect } from 'react';
import './styles/styles.scss';
import Background from  './components/Background/Background.js';
import Nav from  './components/Nav/Nav.js';
import Footer from  './components/Footer/Footer.js';
import Portfolio from  './components/Portfolio/Portfolio.js';
import chevron from  './images/chevron.svg';


function App() {
  const [currentScreen, setCurrentScreen] = useState('home');
  const [initialLoad, setInitialLoad] = useState(true);
  const [showMore, setShowMore] = useState(false);
  

  const handleNavClick = (e) => {
    window.scrollTo({ top: 0});
    if (e === 'portfolio'){
      setInitialLoad(false)
    }
    setCurrentScreen(e);
  }

  const handleClickMore = () => {
    setShowMore(!showMore);
  }

  return (
    <div className={`App ${currentScreen}`}>
      <Nav currentScreen={currentScreen} onMenuClick={setCurrentScreen} setInitialLoad={setInitialLoad} />
      
      {currentScreen !== 'portfolio' && (
        <Background bgClass={'home'} />  
      )}
        
        {currentScreen !== 'portfolio' && (
          <div id="hello" className={initialLoad ? 'initialLoad' : 'loaded'}>
            
            <h1 onClick={(e) => {handleNavClick('about')}}>
                  <span>
                    <span>M</span>
                    <span>a</span>
                    <span>r</span>
                    <span>y</span>
                  </span> 
                  <span>Chan</span>
            </h1>
            <p className="animate1">Creative and user-focused full-stack developer. 10+ years of experience. </p>
              <div className="animate2 flex-center">
                <button className="btn" onClick={(e) => {handleNavClick('about')}} >About</button>
                <button className="btn" onClick={(e) => {handleNavClick('portfolio')}} >Portfolio</button>
              </div>

            {currentScreen === 'about' && (             
              <div className="content animateFadeInDelay">
                <h2>Hello, I'm Mary.</h2>
                


                <p>I'm a meticulous and resourceful front-end developer based in SF, passionate about exploring the creative side of programming and bringing ideas to life. My mottos are: "Figure it out" and, often at the expense of sleep, "It can be better."</p>
                <p>With a decade of experience across diverse projects, I excel under pressure, adapt well to team dynamics, and continuously learn new technologies, often discerning lasting innovations from passing trends. I believe in a strong foundation in the fundamentals of HTML5, CSS, and JavaScript—I see everything else as a flavor of libraries and tools for different use cases. A perfectionist at heart, I work tirelessly to stay true to the design and ensure that the user experience is effortless and accessible. My primary goal is to create a pleasant, engaging, and seamless user experience.

                </p>

                <p>When I'm not coding, I can be found <a href="https://stringsmagazine.com/a-bow-of-humility-setting-aside-my-pride-helped-embrace-my-childlike-enthusiasm-for-music/" target='_blank'>playing the violin</a> with my chamber ensemble, going on a run,  deep-diving into a curiosity on YouTube and Wiki, or eating a pizza.</p>

              <p><button className={`toggleLink ${showMore ? 'less' : 'more'}`} onClick={handleClickMore}>
                {showMore ? 'Less on my background' : 'More on my background'} <img src={chevron} />
              </button></p>
            
            {showMore && (
              <div className="">
                <h3>My Journey</h3>
                <p>Coding started off as a hobby back when websites were made with tables and internet connection would get interrupted with a phone call. As a kid, I built a website to show off my cartoon drawings. As a teenager, I coded websites to support my outlet for creative writing—only to discover later that my true creative drive came from coding itself. With the help of online tutorials and strict parents who kept me home with nothing else to do, I honed my skills and embraced the motto: "Figure it out." 

                </p>
                <p>My career in programming started in 2008 at a digital consultancy in Palo Alto. Since then, I've tackled a diverse array of projects, from coding apps and websites to setting up build tools and templates for junior developers. I've explored working with corporate teams to build large-scale projects, independently designing and developing websites as my own agency, and hitting the ground running with scrappy, shoot-from-the-hip start-ups. It didn't matter under what environment, once I started coding, my goals were always the same: make sure it looks good, works on every major browser, and write code in such a way so that my future self won't hate me (i.e. organized, self-evident, and scalable).
                </p>

                <p>I am truly excited for the future of technology and optimistic about the fresh ideas of the generations to come. </p>

                  <h3>Website Details</h3>
                  <p>This site was proudly developed in a few days with React and SCSS. The designed is based on my aura portrait. </p>

              </div>
            )}
            

                <div className="flex-start mt-40 ml-0">
                  <button className="btn ml-0" onClick={(e) => {handleNavClick('portfolio')}} >Portfolio</button>
                  <a className="btn" target="_blank" href="https://www.linkedin.com/in/chanmary">LinkedIn</a>
                </div>                
                
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
