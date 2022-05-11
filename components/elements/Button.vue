<template>
  <button class="cursor-pointer btn">
    <slot />
  </button>
</template>

<script>
export default {
  name: "GButton",
};
</script>

<style lang="scss" scoped>
.btn {
  border: 0;
  outline: none;
  &.btn-primary {
    background-color: var(--primaryColor);
    color: var(--whiteColor);
  }
}
</style>
