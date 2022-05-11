<template>
  <div class="sm:text-[28px] text-[18px] font-bold my-6 text-black">
    <div class="relative flex">
      <div
        v-for="index in pagesNumber"
        :key="index"
        class="mr-3 relative"
        @click="pageActive = index"
      >
        <span
          :class="{
            'is-active': pageActive === index,
          }"
          >{{ index }}</span
        >
      </div>
      <span class="flex sm:text-[18px] text-[13px] items-center">>></span>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    pagesNumber: {
      type: Number,
      default() {
        return 1;
      },
    },
  },
  data() {
    return {
      pageActive: 1,
    };
  },
};
</script>

<style scoped>
.is-active::after {
  position: absolute;
  content: "";
  bottom: 4px;
  left: 50%;
  transform: translateX(-50%);
  background: var(--primaryColor);
  width: 100%;
  height: 2px;
}
</style>
