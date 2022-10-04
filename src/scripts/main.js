 "use strict"

import {allData} from '/src/scripts/data.js'

/* To every line writing there's a better alternative --Martin-- */

const csl=(x)=>console.log(x)
const dc=(x)=>document.createElement(x)
const dq=(x)=>document.querySelector(x)
const di=(x)=> document.getElementById(x)
const dqA=(x)=> document.querySelectorAll(x)

const html=dq("html")
const body= dq('body')
const bodyDiv= dq(".body-wrap")

let bodyWidth=window.innerWidth


function interval(f,time){
const interval= setInterval(f,time)
}

function timeOut(f,time){
 const timeOut= setTimeout(f,time)
}

function event(e,t,f){
 const event= e.addEventListener(t,f)
}

function rmEvent(e,t,f){
 const remove= e.removeEventListener(t,f)
}

function timing(){
 const date= new Date()

 const [hour,min,sec,blink,milli,ftDay]=[dq('.hr'),dq('.mn'),dq('.sec'),dqA('.dim'),dq('.mm'),dq(".ft-dt")]
 
 hour.textContent=date.getHours()
 min.textContent=date.getMinutes()
 sec.textContent=date.getSeconds()
 interval(()=>{
   milli.textContent=date.getMilliseconds()
 },400)
 ftDay.textContent=date.toDateString()
 
 blink.forEach((el)=>{
  sec.innerText%2==0?el.classList.add("blink"):el.classList.remove("blink")
 })
}

function mode(){
 
 event(dq(".fa-moon"),"click",(e)=>{
  e.preventDefault()
  if(e.target.classList.contains("fa-moon")){
e.target.classList.remove("fa-moon")
   e.target.classList.add("fa-sun")
  // html.style="background-color: #fff;"
  }
  else{
  e.target.classList.remove("fa-sun")
   e.target.classList.add("fa-moon")
  }
 })
}

function intro(){
 const introduce= dq('.hd__title')
 const short= allData.introText
 introduce.textContent=short[0]
 
 interval(()=>{
  let random= Math.floor(Math.random()*short.length)
 introduce.textContent=short[random]
 },2500)
}

function quote(){
  const short= allData.quoteText
  const shuffle= dq('.sm-quote')
  let index=short.length-1
 
 event(dq(".sm-left"),"click",()=>{
  index--
  if(index<0){
   index=short.length-1
  } 
shuffle.textContent=short[index]
 })
 
 event(dq(".sm-right"),"click",()=>{
  index++
  if(index>(short.length-1)){
   index=0
  }  
shuffle.textContent=short[index]
 })
 
 shuffle.textContent=short[index]
}

function smallCard(){
 const cardDiv= dq('.sm-card')
 
 let smallCardDisplay= allData.smallCardData.map((data)=>{
  return (`<div class="sm-cd flex-col trans"><img src=${data.img} width="40px" height="40px"><h3>${data.h3}</h3><p>${data.p}.</p></div>`)
 }).join("")
 cardDiv.innerHTML= smallCardDisplay
}

function allModal(){

 const clOn= dq(".cl_one_op")
  const clOff= dq(".cl_two_clo")
  const M= dq(".M")

  event(dq(".cl-btn"),"click",()=>{
   clOn.style.display="none"
  clOff.style.display="flex"
  })
  
  event(dq(".cl-btn-clo"),"click",()=>{
    clOn.style.display="flex"
   clOff.style.display="none"
  })
  
  M.classList.contains("modal")?M.classList.remove("modal"):0
  
 event(dq(".br button"),"click",()=>{
     M.classList.add("modal")
   M.classList.remove("hide")
    })
 event(dq(".M i"),"click",()=>{
        M.classList.add("hide")
     M.classList.remove("modal")
    })
}

function mainCard(){
 const section= dq(".sec3")
 const short= allData.majorCardData_1
 let src= "src='/assets/icons/star.svg' width='15px' height=15px class='star'"
 
 
 short.forEach((data)=>{
  data.star=(`<img ${src}><img ${src}><img ${src}><img ${src}><img ${src}>`)
  data.fee= "project fee"
 })
 let cardDisplay= short.map((data)=>{
  return (`<div class="mn-card trans"><div class="card-img"><img src=${data.img}></div><div class="card-pr"><span>${data.price}</span><s>${data.cancel}</s><i>${data.fee}</i></div><h3>${data.h3}</h3><div class="card-rv"><figure>${data.star}</figure><i>${data.review}</i></div></div>`)
 }).join("")
 section.innerHTML= cardDisplay;
}
 
