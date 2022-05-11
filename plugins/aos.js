import Vue from "vue";
import AOS from "aos";

import "aos/dist/aos.css";

document.addEventListener("DOMContentLoaded", AOS.refresh);

Vue.use(AOS.init({ offset: 10 }));
