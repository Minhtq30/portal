<template>
  <div class="apply-recruit-page">
    <div class="wrapper">
      <div class="apply-recruit-page__title">
        <h2 class="uppercase text-center">ứng tuyển</h2>
      </div>
      <div class="apply-recruit-page__content">
        <div class="content-div apply-box">
          <h3 class="uppercase">Nộp Hồ sơ ứng tuyển</h3>
          <div class="p-[13px] md:p-[25px]">
            <div class="apply-box-form">
              <div class="apply-box__title">
                Thông tin cá nhân<span>*</span>
              </div>
              <div class="apply-box-input flex flex-wrap">
                <a-input placeholder="Tên đầy đủ" />
                <a-input placeholder="SĐT" />
                <a-input placeholder="Email" />
              </div>
            </div>
            <div class="apply-box-file">
              <div class="apply-box__title">Hồ sơ của bạn<span>*</span></div>
              <div class="upload-file">
                <p>Upload hồ sơ: Hỗ trợ định dạng *.doc, *.docx, *.pdf</p>
                <button class="upload-file__button border-none">
                  <file-icon />Chọn từ máy tính
                </button>
                <div class="upload-file__info flex -items-center mt-[15px]">
                  <div class="info-file flex items-center flex-1">
                    <div
                      class="w-[15px] h-[15px] bg-green text-white text-[6px] flex-center mr-[10px]"
                    >
                      PDF
                    </div>
                    <p class="info-file__name text-green m-0 text-ellipsis">
                      CV.pdf
                    </p>
                  </div>
                  <div class="button-delete flex-center">
                    <close-icon class="cursor-pointer" />
                  </div>
                </div>
              </div>
            </div>
            <div class="apply-box-button">
              <div class="submit flex-center" @click="handleSubmit">
                ỨNG TUYỂN
              </div>
            </div>
          </div>
        </div>
        <div class="content-div info-job">
          <h3 class="uppercase">Thông tin việc làm</h3>
          <div class="info-job-box">
            <div class="info-job__div info-job-position">
              <div class="info-job__title"><h4>Vị trí/ chức danh:</h4></div>
              <div class="info-job__content">
                <h5>Computer vision research engineer</h5>
              </div>
            </div>
            <div class="info-job__div info-job-address">
              <div class="info-job__title"><h4>Nơi làm việc:</h4></div>
              <div class="info-job__content">
                <h5>GHTK Building,8 Phạm Hùng, Mễ Trì, Nam Từ Liêm, Hà Nội</h5>
              </div>
            </div>
            <div class="info-job__div info-job-contact">
              <div class="info-job__title"><h4>Người liên hệ:</h4></div>
              <div class="info-job__content"><h5>HR Department</h5></div>
            </div>
            <div class="info-job__div info-job-time">
              <div class="info-job__title"><h4>Hạn nộp:</h4></div>
              <div class="info-job__content"><h5>25/10/2022</h5></div>
            </div>
            <div class="info-job__div info-job-format">
              <div class="info-job__title"><h4>Hình thức ứng tuyển:</h4></div>
              <div class="info-job__content">
                <h5>
                  Ứng tuyển trực tuyến. Nhân sự sẽ nhận hồ sơ ngay sau khi hoàn
                  tất ứng tuyển.
                </h5>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <a-modal
      :width="666"
      :visible="showModal"
      :footer="null"
      :centered="true"
      @cancel="handleCancel"
    >
      <div class="modal-apply-job">
        <div class="modal-apply-job__close"></div>
        <div class="modal-apply-job__content">
          <div class="icon flex-center">
            <check-icon></check-icon>
          </div>
          <p>
            Chúc mừng bạn đã ứng tuyển thành công. Bộ phận tuyển dụng sẽ xét
            duyệt hồ sơ và liên hệ trong thời gian sớm nhất.
          </p>
        </div>
      </div>
    </a-modal>
  </div>
</template>

<script>
import FileIcon from "@/components/icons/FileIcon";
import CloseIcon from "@/components/icons/CloseIcon";
import CheckIcon from "@/components/icons/CheckIcon";
import { Input as AInput } from "ant-design-vue";
import { Modal as AModal } from "ant-design-vue";

export default {
  name: "ApplyRecruitPage",
  components: { CheckIcon, CloseIcon, FileIcon, AInput, AModal },
  props: {},
  data() {
    return {
      showModal: false,
    };
  },
  computed: {},
  methods: {
    handleSubmit() {
      this.showModal = true;
    },
    handleCancel() {
      this.showModal = false;
    },
  },
};
</script>

