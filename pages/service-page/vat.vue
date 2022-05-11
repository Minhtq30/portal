<template>
  <div class="service-page-vat t-underline t-align-center t-center">
    <div class="vat-info h-screen">
      <!--      <div class="vat-info-box">-->
      <!--        <div class="vat-info-box__title text-center"><h2>XFAST</h2></div>-->
      <!--        <div class="vat-info-box__content">-->
      <!--          <h3>-->
      <!--            Giao và nhận hàng hóa trở nên dễ dàng hơn bao giờ hết! Với XFAST,-->
      <!--            khách hàng của bạn có thể nhận hàng ngay mà không cần chờ đợi quá-->
      <!--            lâu.<br />-->
      <!--            Với những ưu điểm nối bật, XFAST chắc chắn sẽ mang tới sự hài lòng-->
      <!--            cho khách hàng:<br />-->
      <!--            &ensp;Giao nhận tại 24 quận trong nội thành TP. Hà Nội và TP. HCM-->
      <!--            Nhận giao mọi loại hàng hóa bao gồm: Hoa quả, đồ ăn, quần áo, mỹ-->
      <!--            phẩm, sách vở, linh kiện,… <br />Hoạt động vào mọi khung giờ từ thứ-->
      <!--            2 đến Chủ nhật<br />-->
      <!--            Dễ dàng theo dõi toàn trình đơn hàng-->
      <!--          </h3>-->
      <!--        </div>-->
      <!--        <div class="vat-info-action flex items-center">-->
      <!--          <div class="vat-info-action__button button-fee">Biểu phí</div>-->
      <!--          <div class="vat-info-action__button button-advise">Nhận tư vấn</div>-->
      <!--        </div>-->
      <!--      </div>-->
    </div>
    <div class="management-services">
      <div class="wrapper">
        <div class="management-services-box">
          <div class="management-services-box__img">
            <img
              :src="image.imgFulfillment"
              alt="fulfillmentdịch vụ quản lý hàng hóa và vận chuyển trọn gói 4.0"
            />
          </div>
          <div class="management-services-box__content">
            <div class="management-services-box__title">
              <h2 class="service-page-vat__title">
                FULFILLMENT<br />
                DỊCH VỤ QUẢN LÝ HÀNG HÓA<br />
                VÀ VẬN CHUYỂN TRỌN GÓI 4.0
              </h2>
            </div>
            <ul>
              <li>
                <h3>
                  Hệ thống kho bãi thông minh, rộng rãi trải dài khắp 3 miền hỗ
                  trợ bảo quản hàng hóa ngay tại kho Fulfillment của Giao Hàng
                  Tiết Kiệm, giúp tiết kiệm 25-30% chi phí vận hành bán hàng
                  online
                </h3>
              </li>
              <li>
                <arrow-right />
                <h3>
                  Cung cấp ứng dụng App/Web hỗ trợ bán hàng cũng như quản lý tồn
                  kho cập nhật theo thời gian thực
                </h3>
              </li>
              <li>
                <arrow-right />
                <h3>
                  Hàng hóa sẽ được đóng gói ngay sau khi đăng đơn phát sinh
                </h3>
              </li>
              <li>
                <arrow-right />
                <h3>Đội ngũ hỗ trợ care đơn, gọi điện chốt đơn</h3>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    <div class="refund-deliver">
      <div class="wrapper">
        <div class="refund-deliver-box">
          <div class="refund-deliver-box__content">
            <h2 class="service-page-vat__title">
              ĐƠN ĐỔI TRẢ/GIAO HÀNG 1 PHẦN <br />- GIAO HÀNG CHO KHÁCH CHỌN
            </h2>
            <h3>
              Dịch vụ mang đến trải nghiệm tốt hơn trong quá trình mua sắm trực
              tuyến, cho phép khách hàng có thể lựa chọn nhiều mẫu mã, màu
              sắc,... trực tiếp khi nhận hàng.<br />
              Giao hàng 1 phần có 3 loại:<br />
              – Hỗ trợ cho khách chỉ nhận 1 phần hàng và trả 1 phần tiền<br />
              – Hỗ trợ giao 1 sản phẩm đến cho khách và lấy 1 phần hàng khác về
              cho người bán<br />
              – Hỗ trợ khách hàng không nhận sản phẩm nhưng thu 1 phần phí cho
              người bán<br />
              <br />
              Bảng giá dịch vụ:<br />
              Với các sản phẩm được trả về người bán sẽ có mức phí giao hàng nội
              tỉnh là <b>5.000đ/đơn</b> và liên tỉnh bằng 50% phí chuyển đi."
            </h3>
          </div>
          <div class="refund-deliver-box__img">
            <img
              :src="image.imgRefund"
              alt="đơn đổi trả/giao hàng 1 phần - giao hàng cho khách chọn"
            />
          </div>
        </div>
      </div>
    </div>
    <div class="export">
      <div class="export__div export__img">
        <img :src="image.imgExport" alt="xuất giao lại/ xuất giao tiếp" />
      </div>
      <div class="export export__background">
        <img :src="image.backgroundExport" />
      </div>
      <div class="export__div export__content">
        <h2 class="service-page-vat__title">XUẤT GIAO LẠI/ XUẤT GIAO TIẾP</h2>
        <h3>
          Linh hoạt trong khâu giao hàng, giảm tối đa tỷ lệ hoàn hàng cho người
          bán.
          <br />
          <br />
          Bảng giá dịch vụ:<br />

          +Đơn xuất giao tiếp: Giao Hàng Tiết Kiệm sẽ miễn phí hoàn cho mã cũ,
          thu phí niêm yết với đơn liên tỉnh và 70% phí niêm yết với đơn nội
          tỉnh.
        </h3>
      </div>
    </div>
    <div class="storage">
      <div class="wrapper">
        <div class="storage-box">
          <div class="storage-box__content">
            <h2 class="service-page-vat__title">LƯU KHO</h2>
            <h3>
              Tính năng lưu kho tự động của Giao Hàng Tiết Kiệm giúp các Shop
              giảm tối đa tỉ lệ hàng hoàn, tăng khả năng giao hàng thành
              công.<br />
              <br />
              Với những đơn hàng giao 3 ca chưa thành công, Giao Hàng Tiết Kiệm
              sẽ không hoàn hàng mà cập nhật đơn ở trạng thái “Lưu kho chờ Shop
              check”. Lúc này Shop sẽ có 24h để xác nhận trả Shop hoặc thực hiện
              xuất giao lại/xuất giao tiếp cho khách mới trước khi đơn hàng tự
              động lưu kho.<br />
              <br />

              Phí lưu kho sẽ được tính như sau:<br />
              + Ngày đầu tiên: 1.000 đồng/1 đơn<br />
              + Ngày thứ hai: 2.000 đồng/1 đơn<br />
              + Từ ngày thứ ba trở đi: 3.000 đồng/1 đơn
            </h3>
          </div>
          <div class="storage-box__img">
            <img :src="image.imgStorage" alt="lưu kho" />
          </div>
        </div>
      </div>
    </div>
    <div class="cargo-insurance">
      <div class="cargo-insurance__div cargo-insurance__img">
        <img :src="image.imgCargoInsurance" alt="bảo hiểm hàng hóa" />
      </div>
      <div class="cargo-insurance cargo-insurance__background">
        <img :src="image.backgroundCargoInsurance" />
      </div>
      <div class="cargo-insurance__div cargo-insurance__content">
        <h2 class="service-page-vat__title">BẢO HIỂM HÀNG HÓA</h2>
        <h3>
          Các đơn hàng được kê khai giá trị hàng hóa, đóng bảo hiểm.<br />
          <br />
          – Giá trị hàng hóa <1.000.000VNĐ: miễn phí phí bảo hiểm<br />
          <br />
          – Giá trị hàng hóa >=1.000.000VNĐ (tối đa 20.000.000VNĐ), phí bảo hiểm
          bằng 0,5% giá trị hàng hóa."
        </h3>
      </div>
    </div>
    <div class="inspection">
      <div class="wrapper">
        <div class="inspection-box">
          <div class="inspection-box__content">
            <h2 class="service-page-vat__title">ĐỒNG KIỂM</h2>
            <h3>
              Dịch vụ kiểm tra hàng hóa trước khi nhận dành cho khách hàng, hỗ
              trợ khách hàng có thể:<br />
              + Kiểm tra chất lượng sản phẩm trước khi nhận<br />
              + Đảm bảo Shop giao đúng mẫu mã sản phẩm và không bị hư hại trong
              quá trình vận chuyển<br />
            </h3>
          </div>
          <div class="inspection-box__img">
            <img :src="image.imgInspection" alt="đồng kiểm" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import imgFulfillment from "@/assets/images/service-page/fulfillment.png";
