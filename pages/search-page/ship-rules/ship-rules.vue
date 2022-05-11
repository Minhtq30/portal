<template>
  <div>
    <div>
      <carousel :images="sliderImages" />
      <div
        class="intro-info-title__top flex items-center justify-center w-[80%] lg:w-[45%] font-bold text-2xl lg:text-[42px] m-auto text-center bg-white"
      >
        QUY ĐỊNH VẬN CHUYỂN
      </div>
    </div>
    <div>
      <ul
        class="list-none flex flex-col items-center pl-0 sm:flex-row sm:justify-between pt-20 2xl:px-48 sm:px-10"
      >
        <li class="w-[238px] pb-5 lg:pb-0 lg:w-[476px] flex justify-center">
          <div
            class="button-tab flex rounded-full text-center cursor-pointer"
            :class="
              tabActive === 'noShipProduct'
                ? 'bg-[#039049] text-white'
                : 'text-[#039049]'
            "
            @click="tabActive = 'noShipProduct'"
          >
            <span
              class="flex items-center text-[12px] sm:text-[12px] md:text-[16px] lg:text-[22px] xl:text-[26px] lg:py-[12px] 2xl:text-[28px] font-bold"
              >HÀNG HÓA KHÔNG NHẬN VẬN CHUYỂN</span
            >
          </div>
        </li>
        <li class="w-[238px] pb-5 lg:pb-0 lg:w-[476px] flex justify-center">
          <div
            class="button-tab flex rounded-full text-center cursor-pointer"
            :class="
              tabActive === 'checkProduct'
                ? 'bg-[#039049] text-white'
                : 'text-[#039049]'
            "
            @click="tabActive = 'checkProduct'"
          >
            <span
              class="flex items-center text-[12px] sm:text-[12px] md:text-[16px] lg:text-[22px] xl:text-[27px] lg:py-[12px] 2xl:text-[28px] font-bold"
              >QUY ĐỊNH KIỂM TRA HÀNG HÓA</span
            >
          </div>
        </li>
        <li class="w-[238px] pb-5 lg:pb-0 lg:w-[476px] flex justify-center">
          <div
            class="button-tab flex rounded-full text-center cursor-pointer"
            :class="
              tabActive === 'packRule'
                ? 'bg-[#039049] text-white'
                : 'text-[#039049]'
            "
            @click="tabActive = 'packRule'"
          >
            <span
              class="flex items-center text-[12px] sm:text-[12px] md:text-[16px] lg:text-[22px] xl:text-[26px] lg:py-[12px] 2xl:text-[28px] font-bold"
              >QUY ĐỊNH ĐÓNG GÓI HÀNG HÓA</span
            >
          </div>
        </li>
      </ul>
    </div>
    <div>
      <table-no-ship v-if="tabActive === 'noShipProduct'" />
      <check-regulation v-if="tabActive === 'checkProduct'" />
      <pack-regulation v-if="tabActive === 'packRule'" />
    </div>
  </div>
</template>

<script>
import Carousel from "@/components/elements/carousel.vue";
import TableNoShip from "@/pages/search-page/ship-rules/product-rules.vue";
import CheckRegulation from "@/pages/search-page/ship-rules/checking-regulations.vue";
import PackRegulation from "@/pages/search-page/ship-rules/packing-regulations.vue";

export default {
  name: "ShipRules",
  components: {
    Carousel,
    TableNoShip,
    CheckRegulation,
    PackRegulation,
  },
  data() {
    return {
      sliderImages: ["assets/images/slide_1.png", "assets/images/slide_2.png"],
      tabActive: "noShipProduct",
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
.button-tab {
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 60px;
  padding-left: 20px;
  padding-right: 20px;
}
</style>
