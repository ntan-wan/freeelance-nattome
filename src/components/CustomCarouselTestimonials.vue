<script setup>
import { ref } from 'vue';
import { Carousel, Slide, Pagination, Navigation } from 'vue3-carousel';
import Rating from 'primevue/rating';
import 'vue3-carousel/dist/carousel.css';

import dummyAvatar from '@/assets/imgs/dummyAvatar.png';
import dummyAvatar2 from '@/assets/imgs/dummyAvatar2.png';
import dummyAvatar3 from '@/assets/imgs/dummyAvatar3.png';

const testimonials = ref([
  {
    rating: 5,
    value:
      ' I had GERD for a few months and had been on medication , it temporary stop my symptom. My collegue recommended Nattome Stomach Food to me and I tried it. It helped me with my GERD and now I no longer have it anymore. Highly recommended to anyone with GERD.',
    name: 'Jolene Vern Ying',
    img: dummyAvatar3,
  },
  {
    rating: 5,
    value:
      ' Ever since i started Nattome, i stopped my medication for GERD completely and have not experience major attack episode after that. Highly recommend to other people that experience the same issue like me, Nattome really helps.',
    name: 'Junxiang Wong',
    img: dummyAvatar2,
  },
  {
    rating: 5,
    value:
      ' My son always have minor stoma pain. After taking Nattome, he seem much better. No more constipation and improved a lot less gastric pain too. I will continue let my kids eat and introduce to friends',
    name: 'Carmen Chai',
    img: dummyAvatar,
  },
]);

const breakpoints = {
  // 700px and up
  700: {
    itemsToShow: 2.5,
    snapAlign: 'center',
  },
  // 1024 and up
  1024: {
    itemsToShow: 2.5,
    snapAlign: 'center',
  },
};
</script>

<template>
  <Carousel :wrapAround="true" :transition="500" :breakpoints="breakpoints">
    <Slide v-for="(testimony, i) in testimonials" :key="i">
      <div class="carousel__item">
        <Rating
          :pt="{
            onIcon: { style: { color: '#ec9c1f' } },
          }"
          :modelValue="testimony.rating"
          readonly
          :cancel="false"
        />
        <p class="my-8 item-text text-left">
          {{ testimony.value }}
        </p>
        <div class="flex gap-2 items-center">
          <CustomAvatar shape="circle" :image="testimony.img" />
          <p class="witness-name">{{ testimony.name }}</p>
        </div>
      </div>
    </Slide>

    <template #addons>
      <Navigation />
    </template>
  </Carousel>
</template>

<style scoped lang="scss">
.carousel__item {
  background: #fff;
  box-shadow: 0px 28.933px 61.56px 0px rgba(21, 21, 21, 0.15);
  padding: 2rem 1rem;

  .item-text {
    color: #667085;
    font-size: 1rem;
    font-style: normal;
    font-weight: 400;
    line-height: 1.3;
  }

  .witness-name {
    color: #000;
    // font-family: Manrope;
    font-size: 0.875rem;
    font-style: normal;
    font-weight: 800;
    line-height: normal;
  }
}

.carousel__slide {
  padding: 5px;
}

.carousel__viewport {
  perspective: 2000px;
}

.carousel__track {
  transform-style: preserve-3d;
}

.carousel__slide--sliding {
  transition: 0.5s;
}

.carousel__slide {
  opacity: 0.9;
  transform: rotateY(-20deg) scale(0.9);
}

.carousel__slide--active ~ .carousel__slide {
  transform: rotateY(20deg) scale(0.9);
}

.carousel__slide--prev {
  opacity: 1;
  transform: rotateY(-10deg) scale(0.95);
}

.carousel__slide--next {
  opacity: 1;
  transform: rotateY(10deg) scale(0.95);
}

.carousel__slide--active {
  opacity: 1;
  transform: rotateY(0) scale(1.1);
}

.carousel__prev {
}
</style>
