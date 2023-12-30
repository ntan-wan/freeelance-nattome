<template>
  <footer class="footer-base">
    <div class="flex justify-between border-bottom">
      <section>
        <p class="mb-3">
          <b class="title">NATTŌME</b>
        </p>
        <ul class="list-none">
          <li>About Us</li>
          <li>FAQs</li>
          <li>Terms & Conditions</li>
          <li>Privacy & Policy</li>
        </ul>
      </section>

      <section>
        <p class="mb-3">
          <b class="title">CUSTOMER</b>
        </p>
        <ul class="list-none">
          <li>Contact Us</li>
          <li>Return & Refund</li>
          <li>Terms of Service</li>
          <li>Refund policy</li>
        </ul>
      </section>

      <section>
        <p class="mb-3">
          <b class="title">STAY CONNECTED</b>
        </p>
        <div class="mt-1.5">
          <CustomButton
            text
            rounded
            icon="pi pi-facebook text-white text-3xl"
          />
          <CustomButton
            text
            rounded
            icon="pi pi-instagram text-white text-3xl"
          />
        </div>
        <p class="title mt-8 mb-3"><b>SUBSCRIBE FOR PROMOTIONS</b></p>
        <CustomInputText
          placeholder="Enter your email address"
          class="bg-transparent border-[#3b3b3b]"
        />
        <CustomButton
          :pt="{
            root: { style: { backgroundColor: '#3b3b3b', border: '#3b3b3b' } },
          }"
          class="ml-2"
          label="Submit"
        />
      </section>
    </div>
    <div>
      <div></div>
    </div>
  </footer>
</template>

<style scoped lang="scss">
.footer-base {
  padding: 1rem;
  padding-top: 37px;
  padding-left: 5rem;
  padding-right: 5rem;
  background-color: #232323;

  .title {
    font-size: 15px;
    font-weight: 700;
    color: #fafafa;
  }
  li {
    color: #969696;
    padding: 3px;
    line-height: 24px;
  }
}
</style>
