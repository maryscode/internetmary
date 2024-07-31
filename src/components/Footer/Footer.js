import styles from './Footer.module.scss'
export default function Footer({currentScreen, onMenuClick}) {
    const handleOnClick = (e) => {
        window.scrollTo(0,0);
        onMenuClick(e);
    }
    return (
        
         <div id={styles.footer}>
            <ul className={styles.menu}>
                <li><button onClick={(e) => {handleOnClick('home')}}>Home</button></li>
                <li><button onClick={(e) => {handleOnClick('about')}}>About</button></li>
                <li><button onClick={(e) => {handleOnClick('portfolio')}}>Portfolio</button></li>
                <li>Resume</li>
                <li>How can I help?</li>
            </ul> 
            <p>&copy; 2024 DevRemedy</p>
        </div>
    )

}
