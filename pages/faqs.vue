<template>
  <div>
    <carousel :images="sliderImages">
      <div
        class="faqs-search absolute z-10 w-full xl:px-72 md:px-28 md:h-[58px] xl:h-[73px] px-12 bottom-8"
      >
        <a-input
          v-model="searchText"
          placeholder="Nhập từ khóa bạn cần tìm"
          class="mx-[40px]"
        >
        </a-input>
      </div>
    </carousel>
    <div class="content mx-8">
      <div
        v-if="searchText === ''"
        class="grid md:grid-cols-3 grid-cols-1 m-auto justify-between max-w-[1516px] md:mt-[62px] mt-5 p-[14px] md:text-[28px] text-[20px] bg-[#f4f4f4]"
      >
        <div
          class="justify-center flex text-center m-auto w-full h-[8rem] items-center p-4 md:border-solid border-0 border-r-2 border-[#c4c4c4]"
        >
          Câu hỏi thường gặp
        </div>
        <div
          class="justify-center flex text-center m-auto w-full h-[8rem] items-center p-4 md:border-solid border-0 border-r-2 border-[#c4c4c4]"
        >
          Câu hỏi về vận hành
        </div>
        <div
          class="justify-center flex text-center m-auto w-full h-[8rem] items-center p-4"
        >
          Câu hỏi về app GHTK
        </div>
      </div>
      <post-list class="my-12" :options="filteredList" />
      <div
        class="flex md:max-w-[1159px] m-auto justify-center md:flex-row flex-col my-[82px]"
      >
        <img
          class="lg:max-w-[500px] lg:max-h-[500px] md:max-w-[369px] md:max-h-[369px] rounded-xl shadow-[0_0px_9px_rgba(0,0,0,0.5)]"
          :src="
            group.image ? group.image : require('@/assets/images/group.png')
          "
        />
        <div class="lg:ml-[80px] ml-3 md:my-8 relative">
          <div
            class="lg:text-[28px] md:text-[22px] uppercase text-md font-bold text-[#025623]"
          >
            {{ group.name }}
          </div>
          <div
            class="md:text-lg text-[10px] font-normal text-[#454545] max-h-[300px] overflow-text mb-3"
          >
            {{ group.desciption }}
          </div>
          <g-button
            class="btn-primary rounded-3xl md:w-[300px] lg:h-[70px] md:h-[58px] md:bottom-0 absolute"
          >
            <span class="md:text-[28px] text-[10px] font-bold uppercase"
              >Tham gia ngay</span
            >
          </g-button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { GButton } from "@/components/elements";
import Carousel from "@/components/elements/carousel.vue";
import postList from "@/components/list/postList.vue";
import { Input as AInput } from "ant-design-vue";
export default {
  name: "Faqs",
  components: { Carousel, GButton, postList, AInput },
  data() {
    return {
      searchText: "",
      group: {
        name: "Cộng đồng Nhà bán lẻ GHTK chia sẻ kinh nghiệm bán hàng",
        desciption:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
      },
      sliderImages: ["assets/images/slide_1.png", "assets/images/slide_2.png"],
      posts: [
        {
          title: "11Lorem ipsum dolor sit amet ?",
          desciption:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
        },
        {
          title: "12Lorem ipsum dolor sit amet ?",
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
  computed: {
    filteredList() {
      return this.posts.filter((post) => {
        return post.title.toLowerCase().includes(this.searchText.toLowerCase());
      });
    },
  },
};
</script>
<style lang="scss">
.faqs-search {
  .ant-input {
    padding-left: 40px;
    height: 100%;
    border-radius: 65px;
    font-size: 24px;
  }
  input::placeholder {
    color: black;
    font-style: italic;
    font-weight: 500;
    font-size: 22px;
    line-height: 22px;
  }
}
</style>
<style scoped>
.overlay-btn {
  position: absolute;
  z-index: 1;
}
.overflow-text {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: initial;
  display: -webkit-box;
  -webkit-line-clamp: 5;
  -webkit-box-orient: vertical;
}
</style>
