<template>
  <div class="pagetitle">
    <h1>Kamera</h1>
  </div><!-- End Page Title -->
  <section class="section">
    <div class="row">
      <div class="card">
        <div class="card-header">Kamera Listesi   
        </div>
        <div class="card-body">
          <h5 class="card-title">Toplam Kamera Sayısı: <span class="badge bg-info text-black">{{ kameraListeLength }}</span></h5>
          <!-- Table with hoverable rows -->
          <KameraListe :kameralar="kameraListe"></KameraListe>
          <!-- End Table with hoverable rows -->
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>

import {onMounted,computed, ref } from "vue";
import KameraListe from "../components/KameraListe.vue";
import { useKameraStore } from "../stores/kamera";
const kameraStore = useKameraStore()
const kameraListe =ref([])

onMounted(()=>{
  kameraStore.dbKameralar()
  kameraListe.value= kameraStore.kameralar
})

const kameraListeLength = computed(() => kameraListe.value.length)



</script>
