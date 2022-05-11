<template>
  <span class="cursor-pointer" @click="toogleHidden">
    <span>{{ value }}</span>
  </span>
</template>

<script>
export default {
  name: "HiddenContent",
  props: ["text", "first", "last", "isAddress"],
  data() {
    return {
      isHidden: true,
    };
  },
  computed: {
    value() {
      if (this.isHidden) {
        if (this.isAddress) {
          const firstAddressIndex = this.text.indexOf(",");
          return "*****" + this.text.slice(firstAddressIndex, this.text.length);
        } else {
          return (
            this.text.slice(0, this.first) +
            "*****" +
            this.text.slice(this.text.length - this.last, this.text.length)
          );
        }
      }
      return this.text;
    },
  },
  methods: {
    toogleHidden() {
      this.isHidden = !this.isHidden;
    },
  },
};
</script>
