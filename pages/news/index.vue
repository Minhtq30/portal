<template>
  <div class="text-[#454545] bg-[#f8f8f8]">
    <carousel :images="sliderImages" />
    <div class="md:text-[51px] text-[26px] md:my-8 my-3 font-bold text-center">
      TIN TỨC
    </div>
    <div
      class="2xl:max-w-[1530px] max-w-[1330px] lg:px-8 px-6 m-auto flex lg:flex-row flex-col"
    >
      <div class="lg:w-3/5 w-full text-black">
        <div
          v-for="(post, index) in news"
          :key="index"
          class="flex bg-white md:rounded-[20px] rounded-[10px] text-center md:mb-10 mb-4"
          style="box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25)"
          @click="
            $router.push({
              name: 'chi-tiet-tin-tuc',
              params: { id: index + 1 },
            })
          "
        >
          <img
            class="2xl:w-[460px] 2xl:h-[350px] md:w-[360px] md:h-[250px] w-1/2 h-1/2 md:rounded-l-[20px] rounded-l-[10px] post-pic"
            :src="
              post.image ? post.image : require('assets/images/news/news.png')
            "
          />
          <div class="w-full md:mx-5 mx-1 text-left relative">
            <div
              class="sm:w-[90px] sm:h-[3px] w-[38px] h-[1px] bg-[#00904A] md:my-4 my-2"
            ></div>
            <div
              class="md:text-[28px] text-[17px] md:leading-[32px] leading-[20px] font-bold uppercase overflow-title"
            >
              {{ post.title }}
            </div>
            <div class="md:my-4 my-1 text-[#039049]">
              #{{ post.tag }}
              <span class="ml-16 md:inline hidden">{{ post.date }}</span>
            </div>
            <div
              class="font-normal text-[17.5px] overflow-description max-h-[300px] leading-[20px] hidden lg:block"
            >
              {{ post.description }}
            </div>
            <div class="absolute bottom-0 text-[13px] md:hidden inline">
              {{ post.date }}
            </div>
          </div>
        </div>
        <pagination :pages-number="pagesNumber" />
      </div>

      <div class="lg:hidden inline text-[18px] font-bold mb-2">
        TIN TỨC LIÊN QUAN
      </div>
      <div
        class="md:rounded-[20px] rounded-[10px] bg-white text-center lg:w-2/5 min-h-[312px] w-full xl:ml-10 lg:ml-4 mb-10 site-blog-tabs"
      >
        <site-blogs :site-blogs="siteBlogs" />
      </div>
    </div>
  </div>
</template>

<script>
import Pagination from "../../components/elements/pagination.vue";
import SiteBlogs from "../../components/elements/siteBlogs.vue";
import Carousel from "@/components/elements/carousel.vue";

export default {
  name: "News",
  components: {
    Carousel,
    Pagination,
    SiteBlogs,
  },
  data() {
    return {
      pagesNumber: 3,
      sliderImages: ["assets/images/slide_1.png", "assets/images/slide_2.png"],
      siteBlogs: [
        {
          id: 1,
          name: "Về chúng tôi",
          posts: [
            {
              title:
                "Lorem ipsum dolor sit amet, consectetur elit, sed do eiusmod tempor Lorem ipsum",
              date: "dd/mm/yyyy",
            },
            {
              title: "Lorem ipsum dolor sit amet  sectetur elit",
              date: "dd/mm/yyyy",
            },
            {
              title: "Lorem ipsum dolor sit amet  sectetur elit",
              date: "dd/mm/yyyy",
            },
            {
              title: "Lorem ipsum dolor sit amet  sectetur elit",
              date: "dd/mm/yyyy",
            },
          ],
        },
        {
          id: 2,
          name: "Tin tức ngành",
          posts: [
            {
              title: "Lorem ipsum dolor sit amet  sectetur elit",
              date: "dd/mm/yyyy",
            },
          ],
        },
        {
          id: 3,
          name: "Dành cho shop",
        },
        {
          id: 4,
          name: "Đa bản sắc",
          posts: [
            {
              title: "Lorem ipsum dolor sit amet  sectetur elit",
              date: "dd/mm/yyyy",
            },
          ],
        },
      ],
      news: [
        {
          title: "Dễ dàng liên hệ nhấc máy gọi ngay",
          description:
            "Để được hỗ trợ nhanh chóng và kịp thời trong quá trình vận chuyển,từ giờ đối với những ĐH ở trạng thái “Đang giao hàng”, Shop hoàntoàn có thể nhấc máy “alo” ngay cho anh COD phụ trách ĐH đó.",
          date: "25/02/2022",
          tag: "Noibo",
        },
        {
          title: "Dễ dàng liên hệ nhấc máy gọi ngay",
          description:
            "Để được hỗ trợ nhanh chóng và kịp thời trong quá trình vận chuyển,từ giờ đối với những ĐH ở trạng thái “Đang giao hàng”, Shop hoàntoàn có thể nhấc máy “alo” ngay cho anh COD phụ trách ĐH đó.",
          date: "25/02/2022",
          tag: "Noibo",
        },
        {
          title: "Dễ dàng liên hệ nhấc máy gọi ngay",
          description:
            "Để được hỗ trợ nhanh chóng và kịp thời trong quá trình vận chuyển,từ giờ đối với những ĐH ở trạng thái “Đang giao hàng”, Shop hoàntoàn có thể nhấc máy “alo” ngay cho anh COD phụ trách ĐH đó.",
          date: "25/02/2022",
          tag: "Noibo",
        },
      ],
      tabActive: "1",
    };
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
