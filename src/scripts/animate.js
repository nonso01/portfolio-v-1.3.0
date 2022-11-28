 const c=console
  const dq=x=>document.querySelector(x)
  const dqA=x=>document.querySelectorAll(x)
  
  
  class Anime{
    constructor(data={}){
      this.element
      this.nodeList
      
    if(typeof data!=="object"){
    throw new TypeError("type error expecting an object {}.")
    }
    
    if(data.element===undefined || data.elements===undefined){
    throw new Error("please provide an element to get started.")
    }

   else if(data.element){
     this.element= dq(data.element)
   }
      
      
      this.attr=this.element.attributes

      this.parentElement=this.element.parentNode
      
      
      this.rect=this.element.getBoundingClientRect()
      
      this.boxGeo={
        w: this.rect.width,
        h:this.rect.height,
        x: this.rect.x,
        y:this.rect.y,
        bottom: this.rect.bottom,
        top: this.rect.top,
      }
      
      this.initScroll={
        isScrolling: false,
        offsetTop: 0,
        offsetBottom: 0
      }
      
      
      this.keys= Object.keys(data).toString()
      this.type= data.type
      
      
    }
    
    
    
    on(event=new String,f=function(){}){ 
      let arg= arguments
      
      if(arg.length<2 || arg.length>2){
        throw new Error(`function expects two args ,"event_type and callback" but had ${arg.length} arg(s)`)
      }
      
      if((typeof arg[0]!=="string") && (typeof arg[1]!=="function")){
        throw new TypeError
      }
      
      const _ev=this.element.addEventListener(event,f)
      
      return this
    }
    
    
    css(_style={}){
      for(let prop in _style){
        if(_style[prop] instanceof Function){
          this.element.style[prop]=_style[prop]()
        }
        
        if(typeof _style[prop]==="number"){
          this.element.style[prop]=_style[prop]+"px"
        }
        
        this.element.style[prop]=_style[prop]
      }
      
      return this
    }
    
  init(){
    
  }
    
    static _drop_down(toggle="show"){
      
    }
    
  }


 
export {Anime}

/*
type of animations
- scroll X & Y
- resize
- drop-down
- transformation

*/

