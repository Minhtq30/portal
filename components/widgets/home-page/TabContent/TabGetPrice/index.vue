<template>
  <div class="wrapper tab-content-get-price">
    <div class="container mx-auto py-4 px-6 xl:py-9 xl:px-12 form-get-price">
      <div class="address-block from-address mb-4 xl:mb-8">
        <div class="text-xl xl:text-xl font-bold mb-3">Gửi từ</div>
        <div class="grid xl:grid-cols-3 xl:gap-4">
          <drop-down
            class="mb-4 xl:mb-0 xl:max-w-[369px]"
            :search="true"
            :placeholder="'Chọn tỉnh/ thành phố'"
            :options="options.province_id_from"
            :value="filter.province_id_from"
            :on-change="(value) => handleChange(value, 'province_id_from')"
          />
          <drop-down
            class="mb-4 xl:mb-0 xl:max-w-[369px]"
            :search="true"
            :placeholder="'Chọn quận/ huyện'"
            :options="options.district_id_from"
            :value="filter.district_id_from"
            :on-change="(value) => handleChange(value, 'district_id_from')"
          />
          <drop-down
            class="mb-4 xl:mb-0 xl:max-w-[369px]"
            :search="true"
            :placeholder="'Chọn thôn/ xã'"
            :options="options.ward_id_from"
            :value="filter.ward_id_from"
            :on-change="(value) => handleChange(value, 'ward_id_from')"
          />
        </div>
      </div>
      <div class="address-block to-address mb-4 xl:mb-8">
        <div class="text-xl xl:text-xl font-bold mb-3">Gửi tới</div>
        <div class="grid xl:grid-cols-3 xl:gap-4">
          <drop-down
            class="mb-4 xl:mb-0 xl:max-w-[369px]"
            :search="true"
            :placeholder="'Chọn tỉnh/ thành phố'"
            :options="options.province_id_to"
            :value="filter.province_id_to"
            :on-change="(value) => handleChange(value, 'province_id_to')"
          />
          <drop-down
            class="mb-4 xl:mb-0 xl:max-w-[369px]"
            :search="true"
            :placeholder="'Chọn quận/ huyện'"
            :options="options.district_id_to"
            :value="filter.district_id_to"
            :on-change="(value) => handleChange(value, 'district_id_to')"
          />
          <drop-down
            class="mb-4 xl:mb-0 xl:max-w-[369px]"
            :search="true"
            :placeholder="'Chọn thôn/ xã'"
            :options="options.ward_id_to"
            :value="filter.ward_id_to"
            :on-change="(value) => handleChange(value, 'ward_id_to')"
          />
        </div>
      </div>
      <div
        class="flex flex-col xl:flex-row xl:items-center input-weight-wrapper mb-4 xl:mb-8"
      >
        <span class="text-xl xl:text-xl font-bold mr-10 mb-4 xl:mb-0">
          Khối lượng:
        </span>
        <input
          class="pl-6 w-full xl:max-w-[369px]"
          placeholder="Nhập khối lượng"
        />
      </div>
      <div class="text-center">
        <g-button class="btn-primary py-2 xl:py-3 px-14 rounded-full">
          <span class="font-bold text-lg">Tra cứu</span>
        </g-button>
      </div>
    </div>
    <div
      class="container mx-auto mt-4 xl:mt-8 py-4 xl:py-10 text-center value-get-price"
    >
      <div class="text-lg mb-2 xl:mb-4 text-value font-bold">
        Phí vận chuyển: 700.000 VND
      </div>
      <div class="text-sm xl:text-base text-description mx-auto">
        Giá trên đã bao gồm VAT, chưa bao gồm phí bảo hiểm hàng hóa, phụ phí
        khác.
      </div>
    </div>
  </div>
</template>

<script>
import { GButton } from "@/components/elements";
import DropDown from "@/components/elements/dropdown";
import addressService from "@/services/address";

export default {
  components: {
    GButton,
    DropDown,
  },
  data() {
    return {
      options: {
        province_id_from: [],
        district_id_from: [],
        ward_id_from: [],
        province_id_to: [],
        district_id_to: [],
        ward_id_to: [],
      },
      filter: {
        province_id_from: "",
        district_id_from: "",
        ward_id_from: "",
        province_id_to: "",
        district_id_to: "",
        ward_id_to: "",
      },
    };
  },
  watch: {
    "filter.province_id_from": function () {
      this.filter.district_id_from = "";
      this.filter.ward_id_from = "";
      this.options.ward_id_from = [];
      this.getDistrictAddress(this.filter.province_id_from, "district_id_from");
    },
    "filter.district_id_from": function () {
      this.filter.ward_id_from = "";
      if (this.filter.district_id_from !== "") {
        this.getWardAddress(this.filter.district_id_from, "ward_id_from");
      }
    },
    "filter.province_id_to": function () {
      this.filter.district_id_to = "";
      this.filter.ward_id_to = "";
      this.options.ward_id_to = [];
      this.getDistrictAddress(this.filter.province_id_to, "district_id_to");
    },
    "filter.district_id_to": function () {
      this.filter.ward_id_to = "";
      if (this.filter.district_id_to !== "") {
        this.getWardAddress(this.filter.district_id_to, "ward_id_to");
      }
    },
  },
  mounted() {
    this.getProvinceAddress();
  },
  methods: {
    async getProvinceAddress(params = {}) {
      try {
        const response = await addressService.getAddress(params);
        if (response.data.success) {
          this.options.province_id_from = response.data.data.map((d) => {
            return {
              title: d.name,
              value: d.id,
            };
          });
          this.options.province_id_to = response.data.data.map((d) => {
            return {
              title: d.name,
              value: d.id,
            };
          });
        }
      } catch (error) {
        console.error(error);
      }
    },

    async getDistrictAddress(parent_id, key) {
      try {
        const response = await addressService.getAddress({
          parent_id: parent_id,
        });
        if (response.data.success) {
          this.options[key] = response.data.data.map((d) => {
            return {
              title: d.name,
              value: d.id,
            };
          });
        }
      } catch (error) {
        console.error(error);
      }
    },

    async getWardAddress(parent_id, key) {
      try {
        const response = await addressService.getAddress({
          parent_id: parent_id,
        });
        if (response.data.success) {
          this.options[key] = response.data.data.map((d) => {
            return {
              title: d.name,
              value: d.id,
            };
          });
        }
      } catch (error) {
        console.error(error);
      }
    },

    handleChange(value, key) {
      this.filter[key] = value.value;
    },
  },
};
</script>

<style lang="scss" scoped>
.wrapper {
  .container {
    background-color: #fafafa;
    border-radius: 2rem;
    &.form-get-price {
      .input-weight-wrapper {
        input {
          border-radius: 5px;
          border: 0;
          outline: none;
          height: 35px;
          width: 369px;
          max-width: 100%;
        }
      }
    }

    &.value-get-price {
      .text-value {
        color: #039049;
        @media only screen and (min-width: 1280px) {
          font-size: 42px;
        }
      }
      .text-description {
        max-width: 328px;
        @media only screen and (min-width: 1024px) {
          max-width: unset;
        }
        @media only screen and (min-width: 1280px) {
          max-width: unset;
          font-size: 2rem;
          line-height: 34px;
        }
      }
    }
  }
}
</style>

<style lang="scss">
@import "../gdropdown.scss";

.tab-content-get-price {
  @include gropdown-select-pick-address;
}
</style>
