<script setup>
  import { ref, watch, markRaw  } from "vue";
  import { useRoute } from 'vue-router';
  import LoginLayout from "@/views/LoginLayout.vue";
  import MainLayout from "@/views/MainLayout.vue";

  const layout = ref();
  const route = useRoute()

  watch(()=> route.meta.layout, (value) => {
    if (value == 'MainLayout')
    { 
      layout.value =markRaw(MainLayout);
    }
    else
    {  
      layout.value =markRaw(LoginLayout);
    }
  })

</script>

<template>
  <component :is="layout"></component>
</template>

<style >
.full-section-height {
  min-height: calc(100vh- 130px);
}
</style>
