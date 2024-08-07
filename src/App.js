import React, { useState } from 'react';
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
        <Background bgClass={'home'} currentScreen={currentScreen} />  
      )}
        
        {currentScreen !== 'portfolio' && (
          <div id="hello" className={initialLoad ? 'initialLoad' : 'loaded'}>
            
            <h1 onClick={(e) => {handleNavClick('about')}}>
                  <span>
                    Mary
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
                <p>I'm a front-end developer. I love exploring the creative aspect of programming and bringing ideas to life.  My development mottos are: "Figure it out" and, often at the expense of sleep, "It can be better."</p>
                <p>Having spent over a decade in the industry, I continually learn new technologies and have to discern lasting innovations from passing trends. Above all, I believe in having a strong foundation in the fundamentals of HTML5, CSS, and JavaScript&mdash;everything else is a flavor of libraries and tools for different use cases.</p>
                <p>A perfectionist at heart, I work tirelessly to stay true to the design and ensure that the user experience is effortless and accessible. My primary goal is to create a pleasant and engaging digital interaction.</p>

                <p>When I'm not coding, I can be found <a href="https://stringsmagazine.com/a-bow-of-humility-setting-aside-my-pride-helped-embrace-my-childlike-enthusiasm-for-music/" target='_blank' rel="noreferrer">playing the violin</a> with my chamber ensemble, going on a run,  deep-diving into a curiosity on YouTube and Wiki, or eating a pizza.</p>

              <p className='flex-end'><button className={`toggleLink ${showMore ? 'less' : 'more'}`} onClick={handleClickMore}>
                {showMore ? 'Less on my background' : 'More on my background'} <img src={chevron} />
              </button></p>
            
            {showMore && (
              <div className="sm-txt">
                <h3>My Coding Journey</h3>
                <p>Coding started off as a hobby back when websites were made with tables. I saw building websites as a means to an end. As a kid, I built a website to exhibit my cartoon drawings. As a teenager, I customized blogs to showcase my creative writing. With the help of online tutorials (and strict parents who kept me home with nothing else to do), I honed my coding skills and embraced the motto: "Figure it out." </p>
                  
                <p>I blogged and built out my website religoiusly, gaining a fan base at an early age. But I didn't quite understand if it was the writing I loved, or if the real joy came from coding the platform that allowed me to write. At the time, with so few female developers, identifying as a programmer or majoring in computer science felt out of reach. I assumed it was the writing I loved and pursued an English major. However, in every job I took and organization I joined, I would somehow end up behind a computer, working on their website. It eventually became clear that my true creative passion was in the coding itself. </p>
                
                <p>My first official position as a programmer began in 2008 at a digital consultancy in Palo Alto.
                   Since then, I've tackled a diverse array of projects and explored different team and company sizes. I've been an individual contributer at a corporation, a one-person agency handling every aspect of development and administration. I've also hit the ground running with scrappy, shoot-from-the-hip start-ups. However, no matter the environment, once I start coding, my goals are always the same: make sure it looks good, works on every major browser, and write code in such a way so that my future self won't hate me (i.e. organized, self-evident, and scalable).
                </p>

                <p>Today, I am seeking to work with forward-thinking designers and meticulous engineers to build a world class product that will positively impact culture and enhance lifestyle. I care about the work I do and the people I work with&mdash;I want to refine both the user experience and the development workflow.</p>
                  
                  <p>I am excited for the future of technology and optimistic about the fresh ideas of the generations to come.</p>
                

                  <h3>Website Details</h3>
                  <p>This site was proudly developed in a few days with React and SCSS. The designed is based on my aura portrait. </p>

              </div>
            )}
            

                <div className="flex-start mt-40 ml-0">
                  <button className="btn ml-0" onClick={(e) => {handleNavClick('portfolio')}} >Portfolio</button>
                  <a className="btn" target="_blank" href="https://www.linkedin.com/in/chanmary" rel="noreferrer">LinkedIn</a>
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
