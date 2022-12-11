/**
 * once your portfolio is ready for production kindly use gsap through cdn, and remove the type=module from animate.js while using the global gsap object

* 03/12/22
*/


"use strict"
import {gsap} from "/node_modules/gsap/index.js"

const c=console
 
 /**
  * header IIFE which handles animations done within the <header/>
  */
const header = (function(){
  const hd= dq(".hd")
  
})()
 
const footer = (function(){
  const ft = dq(".ft")
})()

function dq(x){
  return document.querySelector(x)
}

function dqA(x){
  return document.querySelectorAll(x)
}
