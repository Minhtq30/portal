<template>
  <div class="wrapper">
    <div class="container mx-auto">
      <div class="mt-[35px] 2xl:mt-14 text-center tab-title">
        <span class="text-green text-2xl xl:text-3xl 2xl:text-4xl font-bold">
          BƯU CỤC PHỦ SÓNG 63 TỈNH THÀNH
        </span>
      </div>
      <div
        class="relative flex items-center mx-auto mt-8 tabs h-[28px] lg:h-[35px] xl:h-[50px] 2xl:h-[60px] rounded-full"
      >
        <div
          class="h-full flex items-center justify-center cursor-pointer flex-1"
          @click="tabActive = 'pickAddress'"
        >
          <span class="lg:text-lg xl:text-xl 2xl:text-3xl text-white">
            Tra cứu bưu cục
          </span>
        </div>
        <div
          class="h-full flex items-center justify-center cursor-pointer flex-1"
          @click="tabActive = 'getPrice'"
        >
          <span class="lg:text-lg xl:text-xl 2xl:text-3xl text-white">
            Ước tính chi phí
          </span>
        </div>
        <div
          class="absolute bg-white flex items-center justify-center cursor-pointer rounded-full overlay"
          :class="{ 'is-get-price': tabActive === 'getPrice' }"
        >
          <span class="text-green lg:text-lg xl:text-xl 2xl:text-3xl">
            {{
              tabActive === "pickAddress"
                ? "Tra cứu bưu cục"
                : "Ước tính chi phí"
            }}
          </span>
        </div>
      </div>

      <div class="mt-8 2xl:mt-14">
        <tab-get-price v-if="tabActive === 'getPrice'" />
        <tab-pick-addresses v-if="tabActive === 'pickAddress'" />
      </div>
    </div>
  </div>
</template>

<script>
import TabPickAddresses from "./TabPickAddresses/index.vue";
import TabGetPrice from "./TabGetPrice/index.vue";

export default {
  name: "TabContentHomePage",
  components: {
    TabPickAddresses,
    TabGetPrice,
  },
  data() {
    return {
      tabActive: "pickAddress",
    };
  },
};
</script>

<style lang="scss" scoped>
.wrapper {
  .tab-title {
    color: #039049;
  }
  .tabs {
    background-color: #039049;
    width: 363px;
    max-width: 100%;
    .overlay {
      transform: translateX(1px);
      width: 50%;
      height: calc(100% - 2px);
      transition: 0.2s linear;
      &.is-get-price {
        transform: translateX(calc(100% - 1px));
      }
    }
    @media only screen and (min-width: 1280px) {
      width: 540px;
    }
    @media only screen and (min-width: 1536px) {
      width: 651px;
    }
  }
}
</style>
