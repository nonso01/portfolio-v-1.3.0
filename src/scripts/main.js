"use strict"
import {_data} from "/src/scripts/data.js"
import {resize} from "/src/scripts/resize.js"
import {createApp} from 'https://unpkg.com/vue@3/dist/vue.esm-browser.js'


const c = console

 function dq(x) {
   return document.querySelector(x)
 }
 
 function dqA(x) {
   return document.querySelectorAll(x)
 }
 
 
const header = createApp({
  data(){
    
    return {
      nonso01: _data?.name?? "Nonso"
    }
  },
 
 methods: {
   
 },
 
 computed: {
   
 },
 
 mounted(){
   
 }
  
}).mount(".hd")


