<template>
  <div class="justify-center">
    <div class="overlay-btn sm:right-12 sm:mt-6 right-3 mt-3">
      <g-button class="btn-white rounded-full md:w-[215px] md:h-[49px]">
        <span class="md:text-[18px] text-[10px] font-bold uppercase"
          >Trải nghiệm ngay</span
        >
      </g-button>
      <img
        class="md:w-[64px] w-[30px] md:ml-[27px] ml-2"
        src="@/assets/icons/chplay.svg"
      />
      <img
        class="md:w-[64px] w-[30px] md:ml-[27px] ml-2"
        src="@/assets/icons/app_store.svg"
      />
      <img
        class="md:w-[64px] w-[30px] md:ml-[27px] ml-2"
        src="@/assets/icons/global.svg"
      />
    </div>
    <carousel :images="sliderImages" />
    <div
      class="grid md:grid-cols-3 grid-cols-1 m-auto justify-between max-w-[1275px] md:my-20 my-5"
    >
      <div
        v-for="(item, index) in usp"
        :key="index"
        class="justify-center max-w-[295px] text-center m-auto mb-10 md:mt-0"
      >
        <img class="mb-7 w-[200px] h-[147px]" src="@/assets/images/logo.svg" />
        <div
          class="font-bold text-[20px] uppercase md:mb-2 leading-[29px]"
          v-html="item.title"
        ></div>
        <div class="md:text-[18px] text-[16px] mx-[12px]">
          {{ item.desciption }}
        </div>
      </div>
    </div>

    <div class="p-7 md:bg-[#cdcdcd]">
      <div class="md:text-5xl text-xl font-bold md:mb-20 mb-3 text-center">
        MỘT SỐ CÂU HỎI THƯỜNG GẶP
      </div>
      <post-list :options="posts" />
    </div>
    <div class="p-7 bg-[#a1a1a1]">
      <div class="md:h-[317px] h-[174px] flex m-auto max-w-[1536px] items-end">
        <g-button class="btn-white rounded-full md:w-[215px] md:h-[49px]">
          <span class="md:text-[18px] text-[10px] font-bold uppercase"
            >Trải nghiệm ngay</span
          >
        </g-button>
        <img
          class="md:w-[64px] w-[30px] md:ml-[27px] ml-2"
          src="@/assets/icons/chplay.svg"
        />
        <img
          class="md:w-[64px] w-[30px] md:ml-[27px] ml-2"
          src="@/assets/icons/app_store.svg"
        />
        <img
          class="md:w-[64px] w-[30px] md:ml-[27px] ml-2"
          src="@/assets/icons/global.svg"
        />
      </div>
    </div>
  </div>
</template>

<script>
import Carousel from "../components/elements/carousel.vue";
import postList from "../components/list/postList.vue";
import { GButton } from "@/components/elements";
export default {
  name: "IndexPage",
  components: { postList, Carousel, GButton },
  data() {
    return {
      sliderImages: ["assets/images/slide_1.png", "assets/images/slide_2.png"],
      usp: [
        {
          title: "Quản lý khách hàng đa kênh",
          desciption:
            "Theo dõi và dễ dàng thống kê, đo lường khách hàng từ mọi kênh bán chỉ với một công cụ duy nhất để quản lý và tối ưu kinh doanh.",
        },
        {
          title: "Tối ưu chi phí <br/> quản lý",
          desciption:
            "Quản lý tập trung các công việc kinh doanh. Từ đó dễ dàng kiểm soát và vận hành linh hoạt, giúp tối ưu chi phí quản lý.",
        },
        {
          title: "Quản lý bán hàng thông minh",
          desciption:
            "Các số liệu, báo cáo từ moshop giúp chủ shop nắm bắt được tình hình kinh doanh để đưa ra giải pháp thực sự cần thiết. Từ đó  đảm bảo vận hành xuyên suốt tránh sai s ót trong các khâu quản lý.",
        },
      ],
      posts: [
        {
          title: "Lorem ipsum dolor sit amet ?",
          desciption:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
        },
        {
          title: "Lorem ipsum dolor sit amet ?",
          desciption:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
        },
        {
          title: "Lorem ipsum dolor sit amet ?",
          desciption:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
        },
        {
          title: "Lorem ipsum dolor sit amet ?",
          desciption:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
        },
      ],
    };
  },
};
</script>

<style scoped>
.overlay-btn {
  position: absolute;
  z-index: 1;
}
</style>
