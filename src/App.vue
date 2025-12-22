<script setup lang="ts">
import HeaderComponent from './components/HeaderComponent.vue';
import FooterComponent from './components/FooterComponent.vue';
</script>

<template>

  <main>
    <header-component/>
    <div class="wrapper">
      <router-view/>
    </div>
    <FooterComponent/>
  </main>
</template>

<style scoped>
.wrapper {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
}
</style>
