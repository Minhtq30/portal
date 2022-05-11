<template>
  <div>
    <div>
      <carousel :images="sliderImages" />
      <div
        class="intro-info-title__top flex items-center justify-center w-[80%] md:w-[45%] font-bold text-2xl lg:text-[42px] m-auto text-center bg-white"
      >
        TRA CỨU BƯU CỤC
      </div>
    </div>
    <div class="container mx-auto">
      <div class="m-2 mb-20 2xl:mt-14">
        <Content></Content>
      </div>
    </div>
  </div>
</template>

<script>
import Carousel from "@/components/elements/carousel.vue";
import Content from "@/components/widgets/home-page/TabContent/TabPickAddresses/index.vue";
export default {
  name: "SearchPost",
  components: {
    Carousel,
    Content,
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
