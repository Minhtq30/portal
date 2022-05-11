<template>
  <div class="wrapper">
    <div><slot name="label" /></div>
    <div class="relative flex inner w-full rounded-full">
      <span class="cursor-pointer flex w-full items-center pl-4 pr-10">
        {{ textValue }}
      </span>
      <img
        class="absolute top-1/2 right-4 w-[15px] lg:w-[20px] arrow-icon"
        src="@/assets/icons/arrow-down-select.png"
      />
      <div class="overlay">
        <div class=""></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "GSelect",
  // eslint-disable-next-line vue/require-prop-types
  props: ["value", "onChange", "options"],
  computed: {
    textValue() {
      return "Hà Nội";
    },
  },
};
</script>

<style lang="scss" scoped>
.wrapper {
  .inner {
    height: 35px;
    background-color: #fff;
    .arrow-icon {
      transform: translateY(-50%);
    }
  }
}
</style>
