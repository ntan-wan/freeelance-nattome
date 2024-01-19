<script setup>
import visaLogo from '@/assets/imgs/visaLogo.webp';
import masterLogo from '@/assets/imgs/masterLogo.webp';
import paypalLogo from '@/assets/imgs/paypalLogo.jpg';
</script>

<template>
  <footer class="footer-base">
    <div class="flex flex-wrap justify-between px-[2rem]">
      <section class="basis-full sm:basis-4/12">
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

      <section class="basis-full sm:basis-4/12">
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

      <section class="basis-full sm:basis-4/12">
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
        <div class="flex">
          <CustomInputText
            placeholder="Enter your email address"
            class="bg-transparent border-[#3b3b3b] flex-grow"
          />
          <CustomButton
            class="ml-2 !bg-[#3b3b3b] !border-[#3b3b3b]"
            label="Submit"
          />
        </div>
      </section>
    </div>
    <hr class="my-[3rem] border-[grey]" />
    <div class="footer-bottom px-[2rem]">
      <p>© 2022 Nattōme. All Rights Reserved.</p>
      <p class="mt-[1rem]">
        Powered By
        <a
          class="footer-link"
          href="https://www.z21studio.com/?utm_source=onlinestore&amp;utm_medium=nattome&amp;utm_campaign=poweredby"
          >Z21 STUDIO</a
        >
      </p>
      <div class="flex gap-[1rem] mt-[3rem]">
        <img :src="visaLogo" />
        <img :src="masterLogo" />
        <img :src="paypalLogo" />
      </div>
    </div>
  </footer>
</template>

<style scoped lang="scss">
.footer-base {
  // padding: 1rem;
  padding-top: 37px;
  padding-bottom: 37px;
  // padding-left: 2rem;
  // padding-right: 2rem;
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

.footer-bottom {
  color: #969696;

  .footer-link {
    color: #969696;
    text-decoration: none;
  }
}
</style>
