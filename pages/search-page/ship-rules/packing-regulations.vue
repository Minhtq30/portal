<template>
  <div
    class="packing-regulations px-[10px] md:px-[70px] xl:px-[200px] text-[13px] sm:text-[18px] lg:text-[24px]"
  >
    <div>
      Quy định đóng gói được GHTK đưa ra nhằm đảm bảo an toàn cho hàng hóa trong
      quá trình vận chuyển từ Người gửi tới khách hàng. Đóng gói đúng quy cách
      giúp bảo vệ hàng hóa, giảm tình trạng trả hàng, tiết kiệm chi phí cho
      Người gửi. Khi có sự cố xảy ra trong quá trình vận chuyển, quy định đóng
      gói hàng hóa dùng làm căn cứ quy chiếu trách nhiệm cho các bên liên quan.
    </div>
    <div
      class="relative flex items-center mx-auto mt-8 tabs h-fit rounded-full text-center"
    >
      <div
        class="h-full flex items-center justify-center cursor-pointer flex-1"
        @click="tabActive = 'generalRules'"
      >
        <span class="text-white font-bold p-[20px]">
          QUY ĐỊNH ĐÓNG GÓI CHUNG
        </span>
      </div>
      <div
        class="h-full flex items-center justify-center cursor-pointer flex-1"
        @click="tabActive = 'detailRules'"
      >
        <span class="text-white font-bold p-[20px]">
          QUY ĐỊNH ĐÓNG GÓI CHI TIẾT
        </span>
      </div>
      <div
        class="absolute bg-white flex items-center justify-center cursor-pointer rounded-full overlay"
        :class="{ 'is-get-detailRules': tabActive === 'detailRules' }"
      >
        <span class="text-green font-bold p-[20px]">
          {{
            tabActive === "generalRules"
              ? "QUY ĐỊNH ĐÓNG GÓI CHUNG"
              : "QUY ĐỊNH ĐÓNG GÓI CHI TIẾT"
          }}
        </span>
      </div>
    </div>
    <div class="mt-8 2xl:mt-14">
      <detail-rules v-if="tabActive === 'detailRules'" />
      <general-rules v-if="tabActive === 'generalRules'" />
    </div>
  </div>
</template>

<script>
import DetailRules from "@/pages/search-page/ship-rules/packing-regulations/detailRules";
import GeneralRules from "@/pages/search-page/ship-rules/packing-regulations/generalRules";
export default {
  name: "PackingRegulations",
  components: { GeneralRules, DetailRules },
  data() {
    return {
      tabActive: "generalRules",
    };
  },
};
</script>

<style lang="scss" scoped>
.tabs {
  background-color: #039049;
  width: 880px;
  max-width: 80%;
  .overlay {
    transform: translateX(1px);
    width: 50%;
    height: calc(100% - 2px);
    transition: 0.2s linear;
    &.is-get-detailRules {
      transform: translateX(calc(100% - 1px));
    }
  }
}
@media only screen and (max-width: 768px) {
  .tabs {
    max-width: 100%;
  }
}
</style>
