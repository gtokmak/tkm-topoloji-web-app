import { ref } from 'vue'
import { defineStore } from 'pinia'

export const useKameraStore = defineStore('kamera', {
  state:()=>{
    return{
      kameralar :ref([])
    }
  },
  getters:{
    
  },
  actions: {
    async dbKameralar(){
      await fetch("http://localhost:3000/kamera",{
        headers:{
          "Access-Control-Allow-Origin": "*"
        }})
      .then(res=>res.json())
      .then(data=>{
        this.kameralar.push(...data);
      })
    },

    getKameralar(payload){
        if(payload.length > 0)
          {
            payload = payload.toLocaleLowerCase()
            return this.kameralar.filter(kamera => 
                kamera.name.toLocaleLowerCase().indexOf(payload) !=-1
              || kamera.host.toLocaleLowerCase().indexOf(payload) !=-1
              || kamera.port.toLocaleLowerCase().indexOf(payload) !=-1
              || kamera.username.toLocaleLowerCase().indexOf(payload) !=-1
              || kamera.password.toLocaleLowerCase().indexOf(payload) !=-1
              )
          }
          else {
            return this.kameralar
          }
    },
    deleteKamera(id){
      console.log(`output->id`,id)
       this.kameralar = this.kameralar.filter(kamera => kamera.id == id)
       console.log(`output->this.kameralar`,this.kameralar)
    }
  },

})