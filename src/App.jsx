import React, { useState, useRef, useEffect } from 'react'

const App = () => {
  const oggyRef = useRef(null)
  const [xvalue, setxvalue] = useState(0);
  const [yvalue, setyvalue] = useState(0);
  

  const btnHandler=()=>{
   const x= Math.random()*90;
   const y= Math.random()*90;

   setxvalue(x)
   setyvalue(y)
  }
  useEffect(function(){
    oggyRef.current.style.left=xvalue+'%'
    oggyRef.current.style.top=yvalue+'%'
    console.log("helloooo");
  },[xvalue,yvalue])
  return (
    <div>
      <img className='absolute' ref={oggyRef} src="https://th.bing.com/th?q=Cartoon+Characters+Oggy&w=120&h=120&c=1&rs=1&qlt=90&cb=1&dpr=1.3&pid=InlineBlock&mkt=en-IN&cc=IN&setlang=en&adlt=moderate&t=1&mw=247" alt="" />
      <button className='relative px-3 py-3 mt-[10%] ml-10 border-2 border-blue-400 rounded-md text-2xl' onClick={btnHandler}>click</button>
    </div>
  )
}

export default App
