<template>
  <div class="pagetitle">
    <h1>Rehber</h1>
  </div><!-- End Page Title -->
  <section class="section">
    <div class="row">
      <div class="card">
        <div class="card-header">Rehber Uygulaması   
        </div>
        <div class="card-body">
          <form for="inputText">
            <div class="row mb-3 mt-3">
            <label for="inputText" id="rehberLabel" class="col-sm-2 col-form-label text-primary fw-bold ">Arama İçin yazınız</label>
            <div class="col-sm-4">
              <input type="text" id="rehberInput" class="form-control" v-model="arananKisi" v-on:keyup="getKisi()" >
            </div>
          </div>
          </form>
          <div v-if="kisiListe !== null">
            <div v-if="kisiListe.length > 0">
              <h5 class="card-title">Rehberde Bulunan Sonuçlar</h5>
              <RehberListe :kisiler="kisiListe"></RehberListe>
            </div>
            <div v-else  class="alert alert-danger bg-danger text-light border-0 alert-dismissible fade show" role="alert">
              Rehberde Sonuç bulunamadı!
              <button type="button" class="btn-close btn-close-white" data-bs-dismiss="alert" aria-label="Close"></button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>

import {onMounted,ref } from "vue";
import RehberListe from "../components/RehberListe.vue";
import { useRehberStore } from "../stores/rehberStore";

const rehberStore = useRehberStore()
const kisiListe =ref(null)
const arananKisi=ref('')

onMounted( async ()=>{
  await rehberStore.fetchKisiler()
})


const getKisi=async ()=>{

  if(arananKisi.value.length === 0 )
    kisiListe.value = null
  else
    kisiListe.value = await rehberStore.getKisiler(arananKisi.value)
}

</script>
