<template>
  <div class="detail-job">
    <div class="detail-job-info">
      <div class="job-info-box flex items-center">
        <div class="job-info-box__icon icon-dollar flex-center">
          <dollar-icon />
        </div>
        <div class="job-info-box__title">
          <div class="text-[13px] md:text-[18px] font-bold">Mức lương</div>
          <div class="text-[13px] md:text-[18px]">10tr-20tr</div>
        </div>
      </div>
      <div class="job-info-box flex items-center">
        <div class="job-info-box__icon icon-tie flex-center">
          <tie-icon />
        </div>
        <div class="job-info-box__title">
          <div class="text-[13px] md:text-[18px] font-bold">Cấp bậc</div>
          <div class="text-[13px] md:text-[18px]">Junior</div>
        </div>
      </div>
      <div class="job-info-box flex items-center">
        <div class="job-info-box__icon icon-bag flex-center">
          <bag-icon />
        </div>
        <div class="job-info-box__title">
          <div class="text-[13px] md:text-[18px] font-bold">
            Hình thức làm việc
          </div>
          <div class="text-[13px] md:text-[18px]">Toàn thời gian</div>
        </div>
      </div>
      <div class="job-info-box flex items-center">
        <div class="job-info-box__icon icon-medal flex-center">
          <medal-icon />
        </div>
        <div class="job-info-box__title">
          <div class="text-[13px] md:text-[18px] font-bold">Kinh nghiệm</div>
          <div class="text-[13px] md:text-[18px]">1 năm</div>
        </div>
      </div>
      <div class="job-info-box flex items-center">
        <div class="job-info-box__icon icon-setting flex-center">
          <setting-icon />
        </div>
        <div class="job-info-box__title">
          <div class="text-[13px] md:text-[18px] font-bold">Chuyên môn</div>
          <div class="text-[13px] md:text-[18px]">Front-end</div>
        </div>
      </div>
      <div class="job-info-box flex items-center">
        <div class="job-info-box__icon icon-place flex-center">
          <place-icon />
        </div>
        <div class="job-info-box__title">
          <div class="text-[13px] md:text-[18px] font-bold">
            Địa điểm làm việc
          </div>
          <div class="text-[13px] md:text-[18px]">GHTK Building</div>
        </div>
      </div>
    </div>
    <div class="detail-job-description">
      <div class="detail-job__title">Mô tả công việc</div>
      <div class="detail-job__content detail-job-description__content">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
        velit esse cillum dolore eu fugiat nulla pariatur.<br />
        Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
        dolore eu fugiat nulla pariatur.
      </div>
    </div>
    <div class="detail-job-request">
      <div class="detail-job__title">Yêu cầu</div>
      <div class="detail-job__content detail-job-description__content">
        <ul>
          <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
          <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
          <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
          <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
          <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
        </ul>
      </div>
    </div>
    <div class="detail-job-right">
      <div class="detail-job__title">Quyền lợi</div>
      <div class="detail-job__content detail-job-description__content">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
        velit esse cillum dolore eu fugiat nulla pariatur.
      </div>
    </div>
    <div class="detail-job-actions">
      <div class="detail-job-actions__submit flex-center" @click="handleSubmit">
        Ứng Tuyển
      </div>
    </div>
  </div>
</template>

<script>
import DollarIcon from "@/components/icons/DollarIcon";
import BagIcon from "@/components/icons/BagIcon";
import MedalIcon from "@/components/icons/MedalIcon";
import TieIcon from "@/components/icons/TieIcon";
import SettingIcon from "@/components/icons/SettingIcon";
import PlaceIcon from "@/components/icons/PlaceIcon";
export default {
  name: "DetailJob",
  components: {
    PlaceIcon,
    SettingIcon,
    TieIcon,
    MedalIcon,
    BagIcon,
    DollarIcon,
  },
  data() {
    return {
      id: 123,
    };
  },
  methods: {
    handleSubmit() {
      this.$router.push({
        name: "chi-tiet-tuyen-dung",
        params: { id: this.id },
      });
    },
  },
};
</script>
<style lang="scss" scoped>
.detail-job {
  &__title {
    font-size: 28px;
    font-weight: 700;
    color: #000;
    margin-top: 20px;
    margin-bottom: 10px;
  }
  &__content {
    font-size: 18px;
    color: #000;
  }
  .detail-job-info {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 40px;
    background: rgba(195, 226, 211, 0.3);
    border-radius: 15px;
    padding: 30px 20px;
    .job-info-box {
      margin-left: 20px;
      &__icon {
        width: 55px;
        height: 55px;
        background: #039049;
        border-radius: 100%;
        margin-right: 10px;
      }
      &__title {
        color: #454545;
      }
    }
  }
  .detail-job-actions {
    display: flex;
    justify-content: flex-end;
    margin: 30px 0 10px 0;
    &__submit {
      width: 197px;
      height: 60px;
      background: #039049;
      font-size: 25px;
      font-weight: 700;
      color: #fff;
      border-radius: 10px;
      cursor: pointer;
    }
  }
  @media (max-width: 767px) {
    &__title {
      font-size: 13px;
      margin-top: 10px;
      margin-bottom: 5px;
    }
    &__content {
      font-size: 13px;
    }
    .detail-job-info {
      padding: 8px;
      gap: 10px;
      .job-info-box {
        margin-left: 0px;
        .icon-dollar,
        .icon-tie {
          padding: 10px;
        }
        .icon-bag,
        .icon-setting {
          padding: 6px;
        }
        .icon-medal {
          padding: 8px;
        }
        .icon-place {
          padding: 7px;
        }
        &__icon {
          width: 30px;
          height: 30px;
        }
      }
    }
    .detail-job-actions {
      margin: 15px 0 5px 0;
      &__submit {
        width: 100px;
        height: 35px;
        font-size: 14px;
        border-radius: 5px;
      }
    }
  }
}
</style>
<style lang="scss">
.detail-job {
}
</style>
