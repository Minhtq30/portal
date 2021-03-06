import Vue from "vue";
import { Icon } from "leaflet";
import { LMap, LTileLayer, LMarker } from "vue2-leaflet";

import "leaflet/dist/leaflet.css";

delete Icon.Default.prototype._getIconUrl;
Icon.Default.mergeOptions({
  iconRetinaUrl: require("leaflet/dist/images/marker-icon-2x.png"),
  iconUrl: require("leaflet/dist/images/marker-icon.png"),
  shadowUrl: require("leaflet/dist/images/marker-shadow.png"),
});

Vue.component("LMap", LMap);
Vue.component("LTileLayer", LTileLayer);
Vue.component("LMarker", LMarker);