function updateCard(){ }
 
function project(){
  const [btn,pj_show]=[dq(".pj-btn"),dq(".pj-sh")]
  const short= allData.projectData
  
  let projectDisplay= short.map((data)=>{
   return (`<a class="flex-row" href=${data.link} target="_self"><section><img src=${data.img}></section><article class="flex-col"><h3>${data.h3}</h3><p>${data.p}</p></article></a>`)
  }).join("")
  
  pj_show.innerHTML= projectDisplay
  
  //todo update projects 
 }

function people(){
 
  (function() {
   const say = dq(".pl")
   const data=["Friends","Companions","Families","Sponsors","Co-workers","Boss"]
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

function updatePeople(){
 const T= dq(".ts-pl")
 const light= dqA(".light i")
 const child=T.children
 let bulbNum= (light.length-1)
 let store=[]
 let num=0
 
  for(let el of child) store.push(el)

function tsLeft(){
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
   
} 
event(dq(".ts-left"),"click",tsLeft)

 function tsRight(){
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
 } 
event(dq(".ts-right"),"click",tsRight)
 
 /*mb tb*/
 if(bodyWidth<=890){
  rmEvent(dq(".ts-left"),"click",tsLeft)
  rmEvent(dq(".ts-right"),"click",tsRight)
  
  for(let i=0; i<child.length;i++){
   child[i].style.display="none"
   switch (i) {
    case 0:
     child[i].style.display="flex" 
   }
  }
 }

}

function lang(){
 const div= dq(".lang")
 const short= allData.languageData
 
 let langDisplay= short.map(data=>{
  return (`<div class="lang-card flex-row"><div class="flex-col"><i>${data.percent}</i><span class="lang-rate"><i class=${data.cls}></i></span></div><img src=${data.img} width="70px" height="70px"></div>`)
 }).join("")
 div.innerHTML=langDisplay
}

function codeWrite(){
 const code=dq(".ab-code .value")
 const blink= dq(".ab-code .blink")
 let age= dq(".age")
 let ageNum= 6e8;
 const short= allData.aboutmeData
 let text= short.pop()
 let speed= 150
 let i =0
 
 interval(()=>{
  code.textContent+= text.charAt(i)
  i++
  age.textContent=ageNum
  ageNum++
   i%2==0?blink.classList.remove("blink"):blink.classList.add("blink")
   if(i>=text.length){
    timeOut(()=>{
     code.style="background-color: var(--bg_1);"
    },2000)
    timeOut(()=>{
     code.innerText=""
    code.style="background-color: var(--ts);"
     i=-1
    },4000)
   }
   
 },speed)
}

function mailMe(){
 emailjs.init("lwYvE8DyzBBCRoja3")
 
 event(dq("#cnt-form"),"submit",function(event){
  
  event.preventDefault()
 emailjs.sendForm('service_xs39jlk', 'contact_form', this)
 .then(function() {
 //csl.log('SUCCESS!');
 alert('message sent successfully ✌️')
 }, function(error) {
  // csl(" an error occured")
   })
 });
  }

function footItem(){
 const ftInfo= dq(".ft-info")
 const ftConnect= dq(".ft-con")
 const short= allData.footerData
   const M= dq(".M")
 
 let footerItemDisplay= short.map(data=>{
  return (`<section class="flex-col"><h3>${data.title}</h3><ul class="flex-col"><li>${data._1}</li><li>${data._2}</li><li>${data._3}</li><li>${data._4}</li></ul></section>`)
 }).join("")
 ftInfo.innerHTML=footerItemDisplay
 
   const ftLi= dqA(".ft-info li")
   .forEach(e=>{
    event(e,"click",()=>{
     M.classList.add("modal")
   M.classList.remove("hide")
    })
   })
}

function normalize(){
 dqA("img")
 .forEach(e=>{
  e.alt="Martin\'s image"
 })
 
 dqA(".btn").forEach(e=>{
  e.classList.add("trans")
 })
 dqA("[type=submit]").forEach(e=>{
  event(e,"submit",()=>{
   e.preventDefault()
  })
 })
}


//once fully loaded
event(window,"load",()=>{
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
  updatePeople()
  mode()
//mailMe()
normalize()
 timeOut(()=>{
  body.classList.remove("load")
  bodyDiv.classList.remove("load-hide")
 },10000)
})

//body.style.transform="scale(0.4)"
