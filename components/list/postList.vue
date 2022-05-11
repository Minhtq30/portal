<template>
  <div class="wrapper">
    <div
      v-for="(item, index) in options"
      :key="index"
      class="flex mb-[27px] max-w-[1337px] m-auto justify-center flex-col md:flex-row"
    >
      <img
        class="md:w-[321px] md:h-[214px] w-full h-auto rounded-3xl"
        :src="
          item.image ? item.image : require('assets/images/default_image.png')
        "
      />
      <div class="md:ml-[73px] md:mt-0 mt-2">
        <div class="header md:text-4xl text-lg md:mb-3 font-bold">
          {{ item.title }}
        </div>
        <div
          class="md:text-xl text-[10px] font-normal text-[#454545] max-h-[300px] overflow-text"
        >
          {{ item.desciption }}
        </div>
        <div
          class="italic md:text-lg text-[10px] mt-5 md:text-left md:mr-auto text-right mr-5"
        >
          xem chi tiết
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    options: {
      type: Array,
      default() {
        return [];
      },
    },
  },
};
</script>

<style lang="scss" scoped>
.overflow-text {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: initial;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
}
</style>
