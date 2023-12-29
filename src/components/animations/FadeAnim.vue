<template>
  <Transition name="fade" mode="out-in" :duration="{ enter: 300, leave: 300 }">
    <slot></slot>
  </Transition>
</template>

<style scoped lang="scss">
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
