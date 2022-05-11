<template>
  <div class="wrapper">
    <div class="container mx-auto">
      <div class="mt-[35px] mb-[35px] 2xl:mt-16 2xl:mb-12 text-center">
        <span class="text-green text-2xl xl:text-3xl 2xl:text-4xl font-bold">
          ĐỐI TÁC
        </span>
      </div>
      <div class="grid lg:grid-cols-3 xl:gap-4">
        <div
          v-for="(carousel, index) in carousels"
          :key="carousel.key"
          :description="carousel.description"
          :images="carousel.images"
          class="carousel-partner-item xl:max-w-[400px] mx-auto"
          :class="{ 'mb-12 lg:mb-0': index !== 2 }"
        >
          <div>
            <div class="carousel-content mb-8 2xl:mb-12">
              <carousel-3d :images="carousel.images" />
            </div>
            <div class="carousel-description text-center lg:px-4 xl:px-0">
              <span class="font-bold lg:text-[16px] 2xl:text[22px]">
                {{ carousel.description }}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Carousel3d from "./Carousel3D.vue";

export default {
  components: {
    Carousel3d,
  },
  data() {
    return {
      carousels: [
        {
          key: 1,
          description: "ĐỐI TÁC HÀNG ĐẦU CÁC SÀN THƯƠNG MẠI ĐIỆN TỬ ",
          images: [
            "/images/home-page/partner-logo.png",
            "/images/home-page/partner-logo1.png",
            "/images/home-page/partner-logo2.png",
          ],
        },
        {
          key: 2,
          description: "ĐỐI TÁC CHIẾN LƯỢC CỦA CÁC  ĐƠN VỊ QUẢN LÝ BÁN HÀNG",
          images: [
            "/images/home-page/partner-logo.png",
            "/images/home-page/partner-logo1.png",
            "/images/home-page/partner-logo2.png",
          ],
        },
        {
          key: 3,
          description: "ĐỐI TÁC TIN CẬY CỦA  CÁC THƯƠNG HIỆU HÀNG ĐẦU",
          images: [
            "/images/home-page/partner-logo.png",
            "/images/home-page/partner-logo1.png",
            "/images/home-page/partner-logo2.png",
          ],
        },
      ],
    };
  },
};
</script>
