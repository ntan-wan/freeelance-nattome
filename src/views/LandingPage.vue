<script setup>
import { ref } from 'vue';
import NaturalIngredientIcon from '@/components/icons/NaturalIngredientIcon.vue';
import CoffeeIcon from '@/components/icons/CoffeeIcon.vue';
import NonMedicineIcon from '@/components/icons/NonMedicineIcon.vue';
import WheatIcon from '@/components/icons/WheatIcon.vue';
import PresentIcon from '@/components/icons/PresentIcon.vue';
import AnnualBuyIcon from '@/components/icons/AnnualBuyIcon.vue';
import MsgIcon from '@/components/icons/MsgIcon.vue';
import WhatsappIcon from '@/components/icons/WhatsappIcon.vue';
import PresentOpenIcon from '@/components/icons/PresentOpenIcon.vue';

import heroImg2 from '@/assets/imgs/heroImg-2.png';
import product from '@/assets/imgs/productImg-1.png';
import product2 from '@/assets/imgs/productImg-2.png';
import apcLogo from '@/assets/imgs/APCLogo.png';
import bioeconomyLogo from '@/assets/imgs/bioeconomyLogo.png';
import gmpLogo from '@/assets/imgs/GMPLogo.png';
import haccpLogo from '@/assets/imgs/HACCPLogo.png';
import halalLogo from '@/assets/imgs/HALALLogo.png';
import kkmLogo from '@/assets/imgs/KKMLogo.png';
import mestiLogo from '@/assets/imgs/MestiLogo.png';
import mhlLogo from '@/assets/imgs/MHLogo.png';
import nhLogo from '@/assets/imgs/NHLogo.png';
import gastroADImg from '@/assets/imgs/gastroADImg.png';

import CustomCarouselTestimonials from '@/components/CustomCarouselTestimonials.vue';
import CustomCarouselProducts from '@/components/CustomCarouselProducts.vue';
import CustomProductInfo from '@/components/CustomProductInfo.vue';

/* states */
const dummyProducts = [
  {
    id: 1,
    name: 'Stomach Food Oath',
    img: product,
    description:
      ' Isolated Soy Protein, Oat Milk Powder, Whole Oat Flour Powder, Maltodextrin, Fiberligo ( Resistant Dextrin ), Gastro-AD ( Fermeted Soy), DigeSEB ProTM (Lactase, Proteases, Cellulase, Lipase, Amylase, Pectinase, Papain, Bromelain ), ProbiocapTM B.longum Roselle-175',
  },
  {
    id: 2,
    name: 'R&R Fast Relief Powder',
    img: product2,
    description:
      'eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim  aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
  },
];
const selectedProductId = ref(1);

/* util functions */
function getProduct(products, productId) {
  return products.find((product) => product.id === productId);
}

/* event handlers */
function handleProduct(product) {
  selectedProductId.value = product.id;
}
</script>

