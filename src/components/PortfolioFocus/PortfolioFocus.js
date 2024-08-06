// import React, { useState } from 'react';
import styles from './PortfolioFocus.module.scss';

import monitorImg from '../../images/cleanbraille.png';
import phoneImg from '../../images/cleanbraille-mobile.png';

export default function PortfolioFocus({projectData}) {

  return (
    // <div id="portfolioFocus">
    
      <div id={styles.portfolioFocus}>
          
          <div className={styles.feature}>
            
            <div className='container'>
            <div className={` ${projectData.name === 'React Quiz' ? styles.featureImgTablet : styles.featureImgDesktop}`}>
                <div className={styles.monitor}>
                  <div className={styles.loader}></div>
                  <img src={projectData.thumbSrc} />
                </div>
              </div>
              {projectData.name !== 'React Quiz' && (
                <div className={styles.featureImgMobile}>
                  <div className={styles.loader}></div>
                  <img src={projectData.mobileSrc} alt="" />
                </div>
              )}
              <div className={styles.featureContent}>
                <h2>{projectData.name}</h2>
                <ul>
                  <li><strong>Technology:</strong> {projectData.tech}</li>
                  <li><strong>Goals and Objectives:</strong> {projectData.summary}</li>
                  <li><strong>Key Features:</strong>  {projectData.features}</li>
                  <li><strong>Challenges:</strong> {projectData.challenges}</li>
                  <li><strong>What was fun about this project: </strong> {projectData.fun}</li>
                </ul>
                <p className="flex-center"><a href={projectData.url} target='_blank' className="btn" rel="noreferrer">Launch Site</a></p> 
              </div>
            </div>
          </div>
      </div>
    
  )
}