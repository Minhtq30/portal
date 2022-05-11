<template>
  <div class="service-page-xfast t-underline t-align-center t-center">
    <div class="xfast-info h-screen">
      <div class="xfast-info-box">
        <div class="xfast-info-box__title text-center"><h2>XFAST</h2></div>
        <div class="xfast-info-box__content">
          <h3>
            Giao và nhận hàng hóa trở nên dễ dàng hơn bao giờ hết! Với XFAST,
            khách hàng của bạn có thể nhận hàng ngay mà không cần chờ đợi quá
            lâu.<br />
            Với những ưu điểm nối bật, XFAST chắc chắn sẽ mang tới sự hài lòng
            cho khách hàng:<br />
            &ensp;Giao nhận tại 24 quận trong nội thành TP. Hà Nội và TP. HCM
            Nhận giao mọi loại hàng hóa bao gồm: Hoa quả, đồ ăn, quần áo, mỹ
            phẩm, sách vở, linh kiện,… <br />Hoạt động vào mọi khung giờ từ thứ
            2 đến Chủ nhật<br />
            Dễ dàng theo dõi toàn trình đơn hàng
          </h3>
        </div>
        <div class="xfast-info-action flex items-center">
          <div class="xfast-info-action__button button-fee">Biểu phí</div>
          <div class="xfast-info-action__button button-advise">Nhận tư vấn</div>
        </div>
      </div>
    </div>
    <div class="xfast-fee h-screen">
      <div class="xfast-fee__title text-center"><h2>BIỂU PHÍ XFAST</h2></div>
      <div class="xfast-fee__small text-center"></div>
      <div class="xfast-fee__content"></div>
      <div class="xfast-fee__note">
        <p>
          <i
            >*Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur.</i
          >
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ServicePage",
};
</script>
<style lang="scss" scoped>
.service-page-xfast {
  opacity: 1;
  font-size: 30px;
  font-weight: 400;
  .xfast-info {
    display: flex;
    align-items: center;
    color: #ffffff;
    height: 90vh;
    background: url("~@/assets/images/service-page/background-xfast-service.png")
      top no-repeat;
    background-size: cover;
    .xfast-info-box {
      width: 860px;
      margin-left: 180px;
      &__title {
        h2 {
          font-weight: 700;
          font-size: 72px;
          line-height: 88px;
          margin: 0;
          color: #ffffff;
        }
      }
      &__content {
        h3 {
          margin-top: 25px;
          font-size: 30px;
          line-height: 40px;
          color: #ffffff;
        }
      }
      .xfast-info-action {
        justify-content: center;
        gap: 70px;
        margin-top: 50px;
        font-weight: 700;
        font-size: 35px;
        line-height: 43px;
        &__button {
          display: flex;
          justify-content: center;
          align-items: center;
          width: 300px;
          height: 70px;
          border-radius: 50px;
          background: linear-gradient(180deg, #ff8000 0%, #ffbd33 100%);
          cursor: pointer;
          &:hover {
            box-shadow: 0px 0px 13px 4px rgba(0, 0, 0, 0.25);
          }
        }
      }
    }
  }
  .xfast-fee {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    flex-direction: column;
    padding: 0 200px;
    &__title {
      h2 {
        margin-top: 28px !important;
        margin-bottom: 0 !important;
        font-weight: 700;
        font-size: 48px;
      }
    }
    &__small {
      margin-top: 15px;
      width: 620px;
      height: 41px;
      background: #c4c4c4;
    }
    &__content {
      margin-top: 30px;
      width: 100%;
      height: 680px;
      background: #c4c4c4;
    }
    &__note {
      margin-top: 30px;
      padding: 0 50px;
      color: #454545;
    }
  }
}
</style>
