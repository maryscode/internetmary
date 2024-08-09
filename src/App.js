import React, { useState } from 'react';
import './styles/styles.scss';
import Background from  './components/Background/Background.js';
import Nav from  './components/Nav/Nav.js';
import Footer from  './components/Footer/Footer.js';
import Portfolio from  './components/Portfolio/Portfolio.js';
// import chevron from  './images/chevron.svg';

function App() {

  const [currentScreen, setCurrentScreen] = useState('home');
  const [initialLoad, setInitialLoad] = useState(true);
 //const [showMore, setShowMore] = useState(false);
  

  const handleNavClick = (e) => {
    window.scrollTo({ top: 0});
    if (e === 'portfolio'){
      setInitialLoad(false)
    }
    setCurrentScreen(e);
  }

  // const handleClickMore = () => {
  //   setShowMore(!showMore);
  // }

  return (
    <div className={`App ${currentScreen}`}>
      <Nav currentScreen={currentScreen} onMenuClick={setCurrentScreen} setInitialLoad={setInitialLoad} />
      
      {currentScreen !== 'portfolio' && (
        <Background bgClass={'home'} currentScreen={currentScreen} />  
      )}
        
        {currentScreen !== 'portfolio' && (
          <div id="hello" className={initialLoad ? 'initialLoad' : 'loaded'}>
            
            <h1 onClick={(e) => {handleNavClick('about')}}>
                  <span>Mary</span> 
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

                <p>I'm a full-stack developer with expertise in the front-end. I love exploring the creative aspect of programming and I am committed to refining the user experience—both for the end-user interacting with the product and for the developers working with the code.</p>

                {/* <p>With a background in digital advertising, I've worked on everything from large-scale digital marketing campaigns with a corporate team to independently designing and developing websites from the ground up. No matter the environment, once I start coding, my goals are always the same: make sure it looks good, works on every major browser, and write code in such a way so that my future self won't hate me (i.e. organized, self-evident, and scalable).</p> */}

                <p>Over a decade in the industry has honed my ability to quickly learn and adapt to new technologies. Above all, I believe in having a strong foundation in the fundamentals of HTML5, CSS, and JavaScript&mdash;I see everything else as a flavor of libraries and tools for different use cases.</p>

                <p>Today, I'm seeking to focus my front-end skills on collaborating with forward-thinking designers and meticulous engineers to build a world-class product that will positively impact culture. </p>

                <p>When I'm not coding, I can be found <a href="https://stringsmagazine.com/a-bow-of-humility-setting-aside-my-pride-helped-embrace-my-childlike-enthusiasm-for-music/" target='_blank' rel="noreferrer">playing the violin</a> with my chamber ensemble, going on a run,  deep-diving into a curiosity on YouTube and Wiki, or eating a pizza.</p>

              {/* <p className='flex-end'><button className={`toggleLink ${showMore ? 'less' : 'more'}`} onClick={handleClickMore}>
                {showMore ? 'Less on my background' : 'More on my background'} <img src={chevron} />
              </button></p> */}
            
            {/* {showMore && (
              <div className="sm-txt">
                <h3>My Coding Journey</h3>
                <p>Coding started off as a hobby back when websites were made with tables. I saw building websites as a means to an end. As a kid, I built a website to exhibit my cartoon drawings. As a teenager, I customized blogs to showcase my creative writing. With the help of online tutorials (and strict parents who kept me home with nothing else to do), I honed my coding skills and kept going.</p>
                  
                <p>I blogged and built out my website religiously, gaining a fan base at an early age. But I didn't quite understand if it was the writing I loved, or if the actual fun came from buliding the platform that allowed me to write. At the time, with so few female developers, identifying as a programmer or majoring in computer science felt unrealistic and out of reach. I assumed it was the writing I loved and pursued an English major. However, in every part-time job I took and organization I joined, I would somehow end up behind a computer, working on their website. It eventually became clear that my true creative passion was in the coding itself.</p>
                
                <p>I landed my first job as a programmer in 2008 at a digital consultancy in Palo Alto.
                   Since then, I've tackled a diverse array of projects and explored different team and company sizes. However, no matter the environment, once I start coding, my goals are always the same: make sure it looks good, works on every major browser, and write code in such a way so that my future self won't hate me (i.e. organized, self-evident, and scalable).
                </p>

                <p>Today, I am seeking to work with forward-thinking designers and meticulous engineers to build a world class product that will positively impact culture. I care about the work I do and the people I work with&mdash;I want to refine both the user experience and the development workflow.</p>
                  
                  <p>I am excited for the future of technology and optimistic about the fresh ideas of the generations to come.</p>
                


              </div>
            )}
             */}
                  {/* <h3>Website Details</h3>
                  <p>This site was developed with React and SCSS. The designed is based on my aura portrait. </p> */}

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
