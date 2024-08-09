import React, { useState, useEffect, useRef } from 'react';
import styles from './Nav.module.scss';
import Menu from '../Menu/Menu.js';
export default function Nav({ currentScreen, onMenuClick, setInitialLoad }) {

    const [isOpen, setIsOpen] = useState(false);
    const menuRef = useRef(null);

    const handleOnClick = (e) => {
        window.scrollTo({ top: 0 });
        onMenuClick(e);
        setIsOpen(false);

    }
    const handleToggle = (e) => {
        setIsOpen(prevState => !prevState);
    }

    const handleClickOutside = (event) => { // check if nav exists AND if the target clicked is NOT inside nav
        if (menuRef.current && !menuRef.current.contains(event.target)){
            setIsOpen(false);
        }
    }

    useEffect(() => { // Event listener: remove when nav component is unmounted.
        if(isOpen){
            window.addEventListener('mousedown', handleClickOutside);
        } else {
            window.removeEventListener('mousedown', handleClickOutside);
        }

        return () => {
            window.removeEventListener('mousedown', handleClickOutside);
        };
    },[isOpen])    
    return (

        <div id={styles.nav} className={currentScreen === 'home' ? styles.placeholder : styles.interior}>
            <div id={styles.logo} onClick={(e) => { handleOnClick('home') }}>
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
            <div className={`${styles.navMenu} ${isOpen ? styles.showMenu : ''}`}  ref={menuRef}>
                <Menu setInitialLoad={setInitialLoad} currentScreen={currentScreen} onMenuClick={onMenuClick} setIsOpen={setIsOpen} />
            </div>
        </div>
    )

}
