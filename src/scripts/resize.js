// media queries
"use strict"

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


const hamburger= dq(".bar")
 const cancelHam= dq(".cancel")
 
 timeOut(mediaSize,100)

function mediaSize(){
 
 if(bodyWidth <=568) {
  bodyDiv.setAttribute("id","sz-mb")
  hamburger.classList.remove("hide")
  cancelHam.classList.remove("hide") 
 }
 
 else if(bodyWidth>=600 && bodyWidth<=960) {
  bodyDiv.setAttribute('id',"sz-tb")
   hamburger.classList.remove("hide")
   cancelHam.classList.remove("hide") 
 }
 
else bodyDiv.setAttribute("id","sz-dk")

csl(bodyWidth)
}

function toggleHam(){
 const headerBtn= dq(".hd__btn")
 
 event(hamburger,"click",()=>{
  headerBtn.classList.add("show")
 })
 event(cancelHam,"click",()=>{
  headerBtn.classList.contains("show")?headerBtn.classList.remove("show"):0
 })

}


event(window,"load",()=>{
 event(window,"resize",mediaSize)

 toggleHam()
 
})


