<template>
  <header class="wrapper px-6 py-4">
    <div class="flex justify-end header-top">
      <g-button
        class="btn-primary rounded-full h-[30px] w-[115px] 2xl:w-[190px] 2xl:h-[55px] ml-0 xl:mr-8 2xl:mr-16"
      >
        <span class="2xl:text-2xl font-bold">Tải app</span>
      </g-button>
    </div>
    <div class="flex justify-between items-end header-main">
      <div class="header-main__left">
        <nuxt-link :to="{ name: 'trang-chu' }">
          <nuxt-img
            preset="defaultImage"
            class="xl:w-[70%] 2xl:w-full"
            src="images/logo_white.png"
          />
        </nuxt-link>
      </div>
      <div class="header-main__right">
        <nav>
          <ul class="pl-0 mb-0 list-none flex menu ml-0 xl:mr-8 2xl:mr-16">
            <li
              v-for="(menuItem, index) in menuItems"
              :key="menuItem.key"
              class="relative cursor-pointer"
              :class="{
                'is-active': tabActive === menuItem.key,
                'has-children': !!menuItem.children,
                'ml-16': index !== 0,
              }"
              @click="handleSetTabActive(menuItem)"
            >
              <nuxt-link :to="{ name: menuItem.name || 'trang-chu' }">
                <span
                  class="2xl:text-2xl font-bold text-black"
                  :class="{ uppercase: menuItem.key !== 'moshop' }"
                >
                  {{ menuItem.title }}
                </span>
              </nuxt-link>
              <template
                v-if="
                  (menuItem.children || []).filter((sm) => !sm.hidden).length
                "
              >
                <arrow-down class="absolute arrow-down-icon" />
                <ul class="absolute pl-0 mb-0 list-none">
                  <li
                    v-for="subMenuItem in (menuItem.children || []).filter(
                      (sm) => !sm.hidden
                    )"
                    :key="subMenuItem.key"
                    class="px-3 py-2 2xl:px-4 2xl:py-3"
                  >
                    <nuxt-link :to="{ name: subMenuItem.name || 'trang-chu' }">
                      <span class="2xl:text-xl font-bold text-black">
                        {{ subMenuItem.title }}
                      </span>
                    </nuxt-link>
                  </li>
                </ul>
              </template>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  </header>
</template>

<script>
import { GButton } from "@/components/elements";
import { ArrowDown } from "@/components/icons";

import menuItems from "@/contants/menu.js";

export default {
  name: "TheHeaderDesktop",
  components: {
    GButton,
    ArrowDown,
  },
  data() {
    return {
      menuItems,
      tabActive: "gioi-thieu",
    };
  },
  methods: {
    handleSetTabActive(item) {
      this.tabActive = item.key;
    },
  },
};
</script>

<style lang="scss" scoped>
.wrapper {
  .header-main {
    .header-main__right {
      .arrow-down-icon {
        bottom: 9px;
        right: -20px;
      }
      ul.menu {
        ul {
          visibility: hidden;
          background: var(--grayColor);
          border-radius: 10px;
          width: max-content;
          min-width: 100%;
          z-index: 2;
        }
        & > li {
          &.is-active::after {
            display: block;
            content: "";
            width: 100%;
            height: 5px;
            background-color: var(--primaryColor);
            position: absolute;
            bottom: -9px;
          }
          &.has-children:hover::after {
            opacity: 0;
          }
          &:hover {
            ul {
              visibility: visible;
            }
          }
        }
      }
    }
  }
}
</style>
