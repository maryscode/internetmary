import styles from './Nav.module.scss'
export default function Nav({currentScreen, onMenuClick}) {
    const handleOnClick = (e) => {
        window.scrollTo({ top: 0});
        onMenuClick(e);
        
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
            <ul className={styles.menu}>
                <li><button onClick={(e) => {handleOnClick('about')}}>About</button></li>
                <li><button onClick={(e) => {handleOnClick('portfolio')}}>Portfolio</button></li>
                <li>Resume</li>
                <li>Let's Work</li>
            </ul> 
        </div>
    )

}
