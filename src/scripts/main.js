"use strict"
import {_data} from "/src/scripts/data.js"
import {resize} from "/src/scripts/resize.js"
import {createApp} from 'https://unpkg.com/vue@3/dist/vue.esm-browser.js'


const c=console
 const dq=x=> document.querySelector(x)
 const dqA=x=> document.querySelectorAll(x)
 
 
const app= createApp({
  
  data(){
    return {
      hi: "Hello,Am NONSO MARTIN",
      number: 0
    }
  },
  methods: {
    inc(){
      return this.number++
    }
  }
  
  
}).mount("#app")


