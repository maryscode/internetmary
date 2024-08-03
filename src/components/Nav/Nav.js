import React, { useState } from 'react';
import styles from './Nav.module.scss';
import Menu from '../Menu/Menu.js';
export default function Nav({currentScreen, onMenuClick}) {

    const [isOpen, setIsOpen] = useState(false);

    const handleOnClick = (e) => {
        window.scrollTo({ top: 0});
        onMenuClick(e);
        setIsOpen(false);
    }
    const handleToggle = (e) => {
        
        setIsOpen(prevState => !prevState);
    }
    return (
        
         <div id={styles.nav} className={ currentScreen === 'home' ? styles.placeholder : styles.interior}>
            <div id={styles.logo} onClick={(e) => {handleOnClick('home')}}>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>                
            </div>
            <button type='button' aria-label="Toggle navigation" onClick={handleToggle} className={`${styles.menuButton} ${isOpen ? styles.buttonActive : ''}`}>
                <span></span>
                <span></span>
                <span></span>
            </button>
            <div className={`${styles.navMenu} ${isOpen ? styles.showMenu : ''}`}>
                <Menu menuClass={styles.footerMenu} currentScreen={currentScreen} onMenuClick={onMenuClick} setIsOpen={setIsOpen} />
            </div> 
        </div>
    )

}
