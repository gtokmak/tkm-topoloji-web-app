import { ref } from 'vue'
import { defineStore } from 'pinia'

export const useDashboardStore = defineStore('dashboard', {
  state:()=>{
    return{
      kavsakSayisi :ref(0),
      vttSayisi :ref(0)
    }
  },
  getters:{
    
  },
  actions: {
    async dbKavsakSayisi(){
      await fetch("http://10.10.0.114:7070/api/tkm/dashboard/TotalCrossRoad",{
        headers:{
          "Access-Control-Allow-Origin": "*"
        }})
      .then(res=>res.json())
      .then(data=>{
        console.log(`output->data`,data)
        this.kavsakSayisi = data.TotalCrossRoad;
      })
    },
    async dbVttSayisi(){
      await fetch("http://10.10.0.114:7070/api/tkm/dashboard/TotalVTT",{
        headers:{
          "Access-Control-Allow-Origin": "*"
        }})
      .then(res=>res.json())
      .then(data=>{
        console.log(`output->data`,data)
        this.vttSayisi = data.TotalVTT;
      })
    },

  },

})