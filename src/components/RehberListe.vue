<template>
    <table class="table table-hover">
        <thead>
            <tr>
            <th scope="col">#</th>
            <th scope="col">İsim</th>
            <th scope="col">Müdürlük</th>
            <th scope="col">Birim</th>
            <th scope="col">Numara</th>
            </tr>
        </thead>
        <tbody>
            <RehberListeKisi v-for="detay in kisiler" :key="detay.id" :kisi="detay"></RehberListeKisi>
        </tbody>
    </table>
</template>

<script setup>
import  RehberListeKisi  from "./RehberListeKisi.vue";
defineProps({
    kisiler:{}
})
</script>

<style>

</style>