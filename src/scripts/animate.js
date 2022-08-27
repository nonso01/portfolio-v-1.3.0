"use strict"
import anime from '/src/animejs/index.js'


const csl=(x)=>console.log(x)
const dc=(x)=>document.createElement(x)
const dq=(x)=>document.querySelector(x)
const di=(x)=> document.getElementById(x)
const dqA=(x)=> document.querySelectorAll(x)

const body= dq('body')

function creatElem(chd,cls,prt,text=null){
 let el= dc(chd)
 el.classList.add(cls)
 prt.appendChild(el)
 el.textContent= text
}
function commonTimer(f,time){
 let timer= setInterval(f,time)
}

//1 -canvas with soft rect around it
function myCanvas(){
 const canvas= di("cnv")
 const ctx= canvas.getContext("2d")
 
 const canvasWidth= canvas.width= window.innerWidth
 const canvasHeight= canvas.height=500
 
 let numOfRect= 100
 let rectArray=[]
 
 class Rect{
  constructor(){
   this.x= Math.random()*canvasWidth
   this.y= Math.random()*canvasHeight
   this.width= 15
   this.height= 15
   this.speed= Math.random()*4-2
  }
  update(){
   this.x+=this.speed
      this.y+=this.speed
      
  if((this.x<0)||(this.x>canvasWidth)){
   this.x=Math.random()*canvasWidth
  }
  else if((this.y<0)||(this.y>canvasHeight)){
   this.y=Math.random()*canvasHeight
   }
  }
  draw(){
   ctx.strokeStyle= "#17FF9F"
   ctx.strokeRect(this.x,this.y,this.width,this.height)
  }
 }

for(let i=0; i<numOfRect;i++){
 rectArray.push(new Rect())
}
//csl(ctx)
 function animate(){
  ctx.clearRect(0,0,canvasWidth,canvasHeight)
  
  rectArray.forEach(rect=>{
   rect.update()
   rect.draw()
  })
  requestAnimationFrame(animate)
 }
 animate()
 //commonTimer(animate,3000)
}


window.addEventListener("load",()=>{
 myCanvas()
})
