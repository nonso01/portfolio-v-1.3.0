const resize= (function(){
  'use strict'
  
  const c=console
  
  function _ev(element,type,func){
    let event= element.addEventListener(type,func)
  }
 
 const [DESKTOP_WIDTH, TABLET_WIDTH, MOBILE_WIDTH,NONE]=[1440,1100,650,200]
 
  
  function checkWidth(){
   const WIDTH= window.innerWidth
   c.log(WIDTH)
  }
  checkWidth()
  
  _ev(window,"resize",checkWidth)
  
})()


export {resize}
