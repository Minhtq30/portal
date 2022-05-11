<template>
  <g-map :center="center" :zoom="8" />
</template>

<script>
import GMap from "@/components/elements/Map";

export default {
  components: {
    GMap,
  },
  data() {
    return {
      center: [20.91631197420464, 105.79743274723911],
    };
  },
};
</script>