<style lang="scss" scoped>
.apply-recruit-page {
  background: #f8f8f8;
  padding-bottom: 50px;
  .wrapper {
    max-width: 80%;
    margin: auto;
    display: flex;
    flex-direction: column;
  }
  &__title {
    margin: 43px 0 25px 0;
    h2 {
      font-size: 42px;
      font-weight: 700;
      margin-bottom: 0;
      color: #454545;
    }
  }
  &__content {
    width: 100%;
    gap: 50px;
    display: flex;
    h3 {
      font-size: 28px;
      font-weight: 700;
      background: #eeeeee;
      padding: 5px 25px;
      color: var(--colorGlobal);
      margin-bottom: 0;
    }
    .content-div {
      background: #ffffff;
      border-radius: 15px;
      overflow: hidden;
    }
    .apply-box {
      flex: 1;
      &__title {
        font-size: 18px;
        color: var(--colorGlobal);
        span {
          color: red;
        }
      }
      .apply-box-form {
        .apply-box-input {
          margin: 15px 0 20px 0;
          gap: 30px;
          input {
            height: 50px;
            border: 1px solid #aeaeae;
            width: 45%;
            border-radius: 10px;
            font-size: 18px;
          }
        }
      }
      .apply-box-file {
        .upload-file {
          margin-top: 15px;
          padding: 15px 25px;
          background: #eeeeee;
          border-radius: 15px;
          p {
            font-size: 18px;
          }
          &__info {
            width: 200px;
            justify-content: space-between;
          }
          &__button {
            height: 50px;
            background: var(--colorGlobal);
            border-radius: 10px;
            font-size: 14px;
            color: #fff;
            display: flex;
            align-items: center;
            padding: 0 20px;
            cursor: pointer;
            font-weight: 700;
            svg {
              margin-right: 10px;
              margin-bottom: 5px;
            }
          }
        }
      }
      .apply-box-button {
        display: flex;
        justify-content: flex-end;
        margin: 30px 0 0 0;
        .submit {
          width: 180px;
          height: 50px;
          background: #039049;
          font-size: 18px;
          font-weight: 700;
          color: #fff;
          border-radius: 10px;
          cursor: pointer;
          letter-spacing: 1px;
        }
      }
    }
    .info-job {
      width: 30%;
      color: #454545;
      height: 100%;
      .info-job-format {
        display: block;
        &:after {
          display: none;
        }
        .info-job__title {
          width: auto;
        }
        .info-job__content {
          margin: 10px 0;
          text-align: left;
        }
      }
      &__title {
        width: 50%;
        h4 {
          margin: 0;
          font-weight: 600;
          font-size: 17.5px;
        }
      }
      &__content {
        text-align: right;
        flex: 1;
        h5 {
          margin: 0;
          line-height: 21px;
          font-weight: 400;
          font-size: 18px;
        }
      }
      &__div {
        display: flex;
        padding: 20px 0;
        position: relative;
        &:after {
          content: "";
          position: absolute;
          bottom: 0;
          left: 50%;
          transform: translateX(-50%);
          width: 75%;
          height: 1px;
          background: #adadad;
        }
      }
      .info-job-box {
        padding: 0 20px;
      }
    }
  }
  //table and mobile
  @media (max-width: 1500px) {
    .wrapper {
      max-width: 90%;
    }
  }
  @media (max-width: 1280px) {
    .wrapper {
    }
    &__title {
      margin: 25px 0 20px 0;
      h2 {
        font-size: 30px;
      }
    }
    &__content {
      flex-direction: column-reverse;
      .info-job {
        width: 100%;
        &__div {
          &:after {
            width: 100%;
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
    }

    &__title {
      margin: 10px 0 5px 0;
      h2 {
        font-size: 25px;
      }
    }
    &__content {
      gap: 30px;
      h3 {
        font-size: 17px;
        padding: 5px 13px;
      }
      .content-div {
        border-radius: 10px;
      }
      .info-job {
        &__div {
          padding: 20px 0;
        }
        .info-job-box {
          padding: 0 13px;
          h4,
          h5 {
            font-size: 13px;
          }
        }
      }
      .apply-box {
        &__title {
          font-size: 13px;
        }
        .apply-box-file {
          .upload-file {
            margin-top: 10px;
            padding: 10px 15px;
            p:first-child {
              margin-bottom: 7px;
            }
            p {
              font-size: 13px;
            }
            &__info {
              width: 170px;
              margin: 10px 0 5px 0;
            }
            &__button {
              height: 35px;
              border-radius: 10px;
              font-size: 13px;
              padding: 0 10px;
              svg {
                margin-bottom: 3px;
                width: 18px;
              }
            }
          }
        }
        .apply-box-form {
          .apply-box-input {
            margin: 10px 0;
            gap: 15px;
            flex-direction: column;
            input {
              width: 100%;
              height: 40px;
              font-size: 16px;
            }
          }
        }
        .apply-box-button {
          margin-top: 20px;
          .submit {
            width: 135px;
            height: 40px;
            border-radius: 5px;
            padding-top: 4px;
            font-size: 15px;
          }
        }
      }
    }
  }

  //iphone 6
  @media (max-width: 400px) {
  }
}
.modal-apply-job {
  &__close {
  }

  &__content {
    .icon {
      width: 100px;
      height: 100px;
      border: 3px solid rgba(3, 144, 73, 0.5);
      border-radius: 100%;
      margin: 30px auto 20px auto;
    }

    p {
      font-weight: 600;
      font-size: 28px;
      line-height: 40px;
      text-align: center;
      color: #454545;
    }
  }
  @media (max-width: 767px) {
    .icon {
      width: 60px;
      height: 60px;
      padding: 10px;
      margin: 20px auto 10px auto;
    }
    &__content {
      p {
        font-size: 17px;
      }
    }
  }
}
</style>
<style lang="scss">
.ant-modal-content {
  border-radius: 20px;
  i.anticon.anticon-close.ant-modal-close-icon {
    transform: scale(1.7);
    color: var(--colorGlobal);
  }
  @media (max-width: 767px) {
    .ant-modal-body {
      padding: 10px !important;
    }
  }
}
.ant-modal-mask {
  background: rgba(241, 241, 241, 0.7);
}
</style>