<template>
  <div class="landing-page">
    <section class="section-base section-hero flex">
      <div class="flex items-center w-1/2">
        <div
          class="pl-20"
          v-animateonscroll="{ enterClass: 'onScroll-fadeInLeft' }"
        >
          <h1 class="hero-title">Plant-Based</h1>
          <p class="hero-description">Health Products for Gut Care</p>
          <p class="hero-description-small mt-10">
            Nattome endeavors to bring the best for our customers in terms
            <br />
            of quality, safety and experience from our products.
          </p>
          <CustomButton label="Buy Now" rounded class="mt-16 text-2xl" />
        </div>
      </div>
    </section>

    <section class="section-base section-second">
      <CustomContainer>
        <div
          class="flex flex-col lg:flex-row gap-4 justify-between items-center"
        >
          <div class="grow shrink-0">
            <h2 class="title">Light Breakfast for Gut Health</h2>
            <small class="subtitle"
              >Why don't you try Nattome Stomach food?</small
            >
          </div>
          <p class="description grow text-center lg:text-right">
            Nattome endeavors to bring the best for our customers in terms of
            <br />
            quality, safety and experience from our products.
          </p>
        </div>

        <div class="mt-16 flex flex-wrap justify-between">
          <div class="basis-1/2 md:basis-3/12">
            <CustomIconWrapper>
              <NaturalIngredientIcon />
            </CustomIconWrapper>
            <h4 class="icon-title mt-4">Natural Ingredients</h4>
          </div>
          <div class="basis-1/2 md:basis-3/12">
            <CustomIconWrapper>
              <CoffeeIcon />
            </CustomIconWrapper>
            <h4 class="icon-title mt-4">Tasty & Smooth</h4>
          </div>
          <div class="basis-1/2 md:basis-3/12">
            <CustomIconWrapper>
              <WheatIcon />
            </CustomIconWrapper>
            <h4 class="icon-title mt-4">Variety of Flavour</h4>
          </div>
          <div class="basis-1/2 md:basis-3/12">
            <CustomIconWrapper>
              <NonMedicineIcon />
            </CustomIconWrapper>
            <h4 class="icon-title mt-4">Non-Medicinal</h4>
          </div>
        </div>

        <h2 class="our-solution-title mt-20 text-center">Our Solutions</h2>
        <div class="mt-9 flex flex-wrap justify-between">
          <CustomCardSolution
            pIsActive
            pHeader="Optimize Gastric PH Value"
            class="basis-1/2 lg:basis-3/12"
          >
            <template #content>
              Nattome contains Gastro-AD which lowers gastric level to
              1.9-4.7.Reduce gastric pain and heartburn.
            </template>
          </CustomCardSolution>
          <CustomCardSolution
            pHeader="Reduce Gastric & Protease Production"
            class="basis-1/2 lg:basis-3/12"
          >
            <template #content>
              Lactobacillus digests protein and release peptide to reduce the
              activation of interleukin which directly reduces damage towards
              our gastric mucosa.
            </template>
          </CustomCardSolution>
          <CustomCardSolution
            class="basis-1/2 lg:basis-3/12"
            pHeader="Strengthen Gastric Repair & Immune System"
          >
            <template #content>
              With Lactobacillus Nattome prevents inflammation and reduce
              production of interleukin, protecting our gastric mucosa.
            </template>
          </CustomCardSolution>
          <CustomCardSolution
            class="basis-1/2 lg:basis-3/12"
            pHeader="Effective and Best for Gastric Maintenance"
          >
            <template #content>
              Takes 10 minutes to relieve gastric symptomsIncrease immunity and
              repairability of stomach in the short termHeal stomach lining and
              improve digestion in the long term
            </template>
          </CustomCardSolution>
        </div>
      </CustomContainer>
    </section>

    <section class="section-base section-third">
      <CustomContainer>
        <div class="flex flex-wrap">
          <div
            v-animateonscroll="{ enterClass: 'onScroll-fadeInLeft' }"
            class="basis-full md:basis-1/2 p-4"
          >
            <img :src="heroImg2" class="w-full" />
          </div>
          <div
            v-animateonscroll="{ enterClass: 'onScroll-fadeInRight' }"
            class="basis-full md:basis-1/2 p-4 flex flex-col items-center justify-center"
          >
            <div>
              <h3 class="title">Nattome Stomach Food</h3>
              <p class="text mt-4">
                is a specially formulated cultured soybean meal with oats
                designed to alleviate symptoms associated with acid reflux and
                promote gut health. It requeres minimal preparation and is
                suitable for daily maintanence.
              </p>
            </div>
          </div>
        </div>
      </CustomContainer>
    </section>

    <section class="section-base section-four">
      <CustomContainer>
        <div class="flex flex-wrap">
          <!-- <div class="col-span-full md:col-span-5"> -->
          <div class="basis-full lg:basis-5/12 order-2 lg:order-1">
            <h3 class="title mb-8">Our Products</h3>
            <CustomProductTab
              v-for="(product, i) in dummyProducts"
              @productClicked="handleProduct"
              :key="i"
              class="mb-4"
              :pData="product"
            ></CustomProductTab>
          </div>
          <div class="basis full lg:basis-7/12 order-1 lg:order-2">
            <CustomProductInfo
              v-animateonscroll="{ enterClass: 'onScroll-fadeInRight' }"
              :pProduct="getProduct(dummyProducts, selectedProductId)"
            />
          </div>
        </div>
      </CustomContainer>
    </section>

    <section class="section-base section-package">
      <CustomContainer>
        <div class="flex flex-wrap">
          <div class="basis-full lg:basis-4/12 hidden lg:block">
            <CustomPackageCard></CustomPackageCard>
          </div>
          <div class="basis-full lg:basis-8/12">
            <CustomCarouselProducts />
          </div>
        </div>
      </CustomContainer>
    </section>

    <div class="bg-yellow-custom pt-10 pb-9">
      <section class="section-base section-member-vip">
        <CustomContainer>
          <h3 class="title text-center">Testimonials</h3>
          <CustomCarouselTestimonials class="mt-6"></CustomCarouselTestimonials>

          <h3 class="title text-center mt-28">Join the Nattome VIP Member</h3>
          <div
            class="mt-20 flex flex-wrap lg:flex-nowrap lg:justify-between lg:gap-4"
          >
            <CustomMemberItem class="basis-6/12">
              <template #icon>
                <PresentIcon />
              </template>
              <template #text> Birthday Discount / Gifts </template>
            </CustomMemberItem>
            <CustomMemberItem class="basis-6/12">
              <template #icon>
                <AnnualBuyIcon />
              </template>
              <template #text> Annually Buy 6 Free 2 </template>
            </CustomMemberItem>
            <CustomMemberItem class="basis-6/12">
              <template #icon>
                <MsgIcon />
              </template>
              <template #text> Dietitian 1-on-1 Follow Up </template>
            </CustomMemberItem>
            <CustomMemberItem class="basis-6/12">
              <template #icon>
                <WhatsappIcon />
              </template>
              <template #text> WhatsApp Community </template>
            </CustomMemberItem>
            <CustomMemberItem class="basis-6/12">
              <template #icon>
                <PresentOpenIcon />
              </template>
              <template #text> Random Giveaway </template>
            </CustomMemberItem>
          </div>

          <div class="mt-20 text-center">
            <CustomButton rounded class="text-xl" label="How To Become VIP" />
          </div>
        </CustomContainer>
      </section>

      <section class="mt-14 section-ingredients">
        <CustomContainer>
          <div class="flex flex-wrap">
            <div
              class="basis-full md:basis-4/12"
              v-animateonscroll="{ enterClass: 'onScroll-fadeInLeft' }"
            >
              <h3 class="title">Our Main Ingredient</h3>
              <strong
                class="block mt-24 ingredient-name !text-5xl md:!text-[5rem]"
                >Gastro-AD</strong
              >
              <sub class="ingredient-subtitle block">(Fermented Soy)</sub>
              <p class="mt-9 infredient-description">
                Top Patented Ingredients in Nattome’s Product
              </p>
            </div>
            <div
              class="basis-full md:basis-8/12"
              v-animateonscroll="{ enterClass: 'onScroll-fadeInRight' }"
            >
              <img :src="gastroADImg" class="w-full max-w-full" />
            </div>
          </div>
        </CustomContainer>
      </section>
    </div>

    <section class="mt-10 pb-24 section-certification">
      <CustomContainer>
        <h3 class="title text-center">Our Certifications & Awards</h3>
        <div class="grid grid-cols-7 mt-12">
          <div class="col-start-1 grid-item-center">
            <img :src="apcLogo" />
            <p class="cert-name">Asia Pacific Super Health Brand</p>
          </div>
          <div class="col-start-3 grid-item-center">
            <img :src="mhlLogo" />
            <p class="cert-name">Malaysia Health & Wellness Brand Awards</p>
          </div>
          <div class="col-start-5 grid-item-center">
            <img :src="nhLogo" />
            <p class="cert-name">Natural Health Awards</p>
          </div>
          <div class="col-start-7 grid-item-center">
            <img :src="gmpLogo" />
            <p class="cert-name">GMP</p>
          </div>
          <div class="col-start-2 grid-item-center">
            <img :src="halalLogo" />
            <p class="cert-name">HALAL</p>
          </div>
          <div class="col-start-4 grid-item-center">
            <img :src="haccpLogo" />
            <p class="cert-name">HACCP</p>
          </div>
          <div class="col-start-6 grid-item-center">
            <img :src="kkmLogo" />
            <p class="cert-name">Kementerian Kesihatan Malaysia (KKM)</p>
          </div>
          <div class="col-start-3 grid-item-center">
            <img :src="mestiLogo" />
            <p class="cert-name">MeSTI</p>
          </div>
          <div class="col-start-5 grid-item-center">
            <img :src="bioeconomyLogo" />
            <p class="cert-name">Bioeconomy Malaysia</p>
          </div>
        </div>
      </CustomContainer>
    </section>
  </div>
