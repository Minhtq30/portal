<template>
  <div class="overflow-x-hidden">
    <div
      id="preload"
      class="fixed top-0 w-full h-full flex items-center justify-center"
    >
      <span>Đang tải trang...</span>
    </div>
    <the-header></the-header>
    <Nuxt />
    <the-footer></the-footer>
  </div>
</template>

<script>
import TheFooter from "~/components/layout/TheFooter/index";
import TheHeader from "~/components/layout/TheHeader/index";
export default {
  components: { TheHeader, TheFooter },
  data() {
    return {};
  },
  head() {
    return {
      title: "GHTK",
      script: [
        {
          src: "https://www.googletagmanager.com/gtag/js?id=G-9C12RL6VTL",
          async: true,
        },
        {
          src: "js/gtag.js",
          async: true,
        },
      ],
    };
  },
};
</script>

<style>
body {
  font-family: "Montserrat", sans-serif;
  font-size: 14px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
}
#preload {
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 99999;
  background-color: #fff;
  visibility: visible;
  opacity: 1;
  transition: 0.2s linear;
}
</style>
