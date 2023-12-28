<script setup>
import CustomFooter from '@/components/CustomFooter.vue';
</script>

<template>
  <div class="layout-base">
    <CustomBanner></CustomBanner>
    <CustomNavbar></CustomNavbar>
    <main class="layout-content-grow">
      <slot />
    </main>
    <CustomFooter></CustomFooter>
  </div>
</template>
