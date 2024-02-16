<template>
    <div class="d-flex">
        <div class="d-flex ">
            <button class="btn btn-primary m-2" @click="add">Kamera Ekle</button><br />
        </div>
        <div class="d-flex">
            <button class="btn btn-warning m-2" @click="update">Kamera Güncelle</button><br />
        </div>
        <div class="d-flex">
            <button class="btn btn-danger m-2" @click="remove">Kamera Sil</button>
        </div>
    </div>
    <br>

    <div class="">
        <DataTable :data="kameralar" :columns="columns" class="display table"
            :options="
            {responsive:true, autoWidth:false, select:'single', dom:'lfrBtip',
                    language:{
                    search:'Ara', zeroRecords:'Hiç kayıt yok.',
                    info:'Toplam:_TOTAL_ kayıttan _START_ ile _END_ arası kayıtlar.',
                    infoFiltered: '(_MAX_ Kayıttan filtrenen _TOTAL_ kayıt var.)',
                    paginate:{first:'İlk Sayfa', previous:'Önceki', next:'Sonraki', last:'Son Sayfa'}
                    },
                    buttons:buton
            }"
            ref="table"
        >
            <thead>
                <tr>
                <th scope="col">#</th>
                <th scope="col">İsim</th>
                <th scope="col">Ip</th>
                <th scope="col">Port</th>
                <th scope="col">Kullanıcı Adı</th>
                <th scope="col">Parola</th>
                <th scope="col">Durum</th>
                </tr>
            </thead>
        </DataTable>
    </div>


</template>

<script setup lang="ts">

defineProps({
    kameralar:{}
})
import {ref, onMounted} from 'vue';

import DataTable from "datatables.net-vue3";
import DataTablesCore from 'datatables.net';
import DataTableLib from "datatables.net-bs5";
import 'datatables.net-select-bs5';
import Buttons from "datatables.net-buttons-bs5"
import ButtonsHtml5 from "datatables.net-buttons/js/buttons.html5";
import print from "datatables.net-buttons/js/buttons.print";
import pdfmake from "pdfmake";
import pdfFonts from "pdfmake/build/vfs_fonts";
pdfmake.vfs= pdfFonts.pdfMake.vfs;
import "datatables.net-responsive-bs5";

import JsZip from "jszip";
window.JSZip=JsZip;
DataTable.use(DataTablesCore);
DataTable.use(DataTableLib);
DataTable.use(pdfmake);
DataTable.use(Buttons);
DataTable.use(ButtonsHtml5);
DataTable.use(print);

const columns =[
    {data:null, render:function(data, type, row, meta){return `${meta.row+1}`}},
    {data:'name'},
    {data:'host'},
    {data:'port'},
    {data:'username'},
    {data:'password'},
    {data:'status', render:function(data, type, row, meta){return (data ? '<span class="badge bg-success">Aktif</span>':'<span class="badge bg-danger">Pasif</span>')}}
];

const buton = [
    {
        title:'Kameralar',
        extend:'excelHtml5',
        text:'<i class="fa-solid fa-file-excel"></i> Excel',
        className:'btn btn-success'
    },
    {
        title:'Kameralar',
        extend:'pdfHtml5',
        text:'<i class="fa-solid fa-file-pdf"></i> PDF',
        className:'btn btn-danger'
    },
    {
        title:'Kameralar',
        extend:'print',
        text:'<i class="fa-solid fa-print"></i> Yazdır',
        className:'btn btn-dark'
    }
    ,
    {
        title:'Kameralar',
        extend:'copy',
        text:'<i class="fa-solid fa-copy"></i> Kopyala',
        className:'btn btn-light'
    }
];

import { useKameraStore } from "../stores/kamera";
const kameraStore = useKameraStore()

let dt;
const table = ref();

onMounted(function () {
  dt = table.value.dt;
});

function add() {
    dt.rows({ selected: true }).every(function () {
    console.log(`output->idx`,this.data())
  });

}

function remove() {
    dt.rows({ selected: true }).every(function () {
        kameraStore.deleteKamera(this.data().id)
    });
}

function update() {
  dt.rows({ selected: true }).every(function () {
    let idx = this.kameralar.value.indexOf(this.kameralar());
    this.kameralar.value.splice(idx, 1);
  });
}

</script>

<style >
@import 'datatables.net-dt';
@import 'datatables.net-select-dt';
</style>
