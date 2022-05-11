<template>
  <a-skeleton
    class="g-skeleton-text"
    :active="!!active"
    :paragraph="{ rows: 1 }"
    :style="style"
  />
</template>

<script>
import { Skeleton as ASkeleton } from "ant-design-vue";
export default {
  name: "SkeletonText",
  components: {
    ASkeleton,
  },
  props: {
    active: {
      type: Boolean,
      default: true,
    },
    width: {
      type: String,
      default: "100%",
    },
  },
  computed: {
    style() {
      return { width: this.width };
    },
  },
};
</script>

<style lang="scss">
.g-skeleton-text {
  .ant-skeleton-title {
    width: 100% !important;
    margin: 0 0 8px 0 !important;
    height: 16px !important;
  }
  &.font-size-14 {
    .ant-skeleton-title {
      height: 14px !important;
    }
  }
  &.mb-16 {
    .ant-skeleton-title {
      margin: 0 0 16px 0 !important;
    }
  }
  .ant-skeleton-paragraph {
    display: none;
  }
  &.no-margin {
    .ant-skeleton-title {
      margin: 0 !important;
    }
  }
}
</style>
