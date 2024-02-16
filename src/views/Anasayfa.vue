<template >
    <div class="pagetitle" >
    <h1>Anasayfa</h1>
    </div><!-- End Page Title -->
    <section class="section dashboard">
      <div class="row">
        <!-- Kavsak Card -->
        <div class="col-xxl-3 col-md-6">
          <div class="card info-card sales-card">

            <div class="card-body">
              <h5 class="card-title">Toplam Kavşak Sayısı </h5>

              <div class="d-flex align-items-center">
                <div class="card-icon rounded-circle d-flex align-items-center justify-content-center">
                  <i class="bx bxs-traffic"></i>
                </div>
                <div class="ps-3">
                  <h6>{{ dashboardStore.kavsakSayisi }}</h6>
                </div>
              </div>
            </div>
          </div>
        </div><!-- End Kavsak Card -->

        <!-- Vtt Card -->
        <div class="col-xxl-3 col-md-6">
          <div class="card info-card sales-card">

            <div class="card-body">
              <h5 class="card-title">Toplam VTT Sayısı </h5>

              <div class="d-flex align-items-center">
                <div class="card-icon rounded-circle d-flex align-items-center justify-content-center">
                  <i class="bx bx-broadcast"></i>
                </div>
                <div class="ps-3">
                  <h6>{{ dashboardStore.vttSayisi }}</h6>
                </div>
              </div>
            </div>
          </div>
        </div><!-- End Vtt Card -->
      </div>
    </section>
</template>

<script setup>
// @ is an alias to /src
import { onMounted } from 'vue';
import { useDashboardStore } from "../stores/dashboard";
const dashboardStore = useDashboardStore()

onMounted(() => {
  dashboardStore.dbKavsakSayisi()
  dashboardStore.dbVttSayisi()
})
</script>
