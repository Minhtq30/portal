<template>
  <div class="recruit-page t-underline">
    <div class="recruit-page__background h-screen"></div>
    <div class="wrapper">
      <div class="recruit-page-filter flex items-center">
        <div class="recruit-page-filter__dropdown">
          <drop-down
            :search="true"
            :placeholder="'Địa điểm'"
            :options="options.address"
            :value="filter.address"
            :on-change="handleChangeAdress"
          />
        </div>
        <div class="recruit-page-filter__dropdown">
          <drop-down
            :search="true"
            :placeholder="'Ngành nghề'"
            :option-align="'center'"
          />
        </div>
        <div class="recruit-page-filter__dropdown">
          <drop-down
            :search="true"
            :placeholder="'Cấp bậc'"
            :option-align="'right'"
          />
        </div>
        <div class="recruit-page-filter__button">
          <span>Tìm kiếm</span>
          <div class="icon-search hidden"><search-icon /></div>
        </div>
      </div>
      <div class="vacancies flex">
        <div class="vacancies-list">
          <h2>Các vị trí đang tuyển dụng</h2>
          <div class="">
            <a-collapse @change="changeActivekey">
              <a-collapse-panel v-for="(i, index) in 3" :key="index" header="">
                <div slot="extra" class="collapse-header flex flex-col">
                  <h3 class="uppercase">security guard</h3>
                  <div
                    v-if="!activeKey.includes(index)"
                    class="icons flex items-center gap-10 mt-[10px]"
                  >
                    <div class="flex items-center">
                      <div
                        class="icon-dollar flex-center bg-green w-[25px] h-[25px] p-[8px] rounded-full mr-[10px]"
                      >
                        <dollar-icon />
                      </div>
                      <h4 class="m-0 text-[18px] text-black">Mức lương</h4>
                    </div>
                    <div class="flex items-center">
                      <div
                        class="icon-place flex-center bg-green w-[25px] h-[25px] p-[6px] rounded-full mr-[10px]"
                      >
                        <place-icon />
                      </div>
                      <h4 class="m-0 text-[18px] text-black">Địa điểm</h4>
                    </div>
                  </div>
                  <div
                    :class="{ 'arrow-active': activeKey.includes(index) }"
                    class="collapse-header__arrow flex-center"
                  >
                    <arrow-down2 />
                  </div>
                </div>
                <detail-job v-if="activeKey.includes(index)"></detail-job>
              </a-collapse-panel>
            </a-collapse>
          </div>
        </div>
        <div class="vacancies-other">
          <h2>Công việc liên quan</h2>
          <div class="vacancies-other__list">
            <ul>
              <li>
                <h3>Lorem ipsum</h3>
                <div class="info flex justify-between items-center">
                  <div>1000</div>
                  <div>dd/mm/yyyy</div>
                </div>
              </li>
              <li>
                <h3>Lorem ipsum</h3>
                <div class="info flex justify-between items-center">
                  <div>1000</div>
                  <div>dd/mm/yyyy</div>
                </div>
              </li>
              <li>
                <h3>Lorem ipsum</h3>
                <div class="info flex justify-between items-center">
                  <div>1000</div>
                  <div>dd/mm/yyyy</div>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import DetailJob from "@/components/widgets/recruit-page/detailJob";
