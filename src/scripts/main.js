  'use strict'

//import { createApp } from 'https://unpkg.com/vue@3/dist/vue.esm-browser.js'
import {_data} from "/src/scripts/data.js"
import {resize} from "/src/scripts/resize.js"

import {Anime} from "/src/scripts/animate.js"

const c=console
 const dq = x => document.querySelector(x)
 const dqA = x => document.querySelectorAll(x)
 
 
/*const app= createApp({
  
  data(){
    return {
      hi: "Sorry Am just refactoring my ugly scripts, will be out in a month or two",
      number: 0
    }
  },
  methods: {
    inc(){
      return this.number++
    }
  }
  
  
}).mount("#app")*/


// play ground

let obj={
  element: ".s",
  type:{
    name: "scroll",
    loop: 4,
    random: 240
  }
}


let a= new Anime(obj)

.css({
  width: "50vw",
  display: "block",
  height: 200,
  position: "absolute",
  top: 100,
  left: 240.56,
  backgroundColor: "indianred",
  borderRadius: 30
})
.on('do', ()=> c.log("hi"))
