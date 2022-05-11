<template>
  <div class="wrapper tab-content-pick-address">
    <span class="text-[15px] lg:text-lg">Lựa chọn Tỉnh/ Thành phố</span>
    <drop-down
      :search="true"
      :placeholder="'Chọn tỉnh/ thành phố'"
      :options="options.province_id"
      :value="filter.province_id"
      :on-change="handleChangeProvince"
    />
    <div class="mt-4 2xl:mt-8">
      <span class="text-[15px] lg:text-lg">Lựa chọn Quận/ Huyện</span>
      <drop-down
        :search="true"
        :placeholder="'Chọn quận/ huyện'"
        :options="options.district_id"
        :value="filter.district_id"
        :on-change="handleChangeDistrict"
      />
    </div>
    <div class="mt-4 2xl:mt-8 rounded-lg pick-addresses">
      <template v-if="loadingAddressData">
        <div>
          <div
            v-for="item in [1, 2, 3, 4, 5]"
            :key="item"
            class="px-4 pt-2 mt-2 pick-addresses-item"
          >
            <div class="xl:text-xl 2xl:text-2xl font-bold name">
              <g-skeleton-text />
            </div>
            <div class="text-xs address">
              <g-skeleton-text :width="'50%'" />
            </div>
            <div class="w-3/4 mt-2 mx-auto split" />
          </div>
        </div>
      </template>
      <template v-if="pickAddresses.length === 0">
        <div v-if="!filter.district_id" class="p-[20px]">
          <span class="text-[15px] lg:text-lg italic">
            Vui lòng lựa chọn Tỉnh/ Thành phố và Quận/ Huyện để lấy địa chỉ bưu
            cục
          </span>
        </div>
        <div v-else class="p-[20px]">
          <span class="text-[15px] lg:text-lg italic">
            Danh sách địa chỉ bưu cục rỗng
          </span>
        </div>
      </template>
      <template v-else>
        <div
          v-for="pickAddress in pickAddresses"
          :key="pickAddress.id"
          class="cursor-pointer px-4 pt-2 pick-addresses-item"
        >
          <div class="xl:text-xl 2xl:text-2xl font-bold name">
            {{ pickAddress.name }}
          </div>
          <div class="text-xs address">{{ pickAddress.address }}</div>
          <div class="w-3/4 mt-2 mx-auto split" />
        </div>
      </template>
    </div>
  </div>
</template>

<script>
import DropDown from "@/components/elements/dropdown.vue";
import { GSkeletonText } from "@/components/elements/skeleton";
import addressService from "@/services/address";

export default {
  components: {
    DropDown,
    GSkeletonText,
  },
  data() {
    return {
      pickAddresses: [],
      options: {
        province_id: [],
        district_id: [],
      },
      filter: {
        province_id: "",
        district_id: "",
      },
      loadingAddressData: false,
    };
  },
  watch: {
    "filter.province_id": function () {
      this.filter.district_id = "";
      this.pickAddresses = [];
      this.loadingAddressData = false;
      this.getDistrictAddress(this.filter.province_id);
    },
    "filter.district_id": function () {
      this.getNearOfficesAddress();
    },
  },
  mounted() {
    this.getAddress();
  },
  methods: {
    async getAddress(params = {}) {
      try {
        const response = await addressService.getAddress(params);
        if (response.data.success) {
          this.options.province_id = response.data.data.map((d) => {
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

    handleChangeProvince(_province) {
      this.loadingAddressData = false;
      this.filter.province_id = _province.value;
    },

    handleChangeDistrict(_district) {
      this.filter.district_id = _district.value;
    },

    async getDistrictAddress(parent_id) {
      this.loadingAddressData = false;
      try {
        const response = await addressService.getAddress({
          parent_id: parent_id,
        });
        if (response.data.success) {
          this.options.district_id = response.data.data.map((d) => {
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

    async getNearOfficesAddress() {
      if (this.filter.district_id && this.filter.province_id) {
        this.loadingAddressData = true;
        try {
          const response = await addressService.getNearOffices({
            province_id: this.filter.province_id,
            district_id: this.filter.district_id,
          });
          if (response.data.success) {
            this.pickAddresses = response.data.data.map((d) => {
              return {
                ...d,
                address: d.content,
              };
            });
          }
        } catch (error) {
          console.error(error);
        } finally {
          this.loadingAddressData = false;
        }
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.wrapper {
  .pick-addresses {
    background-color: #fff;
    height: 390px;
    overflow-y: auto;
    .pick-addresses-item {
      .split {
        background-color: #000;
        height: 1px;
      }
    }
  }
}
</style>

<style lang="scss">
@import "../gdropdown.scss";

.tab-content-pick-address {
  @include gropdown-select-pick-address;
}
</style>
