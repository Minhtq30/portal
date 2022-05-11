<template>
  <div class="wrapper">
    <div class="relative jumbotron-hompage-carousel">
      <div
        class="hidden xl:flex absolute w-full justify-end top-0 action-external p-4"
      >
        <g-button class="btn-primary rounded-full ml-10">
          <span class="xl:text-xl 2xl:text-2xl px-4">Đăng ký/ Đăng nhập</span>
        </g-button>
        <g-button class="btn-primary rounded-full ml-10">
          <span class="xl:text-xl 2xl:text-2xl px-4">Ứng tuyển giao hàng</span>
        </g-button>
        <g-button class="btn-primary rounded-full ml-10 mr-16">
          <span class="xl:text-xl 2xl:text-2xl px-4">Biểu phí</span>
        </g-button>
      </div>

      <a-carousel :autoplay="true" :dots="false" arrows>
        <div
          slot="prevArrow"
          class="cursor-pointer absolute arrow-icon prev-arrow-icon"
          style="z-index: 1"
        >
          <nuxt-img
            preset="defaultImage"
            class="w-[12px] xl:w-[28px]"
            src="/icons/prev-arrow-carousel.png"
          />
        </div>
        <div
          slot="nextArrow"
          class="cursor-pointer absolute arrow-icon next-arrow-icon"
          style="z-index: 1"
        >
          <nuxt-img
            preset="defaultImage"
            class="w-[12px] xl:w-[28px]"
            src="/icons/next-arrow-carousel.png"
          />
        </div>
        <div v-for="(image, index) in images" :key="index">
          <nuxt-img
            preset="defaultImage"
            sizes="sm:800px md:1200px lg:1900px "
            class="w-full"
            :src="image"
          />
        </div>
      </a-carousel>

      <div class="absolute bottom-content">
        <div
          class="relative flex flex-col px-6 xl:px-0 xl:flex-row container mx-auto search-bar-wrapper xl:py-8 xl:pl-13"
        >
          <div
            class="absolute top-[1px] text-center pt-[2px] left-[10px] h-[25px] xl:h-[40px] xl:pt-2 2xl:h-[73px] 2xl:left-[75px] 2xl:pt-6 text-description"
          >
            <span class="text-base xl:text-xl 2xl:text-3xl text-white">
              Tra cứu đơn hàng
            </span>
          </div>
          <input
            class="border-0 mt-[11px] pl-2 xl:pl-4 xl:mt-0 xl:ml-12 xl:text-xl xl:rounded-2xl 2xl:text-2xl 2xl:pl-2 2xl:pl-10"
            placeholder="Nhập mã đơn hàng, nhiều đơn hàng cách nhau bởi dấu phẩy"
          />
          <div
            class="w-full justify-center my-4 flex xl:my-0 xl:flex-1 xl:mr-12 xl:mt-0 action-search"
          >
            <g-button
              class="w-[104px] mr-[30px] h-[23px] xl:h-[40px] 2xl:h-[54px] xl:max-w-unset xl:flex-1 btn-primary rounded-full xl:mr-0 xl:ml-10"
            >
              <span class="xl:text-xl 2xl:text-2xl font-bold">TRA CỨU</span>
            </g-button>
            <g-button
              class="w-[104px] ml-[30px] h-[23px] xl:h-[40px] 2xl:h-[54px] xl:max-w-unset xl:flex-1 btn-primary rounded-full xl:ml-8"
            >
              <span class="xl:text-xl 2xl:text-2xl font-bold">Tải IGHTK</span>
            </g-button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { GButton } from "@/components/elements";
import { Carousel as ACarousel } from "ant-design-vue";

export default {
  name: "JumbotronHomePage",
  components: {
    GButton,
    ACarousel,
  },
  data() {
    return {
      images: [
        "/images/home-page/jumbotron1.png",
        "/images/home-page/jumbotron1.png",
        "/images/home-page/jumbotron1.png",
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
.wrapper {
  padding-bottom: 115px;
  .action-external {
    z-index: 1;
    button {
      height: 42px;
      box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    }
  }
  .bottom-content {
    width: calc(100% - 2rem);
    left: 1rem;
    bottom: 6px;
    transform: translateY(calc(100% - 10px));
    .search-bar-wrapper {
      background-color: var(--primaryColor23);
      border-radius: 1rem;
      align-items: center;
      input {
        outline: 0;
        height: 50px;
        width: 100%;
        border-radius: 10px;
        text-overflow: ellipsis;
        white-space: nowrap;
        overflow: hidden;
      }
      button {
        box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
      }
      .text-description {
        transform: translateY(-100%);
        background-color: #006c36;
        z-index: 1;
        width: 160px;
        border-top-left-radius: 11px;
        border-top-right-radius: 11px;
        @media only screen and (min-width: 1280px) {
          width: 250px;
          border-top-left-radius: 20px;
          border-top-right-radius: 20px;
        }
        @media only screen and (min-width: 1536px) {
          width: 353px;
          border-top-left-radius: 49px;
          border-top-right-radius: 49px;
        }
      }
    }
  }
  @media only screen and (min-width: 1280px) {
    padding-bottom: 0;
    .bottom-content {
      left: 0;
      width: 100%;
      transform: translateY(0);
      padding: 0 2rem;
      .search-bar-wrapper {
        input {
          width: 700px;
        }
      }
    }
  }
  @media only screen and (min-width: 1536px) {
    .bottom-content {
      bottom: 0;
      .search-bar-wrapper {
        input {
          height: 69px;
          width: 911px;
          max-width: 100%;
        }
      }
    }
  }
}
</style>

<style lang="scss">
.jumbotron-hompage-carousel {
  .slick-arrow {
    z-index: 1;
  }
  .slick-next {
    right: 1rem;
    @media only screen and (min-width: 1280px) {
      right: 2rem;
    }
  }
  .slick-prev {
    left: 1rem;
    @media only screen and (min-width: 1280px) {
      left: 2rem;
    }
  }
  .slick-list {
    @media only screen and (min-width: 1536px) {
      height: calc(100vh - 165px);
      .item-jumbotron {
        height: calc(100vh - 165px);
      }
    }
  }
}
</style>
