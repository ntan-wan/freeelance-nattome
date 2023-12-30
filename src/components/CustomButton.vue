<script setup>
import Button from 'primevue/button';
// import { computed, useAttrs } from 'vue';
// import { twMerge } from 'tailwind-merge';

// const attrs = useAttrs();

// const buttonClass = computed(() => {
//   return twMerge(
//     'font-bold text-3xl justify-center text-red-500 ',
//     attrs.class
//   );
// });

// const btnPtModel = {
//   root: null,
//   loadingIcon: null,
//   icon: null,
//   label: null,
//   badge: null,
//   hooks: null,
// };

// const btnPt = {
//   ...btnPtModel,
//   root: twMerge('bg-[#502414] border-[#502414] text-white', attrs.class),
// };
</script>

<template>
  <Button><slot></slot></Button>
</template>

<style scoped lang="scss">
.p-button {
  background-color: #502414;
  border: 1px solid #502414;
  padding-left: 1.8rem;
  padding-right: 1.8rem;

  &:not(.p-button-icon-only):hover {
    background-color: mix(black, #502414, 20%);
  }

  &.p-button-icon-only {
    padding: 0;
  }

  &.p-button-rounded {
    border-radius: 100px;
  }

  &.p-button-text {
    background-color: transparent;
    border: 1px solid transparent;
  }
}
</style>
