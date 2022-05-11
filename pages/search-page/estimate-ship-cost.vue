<template>
  <div>
    <div>
      <carousel :images="sliderImages" />
      <div
        class="intro-info-title__top flex items-center justify-center w-[80%] md:w-[45%] font-bold text-2xl lg:text-[42px] m-auto text-center bg-white"
      >
        ƯỚC TÍNH PHÍ VẬN CHUYỂN
      </div>
    </div>
    <div class="m-2 2xl:mt-14 mb-20">
      <get-price></get-price>
    </div>
  </div>
</template>

<script>
import Carousel from "@/components/elements/carousel.vue";
import GetPrice from "@/components/widgets/home-page/TabContent/TabGetPrice/index.vue";
export default {
  name: "EstimateShipCost",
  components: {
    Carousel,
    GetPrice,
  },
  data() {
    return {
      sliderImages: ["assets/images/slide_1.png", "assets/images/slide_2.png"],
    };
  },
};
</script>

<style lang="scss" scoped>
.intro-info-title {
  &__top {
    border: 1px solid white;
    border-radius: 73px;
    margin-top: -30px;
    filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
    padding: 10px 0px;
    font-size: 22px;
    @media only screen and (min-width: 1024px) {
      margin-top: -45px;
      padding: 15px 0px;
      font-size: 30px;
    }
    @media only screen and (min-width: 1280px) {
      margin-top: -60px;
      padding: 35px 0px;
      font-size: 42px;
    }
  }
}
</style>
