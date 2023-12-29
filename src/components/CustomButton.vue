<script setup>
import Button from 'primevue/button';

const props = defineProps({
  pt: { type: Object, default: {} },
  size: { type: String, default: '' },
});
</script>

<template>
  <Button :pt="props.pt" :size="props.size"><slot></slot></Button>
</template>

<style scoped lang="scss">
.p-button {
  background-color: #502414;
  border: 1px solid #502414;
  //   border-radius: 100px;
  padding-left: 1.8rem;
  padding-right: 1.8rem;
}
.p-button-rounded {
  border-radius: 100px;
}
.p-button-text {
  background-color: transparent;
  border: 1px solid transparent;
}
</style>