import imgRefund from "@/assets/images/service-page/refund-vat-service.png";
import backgroundCargoInsurance from "@/assets/images/service-page/background-cargo-insurance-vat-service.png";
import imgCargoInsurance from "@/assets/images/service-page/cargo-insurance.png";
import imgStorage from "@/assets/images/service-page/storage-vat-service.png";
import backgroundExport from "@/assets/images/service-page/background-export-vat-service.png";
import imgExport from "@/assets/images/service-page/handover-vat-service.png";
import imgInspection from "@/assets/images/service-page/inspection-vat-service.png";
import ArrowRight from "@/components/icons/ArrowRight";

export default {
  name: "Vat",
  components: { ArrowRight },
  data() {
    return {
      image: {
        imgFulfillment,
        imgRefund,
        backgroundCargoInsurance,
        imgCargoInsurance,
        imgStorage,
        backgroundExport,
        imgExport,
        imgInspection,
      },
    };
  },
};
</script>
<style lang="scss" scoped>
.service-page-vat {
  opacity: 1;
  font-size: 30px;
  font-weight: 400;
  background: #f8f8f8;
  &__title {
    font-weight: 700;
    font-size: 42px;
    line-height: 51px;
    color: #039049;
    margin: 0;
    position: relative;
    &:after {
      position: absolute;
      content: "";
      bottom: -10px;
      left: 0;
      width: 40%;
      height: 4px;
      background: #039049;
      @media (max-width: 767px) {
        height: 2px;
        bottom: -7px;
      }
    }
    @media (max-width: 767px) {
      font-size: 16px !important;
      line-height: 20px !important;
    }
  }
  .wrapper {
    max-width: 80%;
    margin: auto;
    @media (max-width: 1500px) {
      max-width: 90%;
    }
  }
  .vat-info {
    display: flex;
    align-items: center;
    color: #ffffff;
    height: 47vw;
    background: url("~@/assets/images/service-page/background-vat-service.png")
      top no-repeat;
    background-size: contain;
  }
  .management-services {
    .management-services-box {
      display: flex;
      gap: 40px;
      padding: 70px 0;
      @media (max-width: 767px) {
        box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
        border-radius: 10px;
        padding: 0;
        overflow: hidden;
        margin: 25px 0;
        gap: 5px !important;
      }
      @media (max-width: 1280px) {
        flex-direction: column;
        gap: 15px;
      }
      &__img {
        width: 630px;
        height: 630px;
        @media (max-width: 767px) {
          height: 270px;
        }
        @media (max-width: 1280px) {
          width: 100%;
          img {
            object-fit: cover;
          }
        }
        img {
          width: 100%;
          height: 100%;
          @media (max-width: 1280px) {
            object-fit: cover;
          }
        }
      }
      &__content {
        flex: 1;
        @media (max-width: 767px) {
          padding: 10px;
        }
        ul {
          list-style: none;
          margin: 30px 0 0 0;
          padding: 0;
          @media (max-width: 767px) {
            margin: 15px 0 0 0;
          }
          h3 {
            font-weight: 400;
            font-size: 26.5px;
            line-height: 32px;
            margin: 0 0 0 20px;
            z-index: 1;
            flex: 1;
            @media (max-width: 1280px) {
              margin: 0;
            }
            @media (max-width: 1024px) {
              margin: 0 0 0 10px;
            }
            @media (max-width: 767px) {
              font-weight: 400;
              font-size: 13px;
              line-height: 16px;
              margin: 0;
            }
          }
          li + li {
            margin-top: 25px;
            @media (max-width: 767px) {
              margin-top: 10px;
            }
          }
          li {
            display: flex;
            align-items: center;
            svg {
              width: 15px;
              @media (max-width: 1280px) {
                width: 30px;
              }
              @media (max-width: 767px) {
                width: 15px;
                margin-right: 10px;
              }
            }
          }
        }
      }
      &__title {
      }
    }
  }
  .refund-deliver {
    .wrapper {
      .refund-deliver-box {
        display: flex;
        gap: 40px;
        padding-bottom: 70px;
        @media (max-width: 1280px) {
          flex-direction: column-reverse;
        }
        @media (max-width: 767px) {
          box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
          border-radius: 10px;
          padding: 0;
          overflow: hidden;
          margin: 25px 0;
          gap: 5px !important;
        }
        &__img {
          width: 718px;
          height: 625px;
          overflow: hidden;
          @media (max-width: 1280px) {
            width: 100%;
            img {
              object-fit: cover;
            }
          }
          @media (max-width: 767px) {
            height: 250px;
          }
          img {
            width: 100%;
            height: 100%;
            object-fit: cover;
          }
        }
        &__content {
          flex: 1;
          @media (max-width: 767px) {
            padding: 10px;
          }
          h3 {
            font-weight: 400;
            font-size: 26.5px;
            line-height: 32px;
            margin: 30px 0 0 0;
            @media (max-width: 767px) {
              font-size: 13px;
              line-height: 16px;
              margin: 20px 0 0 0;
            }
          }
        }
      }
    }
  }
  .export {
    height: 570px;
    display: flex;
    align-items: center;
    background-color: #039049;
    position: relative;
    @media (max-width: 1024px) {
      flex-direction: column-reverse;
      height: auto;
    }
    &__background {
      position: absolute;
      top: 0;
      right: 0;
      width: 570px;
      height: 100%;
      z-index: 0;
      @media (max-width: 1280px) {
        width: 400px;
        height: 400px;
        top: 50%;
        transform: translateY(-50%);
      }
      @media (max-width: 1024px) {
        width: 300px;
        height: 300px;
      }
      @media (max-width: 767px) {
        width: 200px;
        height: 200px;
      }
      img {
        width: 100%;
        height: 100%;
      }
    }
    &__div {
    }
    &__img {
      position: relative;
      height: 100%;
      width: 55%;
      @media (max-width: 1024px) {
        width: 100%;
        z-index: 1;
      }
      img {
        position: absolute;
        bottom: 0;
        left: 0;
        width: 100%;
        z-index: 0;
        @media (max-width: 1024px) {
          position: relative;
        }
      }
    }
    &__content {
      flex: 1;
      @media (max-width: 1024px) {
        width: 80%;
        margin: auto;
        padding-top: 30px;
      }
      @media (max-width: 767px) {
        width: 90%;
      }
      h2 {
        color: #ffffff;
        &:after {
          background: #ffffff;
        }
      }
      h3 {
        width: 80%;
        font-weight: 400;
        font-size: 28px;
        line-height: 34px;
        margin-top: 30px;
        color: #ffffff;
        position: relative;
        @media (max-width: 1024px) {
          width: 100%;
        }
        @media (max-width: 767px) {
          font-size: 13px;
          line-height: 16px;
          margin-top: 20px;
        }
      }
    }
  }
  .storage {
    .wrapper {
      .storage-box {
        display: flex;
        gap: 40px;
        padding: 70px 0;
        @media (max-width: 767px) {
          box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
          border-radius: 10px;
          padding: 0;
          overflow: hidden;
          margin: 25px 0;
          gap: 5px !important;
        }
        @media (max-width: 1280px) {
          flex-direction: column-reverse;
        }
        &__img {
          width: 750px;
          height: 625px;
          @media (max-width: 1280px) {
            width: 100%;
          }
          @media (max-width: 767px) {
            height: 250px;
          }
          img {
            width: 100%;
            height: 100%;
            object-fit: cover;
          }
        }
        &__content {
          flex: 1;
          @media (max-width: 767px) {
            padding: 10px;
          }
          h2 {
            &:after {
              width: 20%;
            }
          }
          h3 {
            font-weight: 400;
            font-size: 26.5px;
            line-height: 32px;
            margin: 30px 0 0 0;
            @media (max-width: 767px) {
              font-size: 13px;
              line-height: 16px;
              margin: 20px 0 0 0;
            }
          }
        }
        &__title {
        }
      }
    }
  }
  .cargo-insurance {
    height: 570px;
    display: flex;
    align-items: center;
    background-color: #039049;
    position: relative;
    gap: 30px;
    overflow: hidden;
    @media (max-width: 767px) {
      gap: 25px;
    }
    @media (max-width: 1024px) {
      flex-direction: column;
      height: auto;
    }
    &__background {
      position: absolute;
      top: 0;
      right: 0;
      width: 570px;
      height: 100%;
      z-index: 0;
      @media (max-width: 1280px) {
        display: none;
      }
      @media (max-width: 1024px) {
        display: block;
        bottom: 0;
        right: 0;
        width: 486px;
        height: 47%;
        top: auto;
      }
      @media (max-width: 767px) {
        right: -112px;
        width: 270px;
      }
      img {
        width: 100%;
        height: 100%;
      }
    }
    &__div {
    }
    &__img {
      position: relative;
      height: 100%;
      width: 828px;
      @media (max-width: 1280px) {
        width: 50%;
      }
      @media (max-width: 1024px) {
        width: 100%;
        position: relative;
        z-index: 1;
      }
      img {
        height: 100%;
        width: 100%;
        object-fit: cover;
      }
    }
    &__content {
      flex: 1;
      overflow: hidden;
      @media (max-width: 1024px) {
        width: 80%;
        margin: auto;
        padding-bottom: 30px;
      }
      @media (max-width: 767px) {
        width: 90%;
      }
      h2 {
        color: #ffffff;
        &:after {
          background: #ffffff;
          width: 27%;
        }
      }
      h3 {
        width: 80%;
        font-weight: 400;
        font-size: 28px;
        line-height: 34px;
        margin-top: 30px;
        color: #ffffff;
        position: relative;
        @media (max-width: 1024px) {
          width: 100%;
        }
        @media (max-width: 767px) {
          font-size: 13px;
          line-height: 16px;
        }
      }
    }
  }
  .inspection {
    .wrapper {
      .inspection-box {
        display: flex;
        align-items: center;
        gap: 40px;
        padding: 70px 0;
        @media (max-width: 1280px) {
          flex-direction: column-reverse;
        }
        @media (max-width: 767px) {
          box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
          border-radius: 10px;
          padding: 0;
          overflow: hidden;
          margin: 25px 0;
          gap: 5px !important;
        }
        &__img {
          width: 790px;
          height: 455px;
          @media (max-width: 1280px) {
            width: 100%;
          }
          @media (max-width: 767px) {
            height: 200px;
          }
          img {
            width: 100%;
            height: 100%;
            object-fit: cover;
          }
        }
        &__content {
          flex: 1;
          @media (max-width: 767px) {
            padding: 10px;
          }
          h2 {
            &:after {
              width: 20%;
            }
          }
          h3 {
            font-weight: 400;
            font-size: 26.5px;
            line-height: 32px;
            margin: 30px 0 0 0;
            width: 80%;
            @media (max-width: 767px) {
              width: 100%;
              font-size: 13px;
              line-height: 16px;
              margin: 17px 0 0 0;
            }
          }
        }
        &__title {
        }
      }
    }
  }
  @media (max-width: 1280px) {
  }
  //tablet
  @media (min-width: 768px) and (max-width: 1200px) {
  }
  //mobile
  @media (max-width: 767px) {
  }

  //iphone 6
  @media (max-width: 400px) {
  }
}
</style>
