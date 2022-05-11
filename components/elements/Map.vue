<template>
  <l-map :center="center" :zoom="zoom" :options="options">
    <l-tile-layer :url="url" :attribution="attribution" />
    <slot />
  </l-map>
</template>

<script>
import "leaflet/dist/leaflet.css";

let Leaflet = {};
let Vue2Leaflet = {};

if (process.client) {
  Leaflet = require("leaflet");
  Vue2Leaflet = require("vue2-leaflet");
  delete Leaflet.Icon.Default.prototype._getIconUrl;
  Leaflet.Icon.Default.mergeOptions({
    iconRetinaUrl: require("leaflet/dist/images/marker-icon-2x.png"),
    iconUrl: require("leaflet/dist/images/marker-icon.png"),
    shadowUrl: require("leaflet/dist/images/marker-shadow.png"),
  });
}

export default {
  name: "GMap",
  components: {
    LMap: Vue2Leaflet.LMap,
    LTileLayer: Vue2Leaflet.LTileLayer,
  },
  props: {
    url: {
      type: String,
      default: "https://cdn.giaohangtietkiem.vn/osm/{z}/{x}/{y}.png",
    },
    attribution: {
      type: String,
      default: `&copy; <a target="_blank" href="http://osm.org/copyright">OpenStreetMap</a> contributors`,
    },
    center: {
      type: Array,
      default: () => [20.91631197420464, 105.79743274723911],
    },
    zoom: {
      type: Number,
      default: 8,
    },
    options: {
      type: Object,
      default: () => ({
        scrollWheelZoom: false,
      }),
    },
  },
};
</script>
