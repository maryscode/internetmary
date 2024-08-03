import React, { useState } from 'react';
import PortfolioFocus from '../PortfolioFocus/PortfolioFocus.js';
import PortfolioItem from '../PortfolioItem/PortfolioItem.js';
import styles from './Portfolio.module.scss';
import {portfolioData} from '../../data/portfolioData.js'

export default function Portfolio() {

    const [currentProject, setCurrentProject] = useState(null);
  return (
    <div id={styles.portfolio}>        
        <div className="container">
          <h1 className="text-center animateSlideUp">Portfolio</h1>
          <p  className="summary">With over 10 years of experience, I've built a lot of stuff. Here are a select few.</p>
        </div>
        <div id="activePortfolio" style={{scrollMarginTop: '50px'}}>
          {currentProject && <PortfolioFocus
              projectData={currentProject}
          />}
        </div>
        <div className="container">                  
          {currentProject && <h3 className='text-center'>Explore Selected Works</h3>}
          <div className={styles.portfolioIndex}>   

            {portfolioData.map(project => {
              return (
                
                <PortfolioItem
                  projectData={project}
                  onProjectClick={setCurrentProject}
                />                
              )
            })}
            

            


          </div>
        </div>
   
    </div>
  )
}