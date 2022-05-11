<template>
  <div
    v-click-outside="handleCloseDropDown"
    class="g-dropdown relative cursor-pointer h-full"
  >
    <div
      class="g-dropdown__input flex items-center"
      @click="handleOpenDropDown"
    >
      <div class="w-full h-full flex items-center text-ellipsis">
        {{ textDisplay }}
      </div>
      <arrow-down2 :class="{ 'arrow-active': showModal }" />
    </div>
    <div
      v-if="showModal"
      class="g-dropdown__content"
      :class="['option--' + optionAlign]"
    >
      <div v-if="search && options.length" class="search">
        <input
          class="pl-4"
          spellcheck="false"
          type="text"
          placeholder="Tìm kiếm"
          :value="searchValue"
          @input="handleChangeSearch"
        />
      </div>
      <span v-if="!listOptions.length" class="text-lg text-empty">
        Danh sách trống
      </span>
      <ul v-else class="g-dropdown__options">
        <li
          v-for="option in listOptions"
          :key="option.value"
          :class="{ 'active-option': value === option.value }"
          @click="handleChangeValue(option)"
        >
          {{ option.title }}
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import ArrowDown2 from "@/components/icons/ArrowDown2";
import { converVietNamese } from "@/utils";

export default {
  name: "DropDown",
  components: { ArrowDown2 },
  props: {
    placeholder: {
      type: String,
      default: "",
    },
    search: {
      type: Boolean,
      default: false,
    },
    options: {
      type: Array,
      default: () => [],
    },
    onChange: {
      type: Function,
      default: () => {},
    },
    value: {
      type: [Number, String],
      default: null,
    },
    optionAlign: {
      type: String,
      default: "left",
    },
  },
  data() {
    return {
      showModal: false,
      searchValue: "",
    };
  },
  computed: {
    textDisplay() {
      if (this.value)
        return this.options.find((v) => v.value === this.value).title;
      return this.placeholder;
    },
    listOptions() {
      if (!this.search || !this.searchValue) return this.options;
      return this.options.filter((item) => {
        const _searchValue = converVietNamese(this.searchValue).toLowerCase();
        const _itemTitle = converVietNamese(item.title).toLowerCase();

        return _itemTitle.includes(_searchValue);
      });
    },
  },
  methods: {
    handleOpenDropDown() {
      this.showModal = !this.showModal;
    },
    handleCloseDropDown() {
      this.showModal = false;
    },
    handleChangeValue(value) {
      this.onChange(value);
      this.showModal = false;
    },
    handleChangeSearch(event) {
      this.searchValue = event.target.value;
    },
  },
};
</script>

<style lang="scss" scoped>
.g-dropdown {
  cursor: pointer;
  .g-dropdown__input {
    height: 100%;
    padding: 0 20px;
    font-size: 25px;
    color: #454545;
    background: #fff;
    border-radius: 7px;
    justify-content: space-between;
    svg {
      width: 20px;
      transition: 0.15s;
    }
    .arrow-active {
      transform: rotate(179deg) !important;
    }
    @media (max-width: 1100px) {
      font-size: 21px;
      .text-ellipsis {
        max-height: 30px;
      }
    }
    @media (max-width: 767px) {
      padding: 0 10px;
      font-size: 13px;
      .text-ellipsis {
        max-height: 20px;
      }
      svg {
        width: 10px !important;
      }
    }
  }

  .g-dropdown__content {
    position: absolute;
    width: 100%;
    top: 70px;
    padding: 20px;
    margin-top: 15px;
    background: #fff;
    border-radius: 7px;
    z-index: 99;
    box-shadow: 0 10px 25px rgba(0, 0, 0, 0.1);
    @media (max-width: 767px) {
      width: 200px;
      top: 40px;
      padding: 10px 10px 5px 10px;
    }
  }

  @media (max-width: 767px) {
    .option--left {
      left: 0;
    }
    .option--center {
      left: 50%;
      transform: translateX(-50%);
    }
    .option--right {
      right: 0;
    }
  }
  .wrapper.active .g-dropdown__content {
    display: block;
  }
  .g-dropdown__content .search {
    position: relative;
    margin-bottom: 10px;
  }
  .search input {
    height: 40px;
    width: 100%;
    outline: none;
    font-size: 17px;
    border-radius: 5px;
    border: 1px solid #b3b3b3;
    @media (max-width: 767px) {
      height: 35px;
      font-size: 13px;
    }
  }
  .search input:focus {
    border: 2px solid var(--colorGlobal);
  }
  .search input::placeholder {
    color: #bfbfbf;
  }
  .g-dropdown__options {
    padding: 0 !important;
    margin-bottom: 0;
    max-height: 250px;
    overflow-y: auto;
    padding-right: 7px;
    li + li {
      margin-top: 5px;
    }
    li {
      height: 50px;
      padding: 0 20px;
      font-size: 18px;
      list-style: none;
      width: 100%;
      display: flex;
      align-items: center;
    }
    @media (max-width: 767px) {
      margin-top: 5px !important;
      li {
        height: 40px;
        padding: 0 10px;
        font-size: 13px;
      }
    }
  }
  .g-dropdown__options li:hover,
  li.selected {
    border-radius: 5px;
    background: #f2f2f2;
  }
  .active-option {
    border-radius: 5px;
    background: #f2f2f2;
  }
}
</style>
