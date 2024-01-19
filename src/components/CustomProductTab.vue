<script setup>
import product from '@/assets/imgs/productImg-1.png';
import Button from 'primevue/button';

const props = defineProps({
  pData: { type: Object, default: {} },
});
const emits = defineEmits(['productClicked']);

/* event handlers */
function handleProduct() {
  emits('productClicked', props.pData);
}
</script>

<template>
  <Button @click="handleProduct">
    <h3 class="product-title">{{ props.pData.name }}</h3>
    <div>
      <img class="product-img" :src="props.pData.img" />
    </div>
  </Button>
</template>

<style scoped lang="scss">
.p-button {
  border-radius: 1rem;
  background: #fafafc;
  display: flex;
  padding: 1rem;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  border: 1px solid transparent;

  &:focus {
    box-shadow: none;
  }

  &:hover {
    background-color: mix(black, #fafafc, 10%);
  }
}

.product-title {
  color: #1d2939;
  font-size: 2rem;
  font-style: normal;
  font-weight: 400;
  line-height: 1.3;
}

.product-img {
  border-radius: 10px;
}
</style>
