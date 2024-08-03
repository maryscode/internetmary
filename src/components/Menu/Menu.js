import React, { useState, useEffect } from 'react';
import styles from './Menu.module.scss';
import resume from '../../downloads/MaryChan_FrontEnd_Resume.pdf';

export default function Menu({menuClass, currentScreen, onMenuClick, setIsOpen}){
    const [showToolTip, setShowToolTip] = useState(false);
    
    const handleOnClick = (e) => {
        window.scrollTo(0,0);
        onMenuClick(e);
        setIsOpen(false)
    }

    useEffect(() => {
        if (showToolTip) {
          const timer = setTimeout(() => {
            setShowToolTip(false);
          }, 1500); 
    
          return () => clearTimeout(timer); // Cleanup the timer on component unmount or if isActive changes
        }
      }, [showToolTip]);
      
      
    const handleEmail = () => {
        navigator.clipboard.writeText('maryschan@gmail.com').then(() => {
            setShowToolTip(true);

          }).catch((err) => {
            console.error('Could not copy text: ', err);
          });
    }

    return(
        <ul className={`${styles.menu} ${menuClass}`}>
            <li className={currentScreen === 'home' ? styles.active : ''}><button onClick={(e) => {handleOnClick('home')}}>Home</button></li>
            <li className={currentScreen === 'about' ? styles.active : ''}><button onClick={(e) => {handleOnClick('about')}}>About</button></li>
            <li className={currentScreen === 'portfolio' ? styles.active : ''}><button onClick={(e) => {handleOnClick('portfolio')}}>Portfolio</button></li>
            <li className={currentScreen === 'resume' ? styles.active : ''}><a href={resume} target='_blank' rel="noreferrer">Resume</a></li>
            <li>
                <a href="mailto:maryschan@gmail.com" onClick={handleEmail}>
                    Contact Mary
                </a>
                <span className={showToolTip ? styles.show : styles.hide }>Email copied to clipboard!</span>
            </li>
        </ul> 
    )
}