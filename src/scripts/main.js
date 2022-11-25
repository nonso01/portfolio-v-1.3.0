import { createApp } from 'https://unpkg.com/vue@3/dist/vue.esm-browser.js'
import {_data} from "/src/scripts/data.js"
import {resize} from "/src/scripts/resize.js"

import {Anime} from "/src/scripts/animate.js"

const c=console
 const dq = x => document.querySelector(x)
 const dqA = x => document.querySelectorAll(x)
 
 
const app= createApp({
  
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
  
  
}).mount("#app")


// play ground

let obj={
  element: "#app button"
}

let b= new Anime(obj,"scroll")
.css({
  color: "#454",
  fontFamily: "monospace"
})

