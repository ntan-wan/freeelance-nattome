<script setup>
import IconLorry from '@/components/icons/LorryIcon.vue';
</script>

<template>
  <div class="banner-base">
    <p class="banner-content">
      <IconLorry class="hidden sm:block" />
      Free shipping for purchase above RM400 | West Malaysia
    </p>
  </div>
</template>

<style scoped lang="scss">
.banner-base {
  background-color: var(--color-primary);
  // min-height: 36px;
  display: flex;
  align-items: center;
  justify-content: center;
  // position: fixed;
  width: 100%;
  z-index: 10;
  padding: 1rem;

  .banner-content {
    color: var(--color-white);
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 0.5rem;
  }
}
</style>
