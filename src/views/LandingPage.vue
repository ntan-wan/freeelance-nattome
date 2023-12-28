<script setup>
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
</script>

<template>
  <div class="landing-page">
    <section class="section-base section-hero flex">
      <div class="flex items-center w-1/2">
        <div class="pl-20">
          <!-- v-animateonscroll="{ enterClass: 'fadein', leaveClass: 'fadeout' }" -->
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
        <div class="flex gap-4 justify-between items-center">
          <div class="grow shrink-0">
            <h2 class="title">Light Breakfast for Gut Health</h2>
            <small class="subtitle"
              >Why don't you try Nattome Stomach food?</small
            >
          </div>
          <p class="description grow text-right">
            Nattome endeavors to bring the best for our customers in terms of
            <br />
            quality, safety and experience from our products.
          </p>
        </div>

        <div class="mt-16 flex justify-between">
          <div>
            <CustomIconWrapper>
              <NaturalIngredientIcon />
            </CustomIconWrapper>
            <h4 class="icon-title mt-4">Natural Ingredients</h4>
          </div>
          <div>
            <CustomIconWrapper>
              <CoffeeIcon />
            </CustomIconWrapper>
            <h4 class="icon-title mt-4">Tasty & Smooth</h4>
          </div>
          <div>
            <CustomIconWrapper>
              <WheatIcon />
            </CustomIconWrapper>
            <h4 class="icon-title mt-4">Variety of Flavour</h4>
          </div>
          <div>
            <CustomIconWrapper>
              <NonMedicineIcon />
            </CustomIconWrapper>
            <h4 class="icon-title mt-4">Non-Medicinal</h4>
          </div>
        </div>

        <h2 class="our-solution-title mt-20 text-center">Our Solutions</h2>
        <div class="mt-9 flex justify-between">
          <CustomCardSolution pIsActive pHeader="Optimize Gastric PH Value">
            <template #content>
              Nattome contains Gastro-AD which lowers gastric level to
              1.9-4.7.Reduce gastric pain and heartburn.
            </template>
          </CustomCardSolution>
          <CustomCardSolution pHeader="Reduce Gastric & Protease Production">
            <template #content>
              Lactobacillus digests protein and release peptide to reduce the
              activation of interleukin which directly reduces damage towards
              our gastric mucosa.
            </template>
          </CustomCardSolution>
          <CustomCardSolution
            pHeader="Strengthen Gastric Repair & Immune System"
          >
            <template #content>
              With Lactobacillus Nattome prevents inflammation and reduce
              production of interleukin, protecting our gastric mucosa.
            </template>
          </CustomCardSolution>
          <CustomCardSolution
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
        <div class="flex">
          <div class="grow shrink-0">
            <img :src="heroImg2" />
          </div>
          <div class="grow flex flex-col items-center justify-center">
            <div class="w-3/4">
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
        <div class="grid grid-cols-12">
          <div class="col-span-5">
            <h3 class="title mb-8">Our Products</h3>
            <CustomProductTab
              class="mb-4"
              pName="Stomach Food Oath"
              :pImg="product"
            ></CustomProductTab>
            <CustomProductTab
              pName="R&R Fast Relief Powder"
              :pImg="product2"
            ></CustomProductTab>
          </div>
          <div class="col-span-7">two</div>
        </div>
      </CustomContainer>
    </section>

    <section class="section-base section-package">
      <CustomContainer>
        <div class="grid grid-cols-12">
          <div class="col-span-4">
            <CustomPackageCard></CustomPackageCard>
          </div>
          <div class="col-span-8"></div>
        </div>
      </CustomContainer>
    </section>

    <div class="bg-yellow-custom pt-10 pb-9">
      <section class="section-base section-member-vip">
        <CustomContainer>
          <h3 class="title text-center">Testimonials</h3>
          <CustomCarouselTestimonials class="mt-6"></CustomCarouselTestimonials>

          <h3 class="title text-center mt-28">Join the Nattome VIP Member</h3>
          <div class="mt-20 flex justify-between items-center gap-12">
            <CustomMemberItem>
              <template #icon>
                <PresentIcon />
              </template>
              <template #text> Birthday Discount / Gifts </template>
            </CustomMemberItem>
            <CustomMemberItem>
              <template #icon>
                <AnnualBuyIcon />
              </template>
              <template #text> Annually Buy 6 Free 2 </template>
            </CustomMemberItem>
            <CustomMemberItem>
              <template #icon>
                <MsgIcon />
              </template>
              <template #text> Dietitian 1-on-1 Follow Up </template>
            </CustomMemberItem>
            <CustomMemberItem>
              <template #icon>
                <WhatsappIcon />
              </template>
              <template #text> WhatsApp Community </template>
            </CustomMemberItem>
            <CustomMemberItem>
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
          <div class="grid grid-cols-12">
            <div class="col-span-5">
              <h3 class="title">Our Main Ingredient</h3>
              <strong class="block mt-24 ingredient-name">Gastro-AD</strong>
              <sub class="ingredient-subtitle block">(Fermented Soy)</sub>
              <p class="mt-9 infredient-description">
                Top Patented Ingredients in Nattome’s Product
              </p>
            </div>
            <div class="col-span-7">
              <img :src="gastroADImg" />
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
