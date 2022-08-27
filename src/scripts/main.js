"use strict"

import anime from '/src/animejs/index.js'
import allData from '/src/scripts/data.js'

/* To every line writing there's a better alternative --Martin-- */

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
const timer= setInterval(f,time)
}


//csl(allData)

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
 const short= allData.introText
 introduce.textContent=short[0]
 
 let timer= setInterval(()=>{
  let random= Math.floor(Math.random()*short.length)
 introduce.textContent=short[random]
 },2500)
 
}

// 3-quotes
function quote(){
  let index= 5
  const short= allData.quoteText

 const shuffle= dq('.sm-quote')
 
 const leftBtn= dq('.sm-left').addEventListener("click",()=>{
  index--
  if(index<0){
   index=5
  } 
shuffle.textContent=short[index]
 })
 
 const rightBtn= dq(".sm-right").addEventListener("click",()=>{
  index++
  if(index>5){
   index=0
  }  
shuffle.textContent=short[index]
 })
 
 shuffle.textContent=short[index]
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
 
 (function(){ // 1 modal
 const first= dq(".cl_one_op")
  const second= dq(".cl_two_clo")

  const firstBtn= dq(".cl-btn").addEventListener("click",()=>{
  first.style.display="none"
  second.style.display="flex"
  })
  const secondBtn=dq(".cl-btn-clo").addEventListener("click",()=>{
  first.style.display="flex"
   second.style.display="none"
  })})()
}

//6 -main cards
function mainCard(){
 const section= dq(".sec3")
 const short= allData.majorCardData_1
 let src= "/assets/icons/check_circle_black_24dp.svg"
 
 
 short.forEach((data)=>{
  data.star=(`<img src=${src}><img src=${src}><img src=${src}><img src=${src}><img src=${src}>`)
  data.fee= "project fee"
 })
 let cardDisplay= short.map((data)=>{
  return (`<div class="mn-card"><div class="card-img"><img src=${data.img} alt="x"></div><div class="card-pr"><span>${data.price}</span><s>${data.cancel}</s><i>${data.fee}</i></div><h3>${data.h3}</h3><div class="card-rv"><figure>${data.star}</figure><i>${data.review}</i></div></div>`)
 }).join("")
 section.innerHTML= cardDisplay;
 /*todo update the cards
function changeMainCard(){
 const btn= dq(".br-btn").addEventListener("click",()=>{
  p=allData.majorCardData_2()
  csl(short)
 })*/

}
 
 //7 -projects
 function project(){
  const [btn,pj_show]=[dq(".pj-btn"),dq(".pj-sh")]
  const short= allData.projectData
  
  let projectDisplay= short.map((data)=>{
   return (`<div><section><img src=${data.img}></section><article><h3>${data.h3}</h3><p><a href=${data.link}>${data.p}</a></p></arricle></div>`)
  }).join("")
  
  pj_show.innerHTML= projectDisplay
  
  //todo update projects 
 }

//8 -testimonial
function people(){
 const [People,leftBtn,rightBtn,T]=[dq(".pl"),dq(".ts-left"),dq(".ts-right"),dq(".ts-pl")]
 const short= allData.testimonialData
 
 let peopleDidplay= short.map((data)=>{
  return (`<div class="ts-card"><article><img src=${data.img} width="60p" height="60px"><div><h4>${data.name}</h4><span>${data.job}</span></div></article><p>${data.word}</p></div>`)
 }).join("")
 T.innerHTML=peopleDidplay
}

//9 -languages
function lang(){
 const div= dq(".lang")
 const short= allData.languageData
 
 let langDisplay= short.map(data=>{
  return (`<div class="lang-card"><div><i>${data.percent}</i><span class="lang-rate"><i class=${data.cls}></i></span></div><img src=${data.img} width="70px" height="70px"></div>`)
 }).join("")
 div.innerHTML=langDisplay
}


//once fully loaded
window.addEventListener("load",()=>{
  commonTimer(timing, 100)
  intro()
  quote()
  smallCard()
  allModal()
  mainCard()
  project()
  people()
  lang()

})

body.style.transform="scale(0.5)"

