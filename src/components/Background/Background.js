import React, { useState, useEffect } from 'react';
export default function Background() {
  // const blue = '#52D1DC',
  //       pink = '#D08FCB',
  //       yellow = '#52b6ff',
  //       purple = '#9d8bd9';
  const bg1 = '#52D1DC', // blue
        bg2 = '#8f91ff', //#8f91ff', // purple
        bg3 = '#db4fcb', // pink
        bg4 = '#00c8ff'; // greenish
    //  const bg1 = '#52D1DC', // teal  - like
    //     bg2 = '#D08FCB', // pink - ok
    //     bg3 = '#52b6ff', // blue -- dont like
    //     bg4 = '#9d8bd9';  //purple - like

  const [mousePos, setMousePos] = useState({x: 0, y: 0});
  const [dynamicBg, setDynamicBg] = useState(bg1);
  const [cursorClass, setCursorClass] = useState('topLeft');
    
  useEffect(() => {
    const handleMouseMove = (event) => {
      setMousePos({
        x: event.clientX,
        y: event.clientY
      });
      // console.log('mousemove')
      if (event.clientY < event.view.innerHeight/2 && event.clientX < event.view.innerWidth/2 ) {
        // top left
        setDynamicBg(bg1);
        setCursorClass('topLeft');        
      } else if (event.clientY < event.view.innerHeight/2 && event.clientX >= event.view.innerWidth/2){ 
        // top right 
        setCursorClass('topRight');
        setDynamicBg(bg2);
      } else if (event.clientY >= event.view.innerHeight/2 && event.clientX < event.view.innerWidth/2 ){
        // bottom left
        setDynamicBg(bg3);
        setCursorClass('bottomLeft');
      } else {
          // Bottom Right
          setDynamicBg(bg4);
          setCursorClass('bottomRight');
      }  
    };

    window.addEventListener('mousemove', handleMouseMove);

    // Cleanup the event listener on component unmount
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);
  
  return (
    <div 
      id="background" 
      className="animateFadeIn"
      style={{
        background: dynamicBg, 
        transition: 'all 1s ease'
      }}
    >
        <div className="gradient" />
        <div 
            id="cursor2" 
            style={{ left: mousePos.x, top: mousePos.y}}
        ></div>            
        <div 
            id="cursor1" 
            className={cursorClass}
            style={{ left: mousePos.x, top: mousePos.y}}
        ></div>      
        <div id="orb2" />
        <div id="orb1" />
        <div id="orb3" />

    </div>
  )
}