</template>

<style scoped lang="scss">
.section-hero {
  //   margin-top: var(--banner-height);
  background-image: url('@/assets/imgs/heroImg.png');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;

  .hero-title {
    color: #4f290d;
    font-size: 4rem;
    font-weight: 600;
    line-height: 1.2;
    font-style: normal;
  }

  .hero-description {
    color: #4f290d;
    font-size: 2.25rem;
    font-weight: 500;
    line-height: 1;
  }

  .hero-description-small {
    color: #f2f4f7;
    font-weight: 400;
    line-height: 1.2;
    font-size: 1rem;
  }
}

.section-second {
  padding-top: calc(var(--banner-height) + var(--navbar-height));
  .title {
    color: #1d2939;
    // text-align: center;
    font-size: 2.25rem;
    font-style: normal;
    font-weight: 700;
    line-height: 1.3; /* 130% */
  }

  .subtitle {
    color: #667085;
    font-size: 1.25rem;
    font-style: normal;
    font-weight: 400;
    line-height: 1.3;
  }

  .description {
    color: #667085;
    font-size: 1rem;
    font-style: normal;
    font-weight: 400;
    line-height: 1.3; /* 130% */
  }

  .icon-title {
    color: #1d2939;
    font-size: 1.5rem;
    font-style: normal;
    font-weight: 500;
    line-height: 1.3;
  }

  .our-solution-title {
    color: #1d2939;
    font-size: 2.25rem;
    font-style: normal;
    font-weight: 600;
    line-height: 1.3;
  }
}

