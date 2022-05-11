<template>
  <div class="service-page-pack-commodity t-underline t-align-center t-center">
    <div class="pack-commodity-info h-screen">
      <div class="pack-commodity-info-box">
        <div class="pack-commodity-info-box__title">
          <h2>ĐÓNG GÓI HÀNG HÓA</h2>
        </div>
        <div class="pack-commodity-info-box__content">
          <h3>
            Với những đơn hàng dễ vỡ (mặt hàng làm<br />
            bằng chất liệu dễ bị hư hỏng, đổ vỡ trong<br />
            quá trình vận chuyển), GHTK sẽ chịu trách <br />nhiệm đảm bảo những
            đơn hàng được gắn<br />
            nhãn dễ vỡ, nếu có vấn đề phát sinh sẽ bồi<br />
            hoàn 100%. Song song với đó, GHTK sẽ thu<br />
            thêm 20% phí dịch vụ cho phụ phí dễ vỡ đảm<br />
            bảo hàng hóa. Chi phí này sẽ được dùng để<br />
            vận hành đặc biệt, đảm bảo đơn hàng được<br />
            vận chuyển theo một luồng riêng.
          </h3>
        </div>
        <div class="pack-commodity-info-action flex items-center">
          <div class="pack-commodity-info-action__button button-fee">
            Biểu phí
          </div>
          <div class="pack-commodity-info-action__button button-advise">
            Nhận tư vấn
          </div>
        </div>
      </div>
    </div>
    <div class="pack-commodity-fee h-screen">
      <div class="pack-commodity-fee__title text-center">
        <h2>BIỂU PHÍ ĐÓNG GÓI HÀNG HÓA</h2>
      </div>
      <div class="pack-commodity-fee__small text-center"></div>
      <div class="pack-commodity-fee__content"></div>
      <div class="pack-commodity-fee__note">
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
.service-page-pack-commodity {
  opacity: 1;
  font-size: 30px;
  font-weight: 400;
  .pack-commodity-info {
    display: flex;
    align-items: center;
    color: #ffffff;
    height: 90vh;
    background: url("~@/assets/images/service-page/background-pack-commodity-service.png")
      top no-repeat;
    background-size: cover;
    .pack-commodity-info-box {
      width: 860px;
      margin-left: 180px;
      &__title {
        h2 {
          font-weight: 700;
          font-size: 48px;
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
      .pack-commodity-info-action {
        justify-content: flex-start;
        gap: 70px;
        margin-top: 70px;
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
  .pack-commodity-fee {
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
