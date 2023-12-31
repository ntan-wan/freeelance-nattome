<script setup>
import CustomFooter from '@/components/CustomFooter.vue';
</script>

<template>
  <div class="layout-base">
    <div class="">
      <CustomBanner></CustomBanner>
      <CustomNavbar></CustomNavbar>
    </div>
    <main class="layout-content-grow">
      <slot />
    </main>
    <CustomFooter></CustomFooter>
  </div>
</template>
