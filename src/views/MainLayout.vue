<script setup>
  import { ref } from "vue";
  import { RouterView } from 'vue-router'
  import Header from "@/components/Header.vue";
  import Aside from '@/components/Aside.vue';
  import TheFooter from '@/components/TheFooter.vue'

  const toogleSideBar=ref();

  function toogleSide(n) {
    toogleSideBar.value = n
  }

</script>

<template>
  <div :class="{'toggle-sidebar':toogleSideBar}">
    <Header @toogleSide="toogleSide"></Header>
    <Aside></Aside>
    <main id="main" class="main">
      <RouterView />
    </main><!-- End #main -->
    <TheFooter/>
  </div>
</template>

<style scoped>

</style>
