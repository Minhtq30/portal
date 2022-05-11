<template>
  <div
    class="wrapper flex flex-col m-auto relative items-center justify-between"
  >
    <div class="list-images">
      <div
        class="slide-item cursor-pointer"
        :class="{
          ['left-1']: currentIndex === 0,
          ['right-1']: currentIndex === 1,
          ['current']: currentIndex === 2,
        }"
      >
        <nuxt-img
          preset="defaultImage"
          class="content-image"
          :src="images[0]"
        />
      </div>
      <div
        class="slide-item cursor-pointer"
        :class="{
          ['left-1']: currentIndex === 1,
          ['right-1']: currentIndex === 2,
          ['current']: currentIndex === 0,
        }"
      >
        <nuxt-img
          preset="defaultImage"
          class="content-image"
          :src="images[1]"
        />
      </div>
      <div
        class="slide-item cursor-pointer"
        :class="{
          ['left-1']: currentIndex === 2,
          ['right-1']: currentIndex === 0,
          ['current']: currentIndex === 1,
        }"
      >
        <nuxt-img
          preset="defaultImage"
          class="content-image"
          :src="images[2]"
        />
      </div>
    </div>
  </div>
</template>

<script>
let interval;

export default {
  name: "Carousel3D",
  // eslint-disable-next-line vue/require-prop-types
  props: ["images"],
  data() {
    return {
      currentIndex: 0,
    };
  },
  computed: {
    listImages() {
      const image1 = this.images[0];
      const image2 = this.images[1];
      const image3 = this.images[2];

      if (this.currentIndex === 0) {
        return [image1, image2, image3];
      }
      if (this.currentIndex === 1) {
        return [image2, image3, image1];
      }
      return [image3, image1, image2];
    },
  },
  mounted() {
    interval = setInterval(() => {
      let _currentIndex = this.currentIndex + 1;
      if (_currentIndex > 2) {
        _currentIndex = 0;
      }
      this.currentIndex = _currentIndex;
    }, 3000);
  },
  destroyed() {
    clearInterval(interval);
  },
};
</script>

<style lang="scss" scoped>
.wrapper {
  .list-images {
    position: relative;
    perspective: 1000px;
    display: flex;
    justify-content: center;
    height: 83px;
    .slide-item {
      position: absolute;
      height: 100%;
      transition: all 0.4s ease;
      overflow: hidden;
      visibility: hidden;
      border-radius: 6px;
      .default-image {
        position: absolute;
        z-index: -1;
      }
      .content-image {
        width: 100%;
        height: 100%;
        background-size: cover;
        background-position: center;
      }
    }
    .left-1 {
      width: 68px;
      height: 21px;
      bottom: 0;
      transform: translateX(-159px);
      visibility: visible;
      opacity: 0.65;
    }
    .right-1 {
      width: 68px;
      height: 21px;
      bottom: 0;
      transform: translateX(159px);
      visibility: visible;
      opacity: 0.65;
    }
    .current {
      width: 200px;
      height: 68px;
      bottom: 0;
      @media only screen and (min-width: 1280px) {
        width: 244px;
        height: 83px;
      }
      transform: none;
      z-index: 1;
      visibility: visible;
    }
  }
}
</style>
