import { createApp } from 'https://unpkg.com/vue@3/dist/vue.esm-browser.js'
import {_data} from "/src/scripts/data.js"
import {resize} from "/src/scripts/resize.js"

const c=console

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


