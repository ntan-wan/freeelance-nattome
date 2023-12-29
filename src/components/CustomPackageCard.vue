<template>
  <div class="package-card-base flex flex-col">
    <h5 class="title">
      Select <br />Package<br />
      Offer
    </h5>
    <!-- <p class="text-wrapper">More discounts are waiting for you</p> -->
    <CustomButton
      :pt="{
        root: {
          style: { backgroundColor: 'white', border: '2px solid #e2c360' },
        },
      }"
      rounded
      label="More discounts are waiting for you"
      class="mt-auto text-[#7F4B1F]"
    />
  </div>
</template>

<style scoped lang="scss">
.package-card-base {
  background-color: #7f4b1f;
  border-radius: 1rem;
  // min-height: 531px;
  min-height: 100%;
  padding: 2rem 1.8rem;

  .title {
    color: #f2f4f7;
    font-size: 2.25rem;
    font-style: normal;
    font-weight: 600;
    line-height: 1.3; /* 102.778% */
  }
  .text-wrapper {
    border-radius: 6.25rem;
    font-size: 1rem;
    font-style: normal;
    font-weight: 400;
    line-height: 1.3;
  }
}
</style>
