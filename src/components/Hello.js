import React, { useState } from 'react';

export default function Hello() {
    const [welcome, setWelcome] = useState(true);
    const handlePortfolioClick = (event) => {
      setWelcome(false)
    }
  return (
    <div>
    { welcome && (
        <div id="hello">
          <h1 className="animate2"><a href="mailto:maryschan@gmail.com"><span>Mary</span> Chan</a></h1>
          <p className="animate1">Creative and user-focused developer. 10+ years of experience. </p>

            <div className="animate2 flex-center">
              <button className="btn" onClick={handlePortfolioClick} >Portfolio</button>
              <a className="btn" href="https://www.linkedin.com/in/chanmary">LinkedIn</a>
            </div>
        </div>
      )}
    </div>
  )
}