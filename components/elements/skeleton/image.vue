<template>
  <a-skeleton
    avatar
    :active="!!active"
    class="g-skeleton-image"
    :style="style"
  />
</template>

<script>
import { Skeleton as ASkeleton } from "ant-design-vue";

export default {
  name: "SkeletonImage",
  components: {
    ASkeleton,
  },
  // eslint-disable-next-line vue/require-prop-types
  props: ["active", "width", "height", "maxWidth"],
  computed: {
    style() {
      const _style = {
        width: this.width ? `${this.width}px` : "100%",
        height: `${this.height || 100}px`,
      };
      if (this.maxWidth) {
        _style.maxWidth = `${this.maxWidth}px`;
      }
      return _style;
    },
  },
};
</script>

<style lang="scss">
.g-skeleton-image {
  .ant-skeleton-header {
    padding: 0;
    width: 100%;
    height: 100%;
    .ant-skeleton-avatar {
      border-radius: 3px !important;
      width: 100%;
      height: 100%;
    }
  }
  .ant-skeleton-content {
    display: none;
  }
  &.circle {
    .ant-skeleton-avatar {
      border-radius: 50% !important;
    }
  }
}
</style>
