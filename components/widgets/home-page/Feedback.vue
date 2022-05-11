<template>
  <div class="wrapper">
    <div class="container mx-auto">
      <div class="mt-[35px] mb-[35px] 2xl:mt-16 2xl:mb-12 text-center">
        <span class="text-green text-2xl xl:text-3xl 2xl:text-4xl font-bold">
          HƠN 600.000 NHÀ BÁN LẺ ĐÃ SỬ DỤNG GHTK
        </span>
      </div>
    </div>
    <div class="relative">
      <div class="container mx-auto feedbacks">
        <a-carousel v-bind="settings" ref="carousel">
          <div
            v-for="feedback in feedbacks"
            :key="feedback.key"
            class="feedbacks-item"
          >
            <div class="feedbacks-item-inner p-4 mb-4 mx-auto">
              <div class="mt-12 px-8 feedbacks-item__content">
                <span class="text-lg">{{ feedback.content }}</span>
              </div>
              <div
                class="mt-2 w-[83px] h-[1px] float-right bg-black feedbacks-item__split"
              />
              <div class="flex mt-4 items-center">
                <nuxt-img preset="defaultImage" :src="feedback.user.avatar" />
                <div class="ml-4">
                  <span class="text-lg">{{ feedback.user.name }}</span>
                  <br />
                  <span>{{ feedback.shop }}</span>
                </div>
              </div>
            </div>
          </div>
        </a-carousel>
      </div>
      <nuxt-img
        preset="defaultImage"
        class="cursor-pointer hidden sm:block absolute top-1/2 left-4 translate-y-[-50%] prev-icon"
        src="/icons/prev-slick-carousel.png"
        @click="showPrev"
      />
      <nuxt-img
        preset="defaultImage"
        class="cursor-pointer hidden sm:block absolute top-1/2 right-4 translate-y-[-50%] next-icon"
        src="/icons/next-slick-carousel.png"
      />
    </div>
  </div>
</template>

<script>
import { Carousel as ACarousel } from "ant-design-vue";
import countTo from "vue-count-to";
const feedbacks = [
  {
    key: 1,
    user: {
      name: "Chị Trần Mai Linh",
      avatar: "/images/home-page/avatar-user-feedback.png",
    },
    shop: "Shop mẹ Gạo",
    content:
      "Tôi lựa chọn sử dụng GHTK từ những ngày đầu tiên khi mới kinh doanh. Tôi hoàn toàn tin tưởng và hài lòng về chất lượng dịch vụ mà GHTK đem đến mỗi ngày",
  },
  {
    key: 2,
    user: {
      name: "Chị Trần Mai Linh",
      avatar: "/images/home-page/avatar-user-feedback.png",
    },
    shop: "Shop mẹ Gạo",
    content:
      "Tôi lựa chọn sử dụng GHTK từ những ngày đầu tiên khi mới kinh doanh. Tôi hoàn toàn tin tưởng và hài lòng về chất lượng dịch vụ mà GHTK đem đến mỗi ngày",
  },
  {
    key: 3,
    user: {
      name: "Chị Trần Mai Linh",
      avatar: "/images/home-page/avatar-user-feedback.png",
    },
    shop: "Shop mẹ Gạo",
    content:
      "Các dịch vụ của GHTK giúp tôi có khởi đầu kinh doanh thuận lợi hơn. Không Các dịch vụ của GHTK giúp tôi có khởi đầu kinh doanh thuận lợi hơn. Không những hỗ trợ tối đa cho người bán hàng mà GHTK còn đem lại những tính năng hỗ trợ cả người mua hàng như theo dõi toàn trình đơn hàng, chủ động đặt hàng qua chats,..",
  },
  {
    key: 4,
    user: {
      name: "Chị Trần Mai Linh",
      avatar: "/images/home-page/avatar-user-feedback.png",
    },
    shop: "Shop mẹ Gạo",
    content:
      "Tôi lựa chọn sử dụng GHTK từ những ngày đầu tiên khi mới kinh doanh. Tôi hoàn toàn tin tưởng và hài lòng về chất lượng dịch vụ mà GHTK đem đến mỗi ngày",
  },
  {
    key: 5,
    user: {
      name: "Chị Trần Mai Linh",
      avatar: "/images/home-page/avatar-user-feedback.png",
    },
    shop: "Shop mẹ Gạo",
    content:
      "Tôi lựa chọn sử dụng GHTK từ những ngày đầu tiên khi mới kinh doanh. Tôi hoàn toàn tin tưởng và hài lòng về chất lượng dịch vụ mà GHTK đem đến mỗi ngày",
  },
  {
    key: 6,
    user: {
      name: "Chị Trần Mai Linh",
      avatar: "/images/home-page/avatar-user-feedback.png",
    },
    shop: "Shop mẹ Gạo",
    content:
      "Tôi lựa chọn sử dụng GHTK từ những ngày đầu tiên khi mới kinh doanh. Tôi hoàn toàn tin tưởng và hài lòng về chất lượng dịch vụ mà GHTK đem đến mỗi ngày",
  },
];

export default {
  components: { ACarousel },
  data() {
    return {
      feedbacks,
      settings: {
        arrows: true,
        autoplay: true,
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        initialSlide: 0,
        responsive: [
          {
            breakpoint: 1400,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 1,
              initialSlide: 0,
            },
          },
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              initialSlide: 0,
            },
          },
        ],
      },
    };
  },
  methods: {
    showPrev() {
      this.$refs.carousel.prev();
    },
    showNext() {
      this.$refs.carousel.next();
    },
  },
};
</script>

<style lang="scss" scoped>
.wrapper {
  .feedbacks {
    .feedbacks-item {
      .feedbacks-item-inner {
        border-radius: 33px;
        width: 380px !important;
        max-width: 100%;
        background-color: #f4f4f4;
        box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
        .feedbacks-item__content {
          display: block;
          text-overflow: ellipsis;
          word-wrap: break-word;
          overflow: hidden;
          height: 14rem;
        }
      }
    }
  }
  .prev-icon {
    @media (min-width: 1600px) {
      left: 2rem;
    }
    @media (min-width: 1920px) {
      left: 105px;
    }
  }
  .next-icon {
    @media (min-width: 1600px) {
      right: 2rem;
    }
    @media (min-width: 1920px) {
      right: 105px;
    }
  }
}
</style>
