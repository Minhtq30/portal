<template>
  <div class="relative">
    <slot> </slot>
    <a-carousel autoplay :dots="false">
      <div v-for="(item, index) in images" :key="index">
        <img class="w-full h-auto" :src="require(`@/${item}`)" />
      </div>
    </a-carousel>
  </div>
</template>

<script>
import { Carousel as ACarousel } from "ant-design-vue";

export default {
  components: { ACarousel },
  props: {
    images: {
      type: Array,
      default() {
        return [];
      },
    },
  },
};
</script>

<style scoped>
.ant-carousel >>> .slick-slide {
  text-align: center;
  overflow: hidden;
}
</style>