.section-third {
  padding-top: calc(var(--banner-height) + var(--navbar-height));

  .title {
    color: #1d2939;
    font-size: 2rem;
    font-style: normal;
    font-weight: 600;
    line-height: 1.3;
  }

  .text {
    color: #667085;
    font-size: 1.125rem;
    font-style: normal;
    font-weight: 400;
    line-height: 1.3;
  }
}

.section-four {
  //   padding-top: calc(var(--banner-height) + var(--navbar-height));

  .title {
    color: #1d2939;
    font-size: 2.25rem;
    font-style: normal;
    font-weight: 600;
    line-height: 1.3;
  }
}

.section-member-vip {
  .title {
    color: #1d2939;
    font-size: 2.25rem;
    font-style: normal;
    font-weight: 600;
    line-height: 1.3;
  }
}

.section-ingredients {
  //   padding-top: calc(var(--banner-height) + var(--navbar-height));
  .title {
    color: #1d2939;
    font-size: 2.25rem;
    font-style: normal;
    font-weight: 600;
    line-height: 1.3;
  }

  .ingredient-name {
    color: #1d2939;
    font-size: 5rem;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
  }

  .ingredient-subtitle {
    color: #667085;
    font-size: 1.5rem;
    font-style: normal;
    font-weight: 400;
    line-height: 1.3;
  }
}

.section-certification {
  .title {
    color: #1d2939;
    font-size: 2.25rem;
    font-style: normal;
    font-weight: 600;
    line-height: 1.3;
  }

  .cert-name {
    color: #1d2939;
    font-size: 1rem;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
    margin-top: 1rem;
    text-align: center;
  }
}
</style>
