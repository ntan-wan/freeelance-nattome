<script setup>
import { computed } from 'vue';

const props = defineProps({
  pHeader: { type: String, default: '' },
  pIsActive: { type: Boolean, default: false },
});

const cardClass = computed(() => {
  return props.pIsActive ? 'active' : '';
});
</script>

<template>
  <div class="card-base" :class="cardClass">
    <h5 v-if="props.pHeader" class="card-title">{{ props.pHeader }}</h5>
    <p class="card-text mt-12">
      <slot name="content"></slot>
    </p>
  </div>
</template>

<style scoped lang="scss">
.card-base {
  padding: 1.5rem;
  padding-bottom: 3rem;
  border-radius: 0.5rem;

  .card-title {
    color: #1d2939;
    font-size: 1.5rem;
    font-style: normal;
    font-weight: 700;
    line-height: 1.3;
  }

  .card-text {
    color: #667085;
    font-size: 0.875rem;
    font-style: normal;
    font-weight: 400;
    line-height: 1.3;
  }

  &.active {
    background: linear-gradient(
      180deg,
      #ffedac 0%,
      rgba(254, 246, 237, 0) 119.98%
    );
  }
}
</style>
