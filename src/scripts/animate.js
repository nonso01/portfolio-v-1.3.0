 const c=console
  const dq=x=>document.querySelector(x)
  const dqA=x=>document.querySelectorAll(x)
  
  
  class Anime{
    constructor(data={},type){
      this.element=dq(data.element)
      this.id=this.element.id || null
      this.attr=this.element.attributes||null

      this.parentElement=this.element.parentNode
      
      
      this.type=arguments[arguments.length-1]
      
      this.rect=this.element.getBoundingClientRect()
      
      this.boxGeo={
        w: this.rect.width,
        h:this.rect.height,
        x: this.rect.x,
        y:this.rect.y,
        bottom: this.rect.bottom,
        top: this.rect.top,
      }
      
      
      this.keys= Object.keys(data).toString()
      
    }
    
    
    on(event,f){ // event
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
        this.element.style[prop]=_style[prop]
      }
      return this
      
    }
    
    set add(value){
      
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

