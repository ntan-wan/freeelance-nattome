<script setup>
import { Carousel, Slide, Pagination, Navigation } from 'vue3-carousel';
import dummyProduct from '@/assets/imgs/dummyProduct.png';
import 'vue3-carousel/dist/carousel.css';

const breakpoints = {
  // 700px and up
  700: {
    itemsToShow: 2.5,
    snapAlign: 'center',
  },
  // 1024 and up
  1024: {
    itemsToShow: 2.5,
    snapAlign: 'start',
  },
};
const settings = {
  itemsToShow: 1,
  snapAlign: 'center',
};

/* states */
const dummyData = [
  {
    id: 1,
    img: dummyProduct,
    name: 'Stomach Food',
    price: 200,
    amount: 1,
  },
  {
    id: 2,
    img: dummyProduct,
    name: 'Stomach Food',
    price: 200,
    amount: 1,
  },
  {
    id: 3,
    img: dummyProduct,
    name: 'Stomach Food',
    price: 200,
    amount: 1,
  },
  {
    id: 4,
    img: dummyProduct,
    name: 'Stomach Food',
    price: 200,
    amount: 1,
  },
  {
    id: 5,
    img: dummyProduct,
    name: 'Stomach Food',
    price: 200,
    amount: 1,
  },
];
</script>

<template>
  <Carousel v-bind="settings" wrap-around :breakpoints="breakpoints">
    <Slide v-for="(product, i) in dummyData" :key="i">
      <div class="carousel__item">
        <h6 class="title">{{ product.amount }} Box</h6>
        <div>
          <img :src="product.img" />
        </div>
        <p class="mt-[1.5rem] name">
          <b>{{ product.name }}</b>
        </p>
        <p class="mt-[0.75rem] price !text-sm">RM {{ product.price }}</p>
        <small class="info block">Original Price</small>
        <CustomButton
          size="large"
          class="mt-[1.5rem] text-xl"
          rounded
          label="Add To Cart"
        />
      </div>
    </Slide>

    <template #addons>
      <Navigation />
    </template>
  </Carousel>
</template>

<style scoped lang="scss">
.carousel__item {
  border-radius: 1rem;
  //   opacity: 0.4;
  background: #f2f4f7;
  padding: 1.5rem;
  padding-bottom: 3.19rem;

  .title {
    color: #000;
    font-size: 2rem;
    font-style: normal;
    font-weight: 500;
    line-height: 1.3;
  }

  .name {
    color: #000;
    font-size: 1.25rem;
    font-style: normal;
    font-weight: 500;
    line-height: 1.3;
  }

  .price {
    color: #1d2939;
    font-size: 4rem;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
  }

  .info {
    color: #667085;
    font-size: 1rem;
    font-style: normal;
    font-weight: 500;
    line-height: 1.3rem;
  }
}

.carousel__slide {
  padding: 5px;
}
</style>
