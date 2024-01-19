<script setup>
import { ref } from 'vue';

import Menubar from 'primevue/menubar';
import SearchIcon from '@/components/icons/SearchIcon.vue';
import ShoppingCartIcon from '@/components/icons/ShoppingCartIcon.vue';
import UserIcon from '@/components/icons/UserIcon.vue';
import logoImg from '@/assets/imgs/logoImg.svg';

const items = ref([
  {
    label: 'Home',
  },
  {
    label: 'Products',
  },
  {
    label: 'About Us',
  },
  {
    label: 'Videos',
  },
  {
    label: 'FAQs',
  },
  {
    label: 'Contact Us',
  },
]);
</script>

<template>
  <!-- <Menubar :model="items" class="px-20 py-6"> -->
  <Menubar :model="items" class="">
    <template #start> <img :src="logoImg" /> </template>
    <template #end>
      <div class="menubar-end-wrapper">
        <CustomButton text icon="pi">
          <SearchIcon />
        </CustomButton>
        <CustomButton text icon="pi">
          <ShoppingCartIcon />
        </CustomButton>
        <CustomButton text icon="pi">
          <UserIcon />
        </CustomButton>
      </div>
    </template>
  </Menubar>
</template>

<style scoped lang="scss">
.p-menubar {
  // background-color: transparent;
  display: flex;
  align-items: center;
  // justify-content: space-between;
  position: fixed;
  width: 100%;
  // top: var(--banner-height);
  top: 40px;
  // backdrop-filter: blur(10px);
  background-color: #fefbe8;
  padding: 2rem 5.62rem;
  border: 1px solid transparent;
  z-index: 10;
}

:deep(.p-menubar-button) {
  // margin-left: 0.5rem;
  margin-left: auto;
}

:deep(.p-menubar-root-list) {
  @media screen and (min-width: 768px) {
    margin: 0 auto;
  }
}

:deep(.p-menubar-end) {
  margin-left: auto;
  // display: none;
  @media screen and (min-width: 1024px) {
    margin: 0;
  }
}

.menubar-end-wrapper {
  display: flex;
  align-items: center;
  gap: 1.75rem;
}
</style>
