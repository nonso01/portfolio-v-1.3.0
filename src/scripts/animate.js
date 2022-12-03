/*   once your portfolio is ready for production kindly use gsap through cdn, and remove the type=module from animate.js while using the global gsap object

03/12/22
*/


"use strict"
import {gsap} from "/node_modules/gsap/index.js"

const c=console
 const dq = x => document.querySelector(x)
 const dqA = x => document.querySelectorAll(x)
 
 
 
dq(".s").style=`display:block; width:200px; height: 200px; border:1px solid;`

let test=gsap.to(".s",{
  x: 100,
  ease: "elastic",
  duration: 3,
  delay: .5,
  repeat: 10,
  yoyo: true
  
})

