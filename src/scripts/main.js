"use strict"

import anime from '/src/animejs/index.js'
import allData from '/src/scripts/data.js'

/* To every line writing there's a better alternative --Martin-- */

const csl=(x)=>console.log(x)
const dc=(x)=>document.createElement(x)
const dq=(x)=>document.querySelector(x)
const dqA=(x)=> document.querySelectorAll(x)

const body= dq('body')

function creatElem(chd,cls,prt,text=null){
 let el= dc(chd)
 el.classList.add(cls)
 prt.appendChild(el)
 el.textContent= text
}

function commonTimer(f,time){
const timer= setInterval(f,time)
}


csl(allData)

// 1-time todo will add blink effects
let tictac=0

function timing(){
 const date= new Date()
 
 const [hour,min,sec,blink,milli]=[dq('.hr'),dq('.mn'),dq('.sec'),dqA('.dim'),dq('.mm')]
 
 hour.textContent=date.getHours()
 min.textContent=date.getMinutes()
 sec.textContent=date.getSeconds()
 milli.textContent=date.getMilliseconds()
}

// 2-intro text
function intro(){
 const introduce= dq('.hd__title')
 let random= Math.floor(Math.random()*allData.introText.length)
 introduce.textContent=allData.introText[random]
}

// 3-quotes
function quote(){
  let index= 5

 const shuffle= dq('.sm-quote')
 
 const leftBtn= dq('.sm-left').addEventListener("click",()=>{
  index--
  if(index<0){
   index=5
  } 
shuffle.textContent=allData.quoteText[index]
 })
 
 const rightBtn= dq(".sm-right").addEventListener("click",()=>{
  index++
  if(index>5){
   index=0
  }  
shuffle.textContent=allData.quoteText[index]
 })
 
 shuffle.textContent=allData.quoteText[index]
}

// 4-small cards
function smallCard(){
 const cardDiv= dq('.sm-card')
 
 let smallCardDisplay= allData.smallCardData.map((data)=>{
  return (`<div class="sm-cd"><img src=${data.img} alt="img" width="40px" height="40px"><h3>${data.h3}</h3><p>${data.p}.</p></div>`)
 }).join("")
 cardDiv.innerHTML= smallCardDisplay
}

// 5 -all modal
function allModal(){
 
}


//once fully loaded
window.addEventListener("load",()=>{
 commonTimer(timing,100)
 commonTimer(intro,2700)
 quote()
 smallCard()
})

