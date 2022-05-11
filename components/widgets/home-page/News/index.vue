<template>
  <div class="wrapper mt-26 mb-28">
    <div class="container mx-auto">
      <div class="mt-[35px] mb-[35px] 2xl:mt-16 2xl:mb-12 text-center">
        <span class="text-green text-2xl xl:text-3xl 2xl:text-4xl font-bold">
          TIN TỨC
        </span>
      </div>
      <div class="grid lg:grid-cols-2 gap-4">
        <div class="first-news lg:mr-11">
          <news-item :news="firstNews || {}" :is-first="true" />
        </div>
        <div class="other-news lg:p-4">
          <template v-if="!otherNews">
            <news-item :news="null" />
            <news-item :news="null" />
            <news-item :news="null" />
            <news-item :news="null" />
          </template>
          <template v-else>
            <news-item
              v-for="(item, index) in otherNews"
              :key="item.id"
              :news="item || {}"
              class="other-news-item"
              :class="{ 'mb-10': index !== 2 }"
            />
          </template>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import NewsItem from "./NewsItem.vue";

export default {
  components: {
    NewsItem,
  },
  data() {
    return {
      news: null,
    };
  },
  computed: {
    firstNews() {
      if (this.news && this.news[0]) return this.news[0];
      return null;
    },
    otherNews() {
      if (!this.news) return null;
      const _otherNews = [];

      for (let index = 1; index < 4; index++) {
        if (this.news[index]) {
          _otherNews.push(this.news[index]);
        } else {
          break;
        }
      }
      return _otherNews;
    },
  },
  mounted() {
    this.getData();
  },
  methods: {
    getData() {
      setTimeout(() => {
        this.news = [
          {
            id: 1,
            title: "Cập nhật tính năng đăng đơn hàng dễ vỡ qua API",
            thumbnail: "/images/home-page/thumbnail-news-1.png",
            tags: ["Noibo"],
            description:
              "Hệ thống API tại Giao Hàng Tiết Kiệm liên tục được phát triển mỗi ngày để đem đến cho khách hàng những tiện ích tối ưu nhất. Và một trong những tính năng tại API mới được Giao Hàng Tiết Kiệm hoàn thiện update chính là đăng đơn hàng dễ vỡ thông qua hệ thống.",
          },
          {
            id: 2,
            title: "Cập nhật tính năng đăng đơn hàng dễ vỡ qua API",
            thumbnail: "/images/home-page/thumbnail-news-1.png",
            tags: ["Noibo"],
            description:
              "Hệ thống API tại Giao Hàng Tiết Kiệm liên tục được phát triển mỗi ngày để đem đến cho khách hàng những tiện ích tối ưu nhất. Và một trong những tính năng tại API mới được Giao Hàng Tiết Kiệm hoàn thiện update chính là đăng đơn hàng dễ vỡ thông qua hệ thống.",
          },
          {
            id: 3,
            title: "Cập nhật tính năng đăng đơn hàng dễ vỡ qua API",
            thumbnail: "/images/home-page/thumbnail-news-1.png",
            description:
              "Hệ thống API tại Giao Hàng Tiết Kiệm liên tục được phát triển mỗi ngày để đem đến cho khách hàng những tiện ích tối ưu nhất. Và một trong những tính năng tại API mới được Giao Hàng Tiết Kiệm hoàn thiện update chính là đăng đơn hàng dễ vỡ thông qua hệ thống.",
          },
          {
            id: 4,
            title: "Cập nhật tính năng đăng đơn hàng dễ vỡ qua API",
            thumbnail: "/images/home-page/thumbnail-news-1.png",
            description:
              "Hệ thống API tại Giao Hàng Tiết Kiệm liên tục được phát triển mỗi ngày để đem đến cho khách hàng những tiện ích tối ưu nhất. Và một trong những tính năng tại API mới được Giao Hàng Tiết Kiệm hoàn thiện update chính là đăng đơn hàng dễ vỡ thông qua hệ thống.",
          },
        ];
      }, 1500);
    },
  },
};
</script>

<style lang="scss" scoped>
.wrapper {
  .other-news {
    background-color: #fff;
    border-radius: 24px;
    @media only screen and (min-width: 1280px) {
      background-color: var(--grayColor);
    }
  }
}
</style>
