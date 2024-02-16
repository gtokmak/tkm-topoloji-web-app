import { ref } from 'vue'
import { defineStore } from 'pinia'
import rehberService from '../services/rehberService'
import { IRehber } from '../models/rehber'

export const useRehberStore = defineStore('rehber', () => {
    
    const kisiler = ref<IRehber[] | null>(null)

    const fetchKisiler = async () => {
        const data = await rehberService.Kisiler()
        if (data !== null) {
            kisiler.value = data
        }
    }

    const getKisiler = async (payload: string) => {
      //console.log(payload)
        if (payload.length > 2 && kisiler.value !== null) {
            const filteredKisiler = kisiler.value.filter(kisi => 
                kisi.isim.toLocaleLowerCase().includes(payload.toLocaleLowerCase()) ||
                kisi.mudurluk.toLocaleLowerCase().includes(payload.toLocaleLowerCase()) ||
                kisi.birim.toLocaleLowerCase().includes(payload.toLocaleLowerCase()) ||
                kisi.numara.toLocaleLowerCase().includes(payload.toLocaleLowerCase())
            )
            return filteredKisiler
        }
        return null
    }

    return { kisiler, fetchKisiler, getKisiler }
})