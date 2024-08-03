import React, { useState, useEffect } from 'react';
import styles from './Footer.module.scss';
import resume from '../../downloads/MaryChan_FrontEnd_Resume.pdf';


export default function Footer({currentScreen, onMenuClick}) {

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
        navigator.clipboard.writeText('maryschan@gmail.com').then(() => {
            setShowToolTip(true);
            setToolTipMsg('Saved to clipboard!')
          }).catch((err) => {
            setToolTipMsg('Error saving to clipboard')
            console.error('Could not copy text: ', err);
          });
    }
    return (
        
         <div id={styles.footer}>
            <ul className={`${styles.menu} ${styles.footerMenu}`}>
                <li className={currentScreen === 'resume' ? styles.active : ''}><a href={resume} target='_blank' rel="noreferrer">Resume</a></li>
                <li>
                <a href="mailto:maryschan@gmail.com" onClick={handleEmail}>
                    Contact Mary
                </a>
                <span className={`${showToolTip ? styles.show : ''}`}>{toolTipMsg}</span>
            </li>
        </ul> 
            <p>&copy; 2024 DevRemedy</p>
        </div>
    )

}
