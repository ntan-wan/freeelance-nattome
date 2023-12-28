<script setup>
const props = defineProps({
  pImg: { type: String, default: '' },
  pText: { type: String, default: '' },
});
</script>

<template>
  <div class="member-item-wrapper">
    <div>
      <slot name="icon"></slot>
    </div>
    <label class="text block"><slot name="text"></slot></label>
  </div>
</template>

<style scoped lang="scss">
.member-item-wrapper {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  .text {
    color: #1d2939;
    font-size: 1.5rem;
    font-style: normal;
    font-weight: 600;
    line-height: 1.3;
  }
}
</style>
