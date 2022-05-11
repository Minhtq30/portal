<template>
  <div class="wrapper">
    <the-header-desktop class="hidden xl:block" />
    <the-header-mobile class="xl:hidden" />
  </div>
</template>

<script>
import TheHeaderDesktop from "./TheHeaderDesktop.vue";
import TheHeaderMobile from "./TheHeaderMobile.vue";

export default {
  name: "TheHeader",
  components: {
    TheHeaderDesktop,
    TheHeaderMobile,
  },
};
</script>

<style lang="scss" scoped>
.wrapper {
  box-shadow: 0 2px 10px 0 rgba(0, 0, 0, 0.07);
  position: sticky;
  top: 0;
  background-color: #fff;
  z-index: 9999;
}
</style>
