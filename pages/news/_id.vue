<template>
  <div class="bg-[#f8f8f8] pb-4">
    <div
      class="py-3 2xl:max-w-[1530px] max-w-[1330px] m-auto px-6 md:text-[42px] text-[26px] font-bold"
    >
      TRANG CHỦ/ TIN TỨC
    </div>
    <div
      class="2xl:max-w-[1530px] max-w-[1330px] lg:px-8 px-6 m-auto flex lg:flex-row flex-col"
    >
      <div
        class="lg:w-3/5 w-full p-5 bg-white text-[18px] leading-[32px] sm:rounded-[25px] rounded-[10px]"
      >
        <div class="text-[28px] font-bold mb-2">{{ post.title }}</div>
        <div class="text-[#039049] mb-2">#{{ post.tag }}</div>
        <div class="mb-2">{{ post.date }}</div>
        <div
          class="mb-3 sm:text-[18px] text-[13px]"
          v-html="post.content"
        ></div>
        <g-button class="btn-primary rounded-full sm:h-[50px]">
          <span
            class="2xl:text-2xl font-bold uppercase px-4 sm:text-[23px] text-[16px]"
            >Liên hệ ngay</span
          >
        </g-button>
      </div>
      <div class="lg:hidden inline text-[18px] font-bold mb-2 mt-5">
        TIN TỨC LIÊN QUAN
      </div>
      <div
        class="md:rounded-[20px] rounded-[10px] bg-white text-center lg:w-2/5 min-h-[312px] w-full xl:ml-10 lg:ml-4 site-blog-tabs"
      >
        <site-blogs :site-blogs="siteBlogs" />
      </div>
    </div>
  </div>
</template>

<script>
import SiteBlogs from "../../components/elements/siteBlogs.vue";
import { GButton } from "@/components/elements";
export default {
  name: "NewsDetail",
  components: {
    GButton,
    SiteBlogs,
  },
  data() {
    return {
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
        },
      ],
      post: {
        title: "Dễ dàng liên hệ nhấc máy gọi ngay",
        content:
          "<img class='w-full h-auto' src='https://giaohangtietkiem.vn/wp-content/uploads/2021/07/Thuc-pham-Web.png'/>Để được hỗ trợ nhanh chóng và kịp thời trong quá trình vận chuyển, từ giờ đối với những ĐH ở trạng thái “Đang giao hàng”, Shop hoàn toàn có thể nhấc máy “alo” ngay cho anh COD phụ trách ĐH đó.<br>Các thao tác vô cùng đơn giản:<br>Chọn “Chats yêu cầu” => “Chats với NV giao hàng” => “Call”<br>GHTK luôn cố gắng mỗi ngày để giúp Shop an tâm hơn ở mỗi chuyến hàng. Chỉ cần Shop cần, Kiệm sẽ nỗ lực hỗ trợ tận tình!!!!",
        date: "25/02/2022",
        tag: "Noibo",
      },
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
