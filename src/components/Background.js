import React, { useState, useEffect } from 'react';
export default function Background({bgClass}) {

  const blue = '#52D1DC',
        pink = '#D08FCB',
        yellow = '#52b6ff',
        purple = '#9d8bd9';

  const [mousePos, setMousePos] = useState({x: 0, y: 0});
  const [dynamicBg, setDynamicBg] = useState(blue);
  const [cursorClass, setCursorClass] = useState('topLeft');
    
  useEffect(() => {
    const handleMouseMove = (event) => {
      setMousePos({
        x: event.clientX,
        y: event.clientY
      });
      console.log('mousemove')
      if (event.clientY < event.view.innerHeight/2 && event.clientX < event.view.innerWidth/2 ) {
        // top left
        setDynamicBg(yellow);
        setCursorClass('bottomRight');        
        
      } else if (event.clientY < event.view.innerHeight/2 && event.clientX >= event.view.innerWidth/2){ 
        // top right 
        setCursorClass('topRight');
        setDynamicBg(purple);
      } else if (event.clientY >= event.view.innerHeight/2 && event.clientX < event.view.innerWidth/2 ){
        // bottom left
        setDynamicBg(pink);
        setCursorClass('bottomLeft');
      } else {
          // bottom right
          setDynamicBg(blue);
          setCursorClass('topLeft');
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
      className={bgClass}
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