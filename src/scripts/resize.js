// media queries

const csl=(x)=>console.log(x)
const dc=(x)=>document.createElement(x)
const dq=(x)=>document.querySelector(x)
const di=(x)=> document.getElementById(x)
const dqA=(x)=> document.querySelectorAll(x)

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

const bodyWidth=window.innerWidth

let mbWidth,tbWidth,dkWidth

// temporal
 if(bodyWidth<900){
  body.style.display="none"
  html.innerText=`please switch to desktop mode... screen size is ${bodyWidth + "px"} the page is not yet responsive...`
 } 

window.addEventListener("load",()=>{

 
})
