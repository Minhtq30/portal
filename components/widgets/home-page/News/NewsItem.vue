<template>
  <div
    class="wrapper pointer"
    :class="{
      'is-first': isFirst,
      [`${news && news.id ? 'id_' + news.id : ''}`]: true,
    }"
    @click="handleChangeRoute(news)"
  >
    <div class="w-1/2 news-item__thumbnail">
      <nuxt-img
        v-if="news && news.thumbnail"
        preset="defaultImage"
        class="w-full"
        :class="{ 'thumbnail-image-other-news': !isFirst }"
        :src="news.thumbnail"
      />
    </div>
    <div
      class="relative news-item-content"
      :style="{ height: !isFirst ? `${height}px` : 'unset' }"
      :class="{ 'mt-6': isFirst, 'ml-4 xl:ml-8': !isFirst }"
    >
      <div class="font-bold news-item__title">
        <span
          :class="{
            'text-xl 2xl:text-[28px]': isFirst,
            'text-[13px] lg:text-[16px] 2xl:text-lg': !isFirst,
          }"
        >
          {{ news ? news.title : "" }}
        </span>
      </div>
      <div class="hidden lg:block py-2 news-item__tags">
        <span
          v-for="(tag, index) in tags"
          :key="index"
          class="text-lg tags-item mr-2 text-green"
        >
          #{{ tag }}
        </span>
      </div>
      <p class="lg:hidden opacity-0 mb-0">.</p>
      <div
        class="text-base news-item__description"
        :class="{
          'text-lg': isFirst,
          'text-sm 2xl:text-base ': !isFirst,
        }"
      >
        <span>{{ news ? news.description : "" }}</span>
      </div>

      <span
        v-if="isOverflow"
        class="absolute bottom-0 pl-2 right-0 bg-white text-primary xl:bg-[#f4f4f4]"
      >
        Xem thêm
      </span>
    </div>
  </div>
</template>

<script>
export default {
  name: "NewsItem",
  props: {
    isFirst: {
      type: Boolean,
      default: false,
    },
    news: {
      type: Object,
      default: () => {},
    },
  },
  data() {
    return {
      height: 0,
      isOverflow: false,
    };
  },
  computed: {
    tags() {
      if (this.news && this.news.tags) return this.news.tags;
      return [];
    },
  },
  mounted() {
    setTimeout(this.getHeight, 1000);
    if (process.client) {
      window.addEventListener("resize", this.getHeight);
    }
  },
  destroyed() {
    if (process.client) {
      window.removeEventListener("resize", this.getHeight);
    }
  },
  methods: {
    getLineHeight(el) {
      if (process.client) {
        try {
          return window.getComputedStyle(el).lineHeight;
        } catch (error) {
          console.error(error);
        }
        return "0px";
      }
      return "0px";
    },
    getHeight() {
      if (this.isFirst) return;
      try {
        if (this.news && this.news.id) {
          const elm =
            document.querySelector(
              `.id_${this.news.id} .thumbnail-image-other-news`
            ) || {};
          const elmRight =
            document.querySelector(
              `.id_${this.news.id} .news-item__description`
            ) || {};
          const elmTitle =
            document.querySelector(`.id_${this.news.id} .news-item__title`) ||
            {};
          const elmTags =
            document.querySelector(`.id_${this.news.id} .news-item__tags`) ||
            {};

          const lineHeightStr = this.getLineHeight(elmRight);

          if (elm && elmRight && elmTitle) {
            let _height = elm.clientHeight;

            const lineHeight = Number(lineHeightStr.replace("px", ""));

            if (lineHeight) {
              const heightOfTags =
                elmTags && elmTags ? elmTags.clientHeight : 0;
              const heightOfTitle = elmTitle.clientHeight || 0;

              _height = _height - heightOfTags - heightOfTitle;

              const totalLines = Math.floor(_height / lineHeight);
              _height = totalLines * lineHeight + heightOfTags + heightOfTitle;
            }

            const totalHeight =
              (elmRight.clientHeight || 0) +
              (elmTitle.clientHeight || 0) +
              (elmTags.clientHeight || 0);

            this.isOverflow = totalHeight > elm.clientHeight;
            this.height = _height;
          }
        }
      } catch (error) {
        console.error(error);
      }
    },
    handleChangeRoute(news = {}) {
      if (!news.id) return;

      this.$router.push({
        name: "chi-tiet-tin-tuc",
        params: { id: news.id },
      });
    },
  },
};
</script>

<style lang="scss" scoped>
.wrapper {
  display: flex;
  &.is-first {
    display: block;
    .news-item__thumbnail {
      width: 100% !important;
    }
    .news-item__description {
      line-height: unset !important;
    }
  }
  &:not(.is-first) {
    .news-item__description {
      line-height: inherit;
    }
    @media (max-width: 1023px) {
      line-height: 16px;
    }
  }
  .news-item-content {
    flex: 1;
    overflow-y: hidden;
  }
}
</style>
