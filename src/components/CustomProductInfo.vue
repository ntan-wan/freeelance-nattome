<script setup>
const props = defineProps({
  pProduct: { type: Object, default: {} },
});
</script>

<template>
  <div class="product p-4">
    <div class="flex flex-wrap">
      <div class="basis-full lg:basis-5/12">
        <FadeAnim>
          <img
            :src="props.pProduct.img"
            :key="pProduct.id"
            class="w-full rounded-[10px]"
            height="300"
          />
        </FadeAnim>
      </div>
      <div class="basis-full lg:basis-7/12 flex flex-col">
        <h6 class="product-title">Ingredients</h6>
        <FadeAnim>
          <p class="product-description" :key="props.pProduct.id">
            {{ pProduct.description }}
          </p>
        </FadeAnim>
        <h6 class="mt-auto product-title">Nutritions</h6>
      </div>
    </div>
    <FadeAnim>
      <div class="mt-7 flex flex-wrap lg:flex-nowrap" :key="props.pProduct.id">
        <div class="basis-6/12">
          <p class="nutrient-value">66</p>
          <p class="nutrient-type">Calories</p>
        </div>
        <div class="basis-6/12">
          <p class="nutrient-value">8.7g</p>
          <p class="nutrient-type">Carbs</p>
        </div>
        <div class="basis-6/12">
          <p class="nutrient-value">1.1g</p>
          <p class="nutrient-type">Fats</p>
        </div>
        <div class="basis-6/12">
          <p class="nutrient-value">5.8g</p>
          <p class="nutrient-type">Protein</p>
        </div>
        <div class="basis-6/12">
          <p class="nutrient-value">1.7g</p>
          <p class="nutrient-type">
            Dietary<br />
            Fibre
          </p>
        </div>
        <div class="basis-6/12">
          <p class="nutrient-value">0.8g</p>
          <p class="nutrient-type">Sugar</p>
        </div>
        <div class="basis-6/12">
          <p class="nutrient-value">0.6mg</p>
          <p class="nutrient-type text-left">Sodium</p>
        </div>
      </div>
    </FadeAnim>
  </div>
</template>

<style scoped lang="scss">
.product {
  background-color: #fefbe8;
  border-radius: 1.5rem;
  // padding: 2.25rem;
  .product-title {
    color: #1d2939;
    font-size: 1.5rem;
    font-style: normal;
    font-weight: 600;
    line-height: 1.3;
    margin-bottom: 0.5rem;
  }

  .product-description {
    color: #667085;
    font-size: 1rem;
    font-style: normal;
    font-weight: 400;
    line-height: 1.3;
  }

  .nutrient-value {
    color: #1d2939;
    font-size: 1.5rem;
    font-style: normal;
    font-weight: 600;
    line-height: 1.3;
  }

  .nutrient-type {
    color: #667085;
    font-size: 1rem;
    font-style: normal;
    font-weight: 400;
    line-height: 1.3;
  }
}
</style>
