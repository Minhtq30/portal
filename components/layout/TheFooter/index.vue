<template>
  <div>
    <the-footer-desktop class="px-4 2xl:px-0 hidden xl:block" />
    <the-footer-mobile class="px-4 2xl:px-0 xl:hidden" />
  </div>
</template>

<script>
import TheFooterDesktop from "./TheFooterDesktop.vue";
import TheFooterMobile from "./TheFooterMobile.vue";

export default {
  name: "TheFooter",
  components: {
    TheFooterDesktop,
    TheFooterMobile,
  },
};
</script>
