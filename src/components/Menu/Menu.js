import React, { useState, useEffect } from 'react';
import styles from './Menu.module.scss';
// import resume from '../../downloads/MaryChan_FrontEnd_Resume.pdf';

export default function Menu({menuClass, currentScreen, onMenuClick, setIsOpen, setInitialLoad}){
    const saveMsg = 'Click to copy email address';
    const [showToolTip, setShowToolTip] = useState(false);
    const [toolTipMsg, setToolTipMsg] = useState(saveMsg);
  
    useEffect(() => {
        if (showToolTip) {
          const timer = setTimeout(() => {
            setShowToolTip(false);
            setTimeout(() => {
                setToolTipMsg(saveMsg)
            }, 500); 
          }, 1500); 
          
    
          return () => clearTimeout(timer); // Cleanup the timer on component unmount or if isActive changes
        }
      }, [showToolTip]);

    const handleEmail = () => {
        navigator?.clipboard && navigator.clipboard.writeText('maryschan@gmail.com').then(() => {
          setShowToolTip(true);
          setToolTipMsg('Saved to clipboard!')
        }).catch((err) => {
          setToolTipMsg('Error saving to clipboard')
          console.error('Could not copy text: ', err);
        });
    }

    const handleOnClick = (e) => {
        window.scrollTo(0,0);
        onMenuClick(e);
        setIsOpen(false);
        setInitialLoad(false);
    }

    return (
        <ul className={`${styles.menu}`}>
            <li className={currentScreen === 'home' ? styles.active : ''}><button onClick={(e) => {handleOnClick('home')}}>Home</button></li>
            <li className={currentScreen === 'about' ? styles.active : ''}><button onClick={(e) => {handleOnClick('about')}}>About</button></li>
            <li className={currentScreen === 'portfolio' ? styles.active : ''}><button onClick={(e) => {handleOnClick('portfolio')}}>Portfolio</button></li>
            <li className={currentScreen === 'resume' ? styles.active : ''}><a href={process.env.PUBLIC_URL + 'MaryChan_Resume_Public.pdf'} target='_blank' rel="noreferrer">Resume</a></li>
            <li>
                <a href="mailto:&#109;&#97;&#114;&#121;&#115;&#99;&#104;&#97;&#110;&#64;&#103;&#109;&#97;&#105;&#108;&#46;&#99;&#111;&#109;" onClick={handleEmail}>
                    Contact Mary
                </a>
                <span className={`${styles.tooltip} ${showToolTip ? styles.show : ''}`}>{toolTipMsg}</span>
            </li>
        </ul> 
    )
}