<template>
  <div class="site-blog-tabs">
    <a-tabs v-model="selectedTabKey">
      <a-tab-pane
        v-for="siteBlog in siteBlogs"
        :key="siteBlog.id"
        :tab="siteBlog.name"
        class="sm:px-8 px-4 lg:pt-8 pt-2"
      >
        <div
          v-for="(blog, index) in siteBlog.posts"
          :key="index"
          class="flex ms:my-4 my-1 text-left m-auto justify-center relative border-center pb-2"
        >
          <img
            class="w-[120px] h-[80px] mr-4 lg:flex hidden"
            :src="
              blog.image
                ? blog.image
                : require('assets/images/news/site_blog_image.png')
            "
          />
          <div class="w-full relative lg:h-[100px] h-[60px]">
            <div
              class="sm:text-[18px] text-[13px] font-bold md:leading-[20px] leading-[16px] overflow-title"
            >
              {{ blog.title }}
            </div>
            <div class="absolute lg:bottom-0 lg:pb-4 lg:right-auto right-0">
              {{ blog.date }}
            </div>
          </div>
        </div>
      </a-tab-pane>
    </a-tabs>
  </div>
</template>

<script>
import { Tabs as ATabs } from "ant-design-vue";
export default {
  components: { ATabs },
  props: {
    siteBlogs: {
      type: Array,
      default() {
        return [];
      },
    },
  },
  data() {
    return {
      checkInterval: null,
      selectedTabKey: 1,
    };
  },
  mounted() {
    this.autoChangeTab();
  },
  beforeDestroy() {
    clearInterval(this.checkInterval);
  },
  methods: {
    autoChangeTab() {
      this.checkInterval = setInterval(() => {
        this.selectedTabKey =
          this.selectedTabKey < this.siteBlogs.length
            ? this.selectedTabKey + 1
            : 1;
      }, 5000);
    },
  },
};
</script>
<style lang="scss" scoped>
.overflow-title {
  display: -webkit-box;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: initial;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
}
.overflow-description {
  @media (min-width: 768px) {
    display: -webkit-box;
  }
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: initial;
  -webkit-line-clamp: 4;
  -webkit-box-orient: vertical;
}
</style>
<style lang="scss">
.site-blog-tabs {
  .border-center::after {
    position: absolute;
    content: "";
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);
    background: #454545;
    width: 70%;
    height: 1px;
    margin-bottom: 10px;
  }
  .ant-tabs-nav .ant-tabs-tab {
    margin: 0 12px 0 0;
    padding: 4px 0px;
  }
  .ant-tabs-bar {
    margin: 0px;
    border-bottom: none !important;
  }
  .ant-tabs-nav-container {
    font-weight: 400;
    font-size: 13px;
    color: #454545;
  }
  .ant-tabs-nav .ant-tabs-tab:hover {
    color: #454545;
  }
  .ant-tabs-ink-bar {
    height: 3px;
    background: var(--primaryColor) !important;
  }
  .ant-tabs-nav .ant-tabs-tab-active {
    color: #454545;
  }
  @media (min-width: 640px) {
    .ant-tabs-nav-container {
      font-weight: 700;
      font-size: 17.5px;
    }
    .ant-tabs-nav .ant-tabs-tab {
      margin: 0 20px 0 0;
      padding: 7px 0px;
    }
    .ant-tabs-ink-bar {
      height: 5px;
    }
  }
}
</style>
