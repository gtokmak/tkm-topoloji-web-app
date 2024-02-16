<template>
    <tr>
    <th scope="row">{{ kisi.id }}</th>
    <td>{{ kisi.isim }}</td>
    <td>{{ kisi.mudurluk }}</td>
    <td>{{ kisi.birim }}</td>
    <td>{{ kisi.numara }}</td>
    </tr>
</template>
    
<script setup >
defineProps({
    kisi:{}
})
</script>
    
<style>
    
</style>