<template>
  <div class="wrapper">
    <div class="container mx-auto pt-4 pb-8">
      <div data-aos="fade-up" class="relative flex features">
        <div
          v-for="feature in features"
          :key="feature.key"
          class="text-center px-2 xl:px-8 features-item mx-auto"
        >
          <div class="features-item__image mx-auto">
            <nuxt-img
              preset="defaultImage"
              class="w-full h-full"
              :src="feature.image"
            />
          </div>
          <div class="mt-[12px] xl:mt-11">
            <span
              class="features-item__description text-base xl:text-xl 2xl:text-2xl"
            >
              {{ feature.text }}
            </span>
          </div>
          <div
            v-if="feature.children"
            class="absolute left-0 top-0 flex features-overlay mx-auto"
          >
            <div
              v-for="(item, index) in feature.children"
              :key="item.key"
              class="relative text-center px-2 xl:px-8 features-item"
              :style="{
                zIndex: index === 0 ? -1 : 2,
                opacity: index === 0 ? 0 : 1,
              }"
            >
              <div class="features-item__image mx-auto">
                <nuxt-img
                  preset="defaultImage"
                  class="w-full h-full"
                  :src="item.image"
                />
              </div>
              <div class="mt-[12px] xl:mt-11">
                <div
                  class="features-item__description text-base xl:text-xl 2xl:text-2xl"
                >
                  {{ item.text }}
                </div>
              </div>
              <div
                v-if="index === 1"
                class="hidden absolute top-1/2 left-0 split"
              />
            </div>
          </div>
        </div>
        <div class="absolute w-full h-full outer" />
      </div>
    </div>
  </div>
</template>

<script>
const features = [
  {
    key: 1,
    text: "Giao hàng liên tỉnh nhanh nhất",
    image: "/images/home-page/feature1.png",
    children: [
      {
        key: 11,
        text: "Giao hàng liên tỉnh nhanh nhất",
        image: "/images/home-page/feature1.png",
      },
      {
        key: 12,
        text: "Dễ dàng thay đổi thông tin đơn hàng",
        image: "/images/home-page/feature1.png",
      },
      {
        key: 13,
        text: "Miễn phí giao nhiều lần Miễn phí thu hộ tiền",
        image: "/images/home-page/feature1.png",
      },
      {
        key: 14,
        text: "Dễ dàng thay đổi thông tin đơn hàng",
        image: "/images/home-page/feature1.png",
      },
    ],
  },
  {
    key: 2,
    text: "Đối soát nhanh chóng và rút tiền miễn phí 3 lần/tuần",
    image: "/images/home-page/feature1.png",
  },
  {
    key: 3,
    text: "Quản lý bán hàng đơn giản & miễn phí với ứng dụng moshop",
    image: "/images/home-page/feature1.png",
  },
  {
    key: 4,
    text: "Cộng đồng nhà bán lẻ GHTK chia sẻ kinh nghiệm bán hàng",
    image: "/images/home-page/feature1.png",
  },
];

export default {
  name: "FeaturesHomePage",
  data() {
    return {
      features,
    };
  },
};
</script>

<style lang="scss" scoped>
.wrapper {
  background-color: var(--grayColorF9);
  .features,
  .features-overlay {
    flex-wrap: wrap;
    .features-item {
      flex-basis: 50%;
      height: 150px;
      .features-item__image {
        width: 90px;
        height: 66px;
        @media only screen and (min-width: 1280px) {
          width: 166px;
          height: 122px;
        }
        @media only screen and (min-width: 1536px) {
          width: 200px;
          height: 147px;
        }
      }
      @media only screen and (min-width: 768px) {
        height: 126px;
      }
      @media only screen and (min-width: 1280px) {
        flex-basis: 25%;
        height: unset;
      }
    }
  }
  .features {
    & > .features-item {
      z-index: 2;
      @media only screen and (min-width: 1024px) {
        max-width: 400px;
      }
      @media only screen and (min-width: 1280px) {
        max-width: unset;
      }
      .features-item__description {
        color: var(--primaryColor23);
      }
      &:first-child {
        cursor: pointer;
        &:hover {
          & ~ .features-item {
            opacity: 0;
          }
          & ~ .outer {
            opacity: 1;
          }
          .features-overlay {
            visibility: visible;
            opacity: 1;
            transition: 0.3s linear;
            transform: translateX(0);
          }
        }
      }
    }
    .features-overlay {
      z-index: -1;
      opacity: 0;
      transform: translateX(10px);
      visibility: hidden;
      .features-item__description {
        color: var(--primaryColor4a);
      }
      .split {
        width: 1px;
        height: 80%;
        background-color: #00b75b;
        transform: translateY(-50%);
        @media only screen and (min-width: 1440px) {
          display: block;
        }
      }
    }
    .outer {
      background-color: #f4f3f3;
      box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
      border-radius: 51px;
      opacity: 0;
      transition: 0.3s linear;
    }
  }
}
</style>
