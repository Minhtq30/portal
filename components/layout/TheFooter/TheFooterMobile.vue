<template>
  <div class="wrapper">
    <div class="flex justify-center">
      <nuxt-link :to="{ name: 'trang-chu' }">
        <img src="@/assets/images/logo_footer_mobile.png" />
      </nuxt-link>
    </div>
    <div class="mb-4 text-center company-name">
      <span class="text-black font-bold">
        CÔNG TY CỔ PHẦN GIAO HÀNG TIẾT KIỆM
      </span>
    </div>
    <div class="contact-info">
      <div>
        <span class="font-semibold">Giấy CNĐKKD:</span> 0106181807 - Ngày cấp
        21/05/2013, đăng ký thay đổi lần 09 ngày 04/06/2020.
      </div>
      <div>
        <span class="font-semibold">Cơ quan cấp:</span> Phòng Đăng ký kinh doanh
        - Sở kế hoạch và đầu tư TP Hà Nội
      </div>
      <div class="w-[100px] h-[1px] bg-black my-2" />
      <div>
        <span class="font-semibold">Địa chỉ:</span> Tòa nhà VTV, số 8 Phạm Hùng,
        phường Mễ Trì, quận Nam Từ Liêm, Hà Nội, Việt Nam
      </div>
      <div><span class="font-semibold">Email:</span> info@ghtk.vn</div>
    </div>
    <div class="split mx-auto my-4" />
    <div class="text-center">
      <span class="text-green font-bold">
        ĐĂNG ĐƠN - TRACKING - XỬ LÝ ĐƠN HÀNG CHỈ VỚI MỘT CHẠM
      </span>
    </div>
    <div class="text-center">
      <span class="text-download font-bold px-8">
        Trải nghiệm ngay ứng dụng Giaohangtietkiem cho IOS và Android tại
      </span>
      <div class="mt-2 flex justify-center">
        <img class="mr-4" src="@/assets/images/gg_play.png" />
        <img class="ml-4" src="@/assets/images/appstore.png" />
      </div>
    </div>
    <div class="text-center mt-[22px]">
      <img src="@/assets/icons/facebook.svg" />
      <img class="mx-[19px]" src="@/assets/icons/instagram.svg" />
      <img src="@/assets/icons/tiktok.svg" />
    </div>
  </div>
</template>

<style lang="scss" scoped>
.wrapper {
  background-color: #f4f4f4;
  padding: 12px 33px 27px 33px;
  color: #454545;
  .company-name {
    margin-top: 9px;
  }
  .contact-info {
    font-size: 13px;
  }
  .split {
    background-color: #c4c4c4;
    width: calc(100% - 2rem);
    height: 1px;
  }
  .text-download {
    font-size: 13px;
  }
}
</style>
