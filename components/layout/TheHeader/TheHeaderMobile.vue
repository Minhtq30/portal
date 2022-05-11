<template>
  <div v-click-outside="handleClickOutside" class="wrapper">
    <header class="relative flex items-center" @click="handleClickHeader">
      <div class="cursor-pointer hamburger ml-4" @click.stop="toggleCollapsed">
        <div class="hamburger-line"></div>
        <div class="hamburger-line"></div>
        <div class="hamburger-line"></div>
      </div>
      <nuxt-link :to="{ name: 'trang-chu' }">
        <img
          class="absolute top-1/2 left-1/2 translate-y-[-50%] translate-x-[-50%]"
          src="@/assets/images/logo_header_mobile.png"
        />
      </nuxt-link>
    </header>
    <div class="fixed top-0 menu" :class="{ 'is-collapsed': isCollapsed }">
      <div class="flex justify-between items-center px-[10px] menu-header">
        <div>
          <img class="w-[19px]" src="@/assets/icons/facebook.svg" />
          <img class="w-[19px] ml-[10px]" src="@/assets/icons/instagram.svg" />
          <img class="w-[19px] ml-[10px]" src="@/assets/icons/tiktok.svg" />
        </div>
        <img
          class="cursor-pointer"
          src="@/assets/icons/close_icon.png"
          @click="toggleCollapsed"
        />
      </div>
      <div class="menu-mobile px-[10px]">
        <div
          v-for="menuItem in menu"
          :key="menuItem.key"
          class="cursor-pointer menu-mobile-item"
          :class="{ 'is-active': menuItem.key === tabActive }"
        >
          <div
            class="flex justify-between items-center py-[10px]"
            @click="handleSetTabActive(menuItem)"
          >
            <div class="flex items-center">
              <img :src="menuItem.icon" />
              <div class="ml-2">
                <nuxt-link
                  :to="{
                    name: !!menuItem.children ? $route.name : menuItem.name,
                  }"
                >
                  <span
                    class="text-black font-bold"
                    :class="{ uppercase: menuItem.key !== 'moshop' }"
                  >
                    {{ menuItem.title }}
                  </span>
                </nuxt-link>
              </div>
            </div>
            <img
              v-if="(menuItem.children || []).filter((m) => !m.hidden).length"
              class="w-[12px] arrow-icon"
              src="@/assets/icons/arrow-down-select.png"
            />
          </div>
          <div class="sub-menu-mobile pl-[22px] pr-[10px]">
            <div
              v-for="subMenu in (menuItem.children || []).filter(
                (m) => !m.hidden
              )"
              :key="subMenu.key"
              class="cursor-pointer text-[13px] py-[5px]"
            >
              <nuxt-link :to="{ name: subMenu.name }">
                <span class="text-black">{{ subMenu.title }}</span>
              </nuxt-link>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import menu from "@/contants/menu";

import homeIcon from "@/assets/icons/home_header.png";
import introIcon from "@/assets/icons/intro_header.png";
import searchIcon from "@/assets/icons/search_header.png";
import serviceIcon from "@/assets/icons/service_header.png";
import moshopIcon from "@/assets/icons/moshop_header.png";
import recruitIcon from "@/assets/icons/recruit_header.png";
import faqIcon from "@/assets/icons/faq_header.png";

export const icons = {
  "trang-chu": homeIcon,
  "gioi-thieu": introIcon,
  "tra-cuu": searchIcon,
  "dich-vu": serviceIcon,
  moshop: moshopIcon,
  "tuyen-dung": recruitIcon,
  "hoi-dap": faqIcon,
};

export default {
  name: "TheHeaderMobile",
  data() {
    return {
      isCollapsed: false,
      tabActive: "",
      menu: [
        {
          key: "trang-chu",
          title: "Trang chủ",
          name: "trang-chu",
          icon: homeIcon,
        },
        ...menu.map((m) => ({ ...m, icon: icons[m.key] })),
      ],
    };
  },
  watch: {
    isCollapsed(_isCollapsed) {
      if (!_isCollapsed) {
        this.tabActive = "";
      }
    },
  },
  methods: {
    toggleCollapsed() {
      this.isCollapsed = !this.isCollapsed;
    },
    handleSetTabActive(menuItem) {
      this.tabActive = this.tabActive === menuItem.key ? "" : menuItem.key;
    },
    handleClickOutside() {
      this.isCollapsed = false;
    },
    handleClickHeader() {
      if (this.isCollapsed) {
        this.isCollapsed = false;
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.wrapper {
  header {
    height: 42px;
  }
  .hamburger {
    .hamburger-line {
      width: 20px;
      height: 3px;
      background-color: #c4c4c4;
      border-radius: 2px;
      &:not(:last-child) {
        margin-bottom: 2px;
      }
    }
  }
  .menu {
    width: 250px;
    background-color: #fff;
    z-index: 9999;
    height: 100vh;
    transform: translateX(-100%);
    transition: 0.3s ease;
    &.is-collapsed {
      box-shadow: 0px 4px 12px 6px rgba(0, 0, 0, 0.25);
      transform: translateX(0);
    }
    .menu-header {
      height: 42px;
    }
    .menu-mobile {
      overflow-y: auto;
      height: calc(100vh - 42px);
      .menu-mobile-item {
        .sub-menu-mobile {
          height: 0;
          visibility: hidden;
        }
        .arrow-icon {
          transition: 0.2s ease;
          transform: rotate(0);
        }
        &.is-active {
          .sub-menu-mobile {
            height: 100%;
            visibility: visible;
          }
          .arrow-icon {
            transform: rotate(180deg);
          }
        }
      }
    }
  }
}
</style>
