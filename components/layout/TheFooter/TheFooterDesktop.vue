<template>
  <footer class="pt-8 pb-20">
    <div class="container mx-auto flex justify-between">
      <div style="width: 525px">
        <span class="xl:text-xl 2xl:text-2xl font-bold">
          CÔNG TY CỔ PHẦN GIAO HÀNG TIẾT KIỆM
        </span>
        <br />
        <div class="mt-4" style="max-width: 518px">
          <span class="2xl:text-lg">
            Giấy CNĐKKD: 0106181807 - Ngày cấp 21/05/2013, đăng ký thay đổi lần
            09 ngày 04/06/2020.
            <br />
            Cơ quan cấp: Phòng Đăng ký kinh doanh - Sở kế hoạch và đầu tư TP Hà
            Nội
          </span>
        </div>
        <br />
        <div class="2xl:mt-[52px]">
          <nuxt-link :to="{ name: 'trang-chu' }">
            <nuxt-img
              preset="defaultImage"
              class="xl:w-[70%] 2xl:w-full"
              src="/images/logo_gray.png"
            />
          </nuxt-link>
        </div>
      </div>
      <div class="mx-8 pt-[16px] 2xl:mx-[140px] link-wrapper">
        <nuxt-link :to="{ name: 've-chung-toi' }">
          <span class="2xl:text-lg text-black">Về chúng tôi</span>
        </nuxt-link>
        <a href="#">
          <span class="2xl:text-lg text-black">Tra cứu vận đơn</span>
        </a>
        <nuxt-link :to="{ name: 'dich-vu-xfast' }">
          <span class="2xl:text-lg text-black">Dịch vụ</span>
        </nuxt-link>
        <nuxt-link :to="{ name: 'moshop' }">
          <span class="2xl:text-lg text-black">moshop</span>
        </nuxt-link>
        <nuxt-link :to="{ name: 'tuyen-dung' }">
          <span class="2xl:text-lg text-black">Tuyển dụng</span>
        </nuxt-link>
        <nuxt-link :to="{ name: 'hoi-dap' }">
          <span class="2xl:text-lg text-black">Hỏi đáp</span>
        </nuxt-link>
      </div>
      <div class="xl:max-w-[400px]" style="padding-top: 24px">
        <div>
          <img
            class="w-[31px] 2xl:w-[45px] mr-4 2xl:mr-[22px]"
            src="@/assets/icons/envelop.svg"
          />
          <span class="2xl:text-lg">info@ghtk.vn</span>
        </div>
        <div class="flex" style="margin-top: 37px">
          <img
            class="w-[31px] 2xl:w-[45px] mr-4 2xl:mr-[22px]"
            src="@/assets/icons/home.svg"
          />
          <div class="2xl:text-lg">
            Tòa nhà VTV, số 8 Phạm Hùng, phường Mễ Trì, quận Nam Từ Liêm, thành
            phố Hà Nội, Việt Nam
          </div>
        </div>
        <div style="margin-top: 37px">
          <a href="#">
            <img
              class="w-[34px] 2xl:w-[48px]"
              src="@/assets/icons/facebook.svg"
            />
          </a>
          <a href="#">
            <img
              class="ml-4 2xl:ml-8 w-[34px] 2xl:w-[48px]"
              src="@/assets/icons/instagram.svg"
            />
          </a>
          <a href="#">
            <img
              class="ml-4 2xl:ml-8 w-[34px] 2xl:w-[48px]"
              src="@/assets/icons/tiktok.svg"
            />
          </a>
          <a href="#">
            <img
              class="ml-4 2xl:ml-8 w-[34px] 2xl:w-[48px]"
              src="@/assets/icons/youtube.svg"
            />
          </a>
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: "TheFooter",
};
</script>

<style lang="scss" scoped>
footer {
  background-color: var(--grayColor);
  .link-wrapper {
    a {
      width: 150px;
      display: block;
      &:not(:first-child) {
        margin-top: 26px;
      }
    }
  }
}
</style>