import DollarIcon from "@/components/icons/DollarIcon";
import PlaceIcon from "@/components/icons/PlaceIcon";
import ArrowDown2 from "@/components/icons/ArrowDown2";
import DropDown from "@/components/elements/dropdown.vue";
import SearchIcon from "@/components/icons/SearchIcon";
import { Collapse as ACollapse } from "ant-design-vue";
export default {
  name: "RecruitPage",
  components: {
    SearchIcon,
    DropDown,
    ArrowDown2,
    PlaceIcon,
    DollarIcon,
    DetailJob,
    ACollapse,
  },
  data() {
    return {
      activeKey: [],
      filter: {
        address: "",
      },
      options: {
        address: [
          {
            title: "Hà Nội",
            value: 1,
          },
          {
            title: "Hồ Chí Minh",
            value: 2,
          },
        ],
      },
    };
  },
  methods: {
    changeActivekey(key) {
      this.activeKey = key.map((k) => Number(k));
    },
    handleChangeAdress(data) {
      this.filter.address = data.value;
    },
  },
};
</script>
<style lang="scss" scoped>
.recruit-page {
  background: #f8f8f8;
  padding-bottom: 50px;
  .arrow-active {
    top: 15% !important;
    transform: rotate(179deg) !important;
  }
  &__background {
    background: url("~@/assets/images/recruit-page/background-recruit-page.png")
      top no-repeat;
    background-size: contain;
    height: 47vw;
  }
  .wrapper {
    max-width: 80%;
    margin: auto;
    display: flex;
    flex-direction: column;
  }
  .recruit-page-filter {
    margin: 50px 0 40px 0;
    height: 60px;
    gap: 25px;
    @media (max-width: 1100px) {
      height: 55px;
    }
    &__dropdown {
      height: 100%;
      width: 250px;
      background: #fff;
      border-radius: 10px;
      position: relative;
    }
    &__button {
      background: #00904a;
      height: 100%;
      width: 200px;
      color: #fff;
      border-radius: 8px;
      display: flex;
      justify-content: center;
      align-items: center;
      font-size: 25px;
      cursor: pointer;
      @media (max-width: 767px) {
        width: 50px;
        span {
          display: none;
        }
        .icon-search {
          padding-top: 5px;
          display: block;
        }
      }
    }
  }
  .vacancies {
    width: 100%;
    gap: 50px;
    @media (max-width: 1100px) {
      flex-direction: column;
    }
    .vacancies-list {
      flex: 1;
      h2 {
        font-size: 28px;
        font-weight: 600;
        color: #454545;
      }
      h3 {
        font-size: 25px;
        font-weight: 700;
        color: #000;
      }
    }
    .vacancies-other {
      width: 25%;
      @media (max-width: 1100px) {
        width: 100%;
      }
      h2 {
        font-size: 28px;
        font-weight: 600;
        color: #454545;
      }
      &__list {
        background: #ffffff;
        border-radius: 20px;
        padding: 0 20px 20px 20px;
        min-height: 500px;
        max-height: 900px;
        @media (max-width: 767px) {
          min-height: 400px;
        }
        ul {
          list-style: none;
          padding: 0;
          margin: 0;
          li {
            padding: 10px 0;
            cursor: pointer;
            position: relative;
            h3 {
              font-size: 20px;
              font-weight: 700;
              color: #000;
              margin-bottom: 5px;
            }
            .info {
              font-size: 14px;
            }
          }
          li:after {
            content: "";
            position: absolute;
            bottom: 0;
            left: 50%;
            transform: translateX(-50%);
            width: 70%;
            height: 1px;
            background: #757575;
            transition: 0.5s;
          }
          li:hover::after {
            width: 90% !important;
          }
        }
      }
    }
  }
  //table and mobile
  @media (max-width: 1400px) {
    .wrapper {
      max-width: 90%;
    }
  }
  @media (max-width: 1280px) {
    .wrapper {
      .recruit-page-filter {
        gap: 30px;
        &__dropdown {
          width: 25%;
          @media (max-width: 1100px) {
            flex-direction: column;
          }
        }
      }
      .vacancies {
        gap: 30px;
        .vacancies-other {
          h2 {
            font-size: 25px;
          }
          &__list {
            padding: 0 15px 15px 15px;
            border-radius: 10px;
          }
        }
        .vacancies-list {
          h2 {
            font-size: 25px;
          }
          h3 {
            font-size: 20px;
          }
        }
      }
    }
  }
  //tablet
  @media (min-width: 768px) and (max-width: 1200px) {
  }
  //mobile
  @media (max-width: 767px) {
    .wrapper {
      .recruit-page-filter {
        margin: 20px 0 17px 0;
        height: 35px;
        gap: 7px;
        &__dropdown {
          flex: 1;
        }
      }
      .vacancies {
        gap: 20px;
        .vacancies-other {
          h2 {
            font-size: 17px;
          }
          h3 {
            font-size: 17px;
          }
          .info {
            font-size: 13px;
          }
        }
        .vacancies-list {
          h2 {
            font-size: 17px;
          }
          h3 {
            font-size: 13px;
          }
        }
      }
    }
  }

  //iphone 6
  @media (max-width: 400px) {
  }
}
</style>
<style lang="scss">
.recruit-page {
  .recruit-page-filter {
  }
  .vacancies {
    .vacancies-list {
      .collapse-header {
        position: relative;
        &__arrow {
          position: absolute;
          right: 0;
          top: 50%;
          transform: translateY(-50%);
          transition: 0.5s;
          @media (max-width: 1100px) {
            width: 20px;
          }
          @media (max-width: 767px) {
            width: 15px;
          }
        }
      }
      .ant-collapse {
        border: none;
        .ant-collapse-item + .ant-collapse-item {
          margin-top: 25px;
          @media (max-width: 767px) {
            margin-top: 15px;
          }
        }
        .ant-collapse-item {
          background: #fff;
          border: none;
          border-radius: 20px;
          @media (max-width: 767px) {
            border-radius: 10px;
          }
        }
        .ant-collapse-header {
          display: flex;
          flex-direction: column;
          padding: 22px 27px;
          .anticon {
            display: none;
          }
          @media (max-width: 1280px) {
            padding: 15px 20px;
          }
          @media (max-width: 767px) {
            padding: 5px 15px;
            .icons {
              margin-top: 5px;
            }
            .icon-place {
              width: 20px;
              height: 20px;
              padding: 5px;
            }
            .icon-dollar {
              width: 20px;
              height: 20px;
              padding: 6px;
            }
            h3 {
              margin-bottom: 0;
            }
            h4 {
              font-size: 13px;
            }
          }
        }
        .ant-collapse-content {
          border: none !important;
          border-radius: 20px;
          @media (max-width: 767px) {
            border-radius: 10px;
          }
        }
        .ant-collapse-content-box {
          padding: 0 27px 27px 27px;
          @media (max-width: 767px) {
            padding: 0 10px 10px 10px;
          }
        }
      }
    }
  }
}
</style>
