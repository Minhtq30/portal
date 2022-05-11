<template>
  <div class="flex flex-col lg:flex-row wrapper">
    <content-left
      data-aos="fade-right"
      class="py-4 px-6 2xl:py-9 2xl:px-12 tab-content-left rounded-2xl"
    />
    <content-right
      data-aos="fade-left"
      class="mt-8 lg:mt-0 lg:ml-4 xl:ml-10 mt-18 rounded-2xl tab-content-right"
    />
  </div>
</template>

<script>
import ContentRight from "./ContentRight.vue";
import ContentLeft from "./ContentLeft.vue";

export default {
  name: "TabPickAddress",
  components: {
    ContentRight,
    ContentLeft,
  },
};
</script>

<style lang="scss" scoped>
.wrapper {
  .tab-content-left {
    background-color: var(--grayColor);
    .pick-addresses {
      background-color: #fff;
      height: 389px;
      overflow-y: auto;
    }
    @media only screen and (min-width: 1024px) {
      flex-basis: 40%;
    }
  }
  .tab-content-right {
    overflow: hidden;
    height: 315px;
    @media only screen and (min-width: 1024px) {
      flex-basis: 60%;
      height: unset;
    }
  }
}
</style>
