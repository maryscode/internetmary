// import React, { useState } from 'react';

export default function Portfolio({onBackClick}) {
    const handleOnClick = () => {
        console.log('clicked!')
        onBackClick(true)
    }
  return (
    <div id="portfolio-index">
        <h1>Portfolio</h1>
        <button onClick={handleOnClick}>Back Home</button>
        <div className="portfolio-item">
            <div className="thumbnail"></div>
            <h3>Portfolio Title</h3>
            <h4>Portfolio Subtitle</h4>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
            <a href="#">View Project &raquo;</a>
        </div>
        

        <div className="portfolio-item">
            <div className="thumbnail"></div>
            <h3>Portfolio Title</h3>
            <h4>Portfolio Subtitle</h4>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
            <a href="#">View Project &raquo;</a>
        </div>


        <div className="portfolio-item">
            <div className="thumbnail"></div>
            <h3>Portfolio Title</h3>
            <h4>Portfolio Subtitle</h4>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
            <a href="#">View Project &raquo;</a>
        </div>
                        
    </div>
  )
}