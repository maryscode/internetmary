import styles from './PortfolioItem.module.scss';
export default function PortfolioItem({projectData,onProjectClick}){
    const scrollToTop = () => window.scrollTo(0, 210);

    const handleOnClick = () => {
        onProjectClick(null);
        setTimeout(() => {onProjectClick(projectData)}, 0);
        scrollToTop();
        // window.scrollTo({ top: 200});
        // const focus = document.getElementById("activePortfolio");
        // focus.scrollIntoView({behavior: "smooth" });
    }    
    return(
        <div onClick={handleOnClick} className={`${styles.portfolioItem} animateFadeInDelay`}>
            <div className={styles.thumbnail} style={{backgroundImage: 'url('+ projectData.thumbSrc +')'}}>
                <div className={styles.cta}><span>View Project Details</span></div>
            </div>
            <h4>{projectData.name}</h4>
            <p>{projectData.summary}</p>
        </div>
    )
}        
        