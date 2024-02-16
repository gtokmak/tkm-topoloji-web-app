<template>
    <tr>
    <th scope="row">{{ kamera.id }}</th>
    <td>{{ kamera.name }}</td>
    <td>{{ kamera.host }}</td>
    <td>{{ kamera.port }}</td>
    <td>{{ kamera.username }}</td>
    <td>{{ kamera.password }}</td>
    <td>
        <span class="badge bg-success" v-if="kamera.status"> Akif </span>
        <span class="badge bg-danger" v-else> Pasif </span>
    </td>
    </tr>
</template>
    
<script setup >
defineProps({
    kamera:{}
})
</script>
    
<style>
    
</style>