"use strict"

import anime from '/src/animejs/index.js'
import {allData} from '/src/scripts/data.js'

/* To every line writing there's a better alternative --Martin-- */

const csl=(x)=>console.log(x)
const dc=(x)=>document.createElement(x)
const dq=(x)=>document.querySelector(x)
const di=(x)=> document.getElementById(x)
const dqA=(x)=> document.querySelectorAll(x)
//let frag = document.createDocumentFragment()

const html=dq("html")
const body= dq('body')

function creatElem(chd,cls,prt,text=null){
 let el= dc(chd)
 el.classList.add(cls)
 prt.appendChild(el)
 el.textContent= text
}

function interval(f,time){
const interval= setInterval(f,time)
}

function timeOut(f,time){
 const timeOut= setTimeout(f,time)
}


// 1-time todo will add blink effects

let tictac= 0
function timing(){
 const date= new Date()
 tictac++
 
 const [hour,min,sec,blink,milli,ftDay]=[dq('.hr'),dq('.mn'),dq('.sec'),dqA('.dim'),dq('.mm'),dq(".ft-dt")]
 
 hour.textContent=date.getHours()
 min.textContent=date.getMinutes()
 sec.textContent=date.getSeconds()
 milli.textContent=date.getMilliseconds()
 ftDay.textContent=date.toDateString()
 
 blink.forEach((el)=>{
  tictac%2==0?el.classList.add("blink"):el.classList.remove("blink")
 })
}

// 2-intro text
function intro(){
 const introduce= dq('.hd__title')
 const short= allData.introText
 introduce.textContent=short[0]
 
 interval(()=>{
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
  return (`<div class="sm-cd flex-col trans"><img src=${data.img} alt="img" width="40px" height="40px"><h3>${data.h3}</h3><p>${data.p}.</p></div>`)
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
 let src= "src=\'/assets/icons/star.png' width='24px' height=24px class='star\'"
 
 
 short.forEach((data)=>{
  data.star=(`<img ${src}><img ${src}><img ${src}><img ${src}><img ${src}>`)
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
 
 //6-1 update main cards todo
 function updateCard(){ }
 
 //7 -projects
 function project(){
  const [btn,pj_show]=[dq(".pj-btn"),dq(".pj-sh")]
  const short= allData.projectData
  
  let projectDisplay= short.map((data)=>{
   return (`<div class="flex-row"><section><img src=${data.img}></section><article class="flex-col"><h3>${data.h3}</h3><p><a href=${data.link}>${data.p}</a></p></arricle></div>`)
  }).join("")
  
  pj_show.innerHTML= projectDisplay
  
  //todo update projects 
 }

//8 -testimonial
function people(){
 
  (function() {
   const say = dq(".pl")
   const data=["Friends","Companions","Families","Sponsors","Co-workers"]
   say.textContent=data[0]
   
   interval(()=>{
    let random= Math.floor(Math.random()*data.length)
   say.textContent=data[random]
   },2000)
})()
  
 const [People,T]=[dq(".pl"),dq(".ts-pl")]
 const short= allData.testimonialData
 
 let peopleDisplay= short.map((data)=>{
  return (`<div class="ts-card flex-col ${data.cls}"><article><img src=${data.img} width="60px" height="60px"><div><h4>${data.name}</h4><span>${data.job}</span></div></article><p>${data.word}</p></div>`)
 }).join("")
 T.innerHTML=peopleDisplay
 
}

//8-1 update testimonial todo
function updatePeople(){
 const T= dq(".ts-pl")
 const light= dqA(".light i")
 const child=T.children
 let bulbNum= (light.length-1)
 let store=[]
 let num=0
 
  for(let el of child) store.push(el)

 const leftBtn=dq(".ts-left").addEventListener("click",()=>{
  num--
  light.forEach((el,i)=>{
   if(el.classList.contains("light-up")) el.classList.remove("light-up")
   if(num===i) el.classList.add("light-up")
   if(num<0) num=bulbNum
   
  })
     store.forEach((itm,idx)=>{
 num===idx?itm.classList.add("ts-card-up"):itm.classList.remove("ts-card-up")
 if (num===2 || num>=3) {
  child[0].style.display = "none"
  child[1].style.display = "none"
  child[3].classList.remove("hide")
  child[4].classList.remove("hide")
 } else{
  child[0].style.display = "flex"
  child[1].style.display = "flex"
  child[3].classList.add("hide")
  child[4].classList.add("hide")
 }
   })

 })
 
 const rightBtn=dq(".ts-right").addEventListener("click",()=>{
  num++
  light.forEach((el,i)=>{
   if(el.classList.contains("light-up")) el.classList.remove("light-up")
   if(num===i) el.classList.add("light-up")
   if(num>bulbNum){ 
    num=0
    num==i?el.classList.add("light-up"):0
   }
  })
       store.forEach((itm,idx)=>{
   if(num===idx) itm.classList.add("ts-card-up")
   else itm.classList.remove("ts-card-up")
   
    if(num===2 || num>=3){
  child[0].style.display="none"
  child[1].style.display="none"
  child[3].classList.remove("hide")
  child[4].classList.remove("hide")
    } else{
     child[0].style.display = "flex"
     child[1].style.display = "flex"
     child[3].classList.add("hide")
     child[4].classList.add("hide")
    }
   })

 })
 
}
//9 -languages
function lang(){
 const div= dq(".lang")
 const short= allData.languageData
 
 let langDisplay= short.map(data=>{
  return (`<div class="lang-card flex-row"><div class="flex-col"><i>${data.percent}</i><span class="lang-rate"><i class=${data.cls}></i></span></div><img src=${data.img} width="70px" height="70px"></div>`)
 }).join("")
 div.innerHTML=langDisplay
}

//10 ab-code
function codeWrite(){
 let code=dq(".ab-code .value")
 let blink= dq(".ab-code .blink")
 const short= allData.aboutmeData
 let text= short.pop()
 let speed= 170
 let i =0
 
 interval(()=>{
  code.textContent+= text.charAt(i)
  i++
  
   i%2==0?blink.classList.remove("blink"):blink.classList.add("blink")
 },speed)
 
}
//11 -footerInfos
function footItem(){
 const ftInfo= dq(".ft-info")
 const ftConnect= dq(".ft-con")
 const short= allData.footerData_1
 
 let footerItemDisplay= short.map(data=>{
  return (`<section class="flex-col"><h3>${data.title}</h3><ul class="flex-col"><li>${data._1}</li><li>${data._2}</li><li>${data._3}</li><li>${data._4}</li></ul></section>`)
 }).join("")
 ftInfo.innerHTML=footerItemDisplay
 
}


//once fully loaded
window.addEventListener("load",()=>{
  interval(timing, 900)
  intro()
  quote()
  smallCard()
  allModal()
  mainCard() 
  project()
  people()
  lang()
  codeWrite()
  footItem()
  updateCard
  updatePeople()
  /*testing*/
 timeOut(()=>{
  html.classList.remove("load")
  body.classList.remove("load-hide")
 },6000)
})

//body.style.transform="scale(0.4)"

