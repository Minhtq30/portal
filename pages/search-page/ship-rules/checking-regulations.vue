<template>
  <div
    class="checking-regulations px-[10px] md:px-[70px] xl:px-[200px] text-[13px] sm:text-[18px] lg:text-[24px]"
  >
    <div>
      Để đảm bảo an toàn, an ninh trong quá trình cung ứng dịch vụ, kịp thời
      ngăn chặn đối tượng xấu lợi dụng gửi hàng hóa cấm qua mạng bưu chính, bảo
      vệ quyền lợi cho các khách hàng chân chính, GHTK triển khai thực hiện việc
      kiểm tra nội dung gói, kiện hàng.
    </div>
    <div class="pt-[30px] checking-regulations-table">
      <table class="w-full">
        <thead>
          <tr>
            <th
              class="w-[25px] h-[25px] sm:w-[50px] sm:h-[50px] lg:w-[100px] lg:h-[100px]"
            >
              <p
                class="mb-0 text-[14px] lg:text-[28px] text-center text-[#039049]"
              >
                STT
              </p>
            </th>
            <th class="w-[90px] sm:w-[180px] lg:w-[360px]">
              <p
                class="mb-0 text-[14px] lg:text-[28px] text-center text-[#039049]"
              >
                Quy Trình
              </p>
            </th>
            <th class="w-auto">
              <p
                class="mb-0 text-[14px] lg:text-[28px] text-center text-[#039049]"
              >
                Nội Dung
              </p>
            </th>
          </tr>
        </thead>
        <tbody class="text-[13px] sm:text-[18px] lg:text-[24px]">
          <tr>
            <th class="text-[#039049] text-center align-text-top pt-[25px]">
              1
            </th>
            <th class="text-[#039049] text-center align-text-top pt-[25px]">
              Kiểm tra 100% gói, kiện hàng
            </th>
            <th class="p-[10px] lg:p-[20px] font-medium">
              <span
                >Nhân viên GHTK sẽ kiểm tra hàng hóa bằng cách chụp hình ảnh bên
                ngoài và bên trong đơn hàng. Hình ảnh lưu trữ trên hệ thống là
                cơ sở pháp lý quan trọng để xử lý các vấn đề phát sinh theo quy
                định của pháp luật.
              </span>
              <span class="block mt-[20px]"
                >- Nhân viên GHTK khi kiểm tra thao tác:
                <span class="block">
                  <span class="font-bold">Bước 1: </span> Chụp đúng - đủ - đảm
                  bảo chất lượng hình ảnh (bên ngoài và bên trong ĐH) để xác
                  minh đã kiểm tra các ĐH Shop gửi.
                </span>
                <span class="block">
                  <span class="font-bold">Bước 2:</span> Báo xấu Shop nếu sản
                  phẩm bên trong là hàng cấm. Các ĐH cấm sẽ được chuyển sang
                  trạng thái không lấy được hàng.
                </span>
                <span class="block">
                  - GHTK ưu tiên việc đồng kiểm cùng Shop, trường hợp không thể
                  cùng đồng kiểm, GHTK sẽ thông báo cho Shop trước khi bóc mở
                  gói, kiện hàng và ghi nhận hình ảnh kiểm tra làm căn cứ.
                </span>
              </span>
            </th>
          </tr>
          <tr>
            <th class="text-[#039049] text-center align-text-top pt-[25px]">
              2
            </th>
            <th class="text-[#039049] text-center align-text-top pt-[25px]">
              Sau khi kiểm tra gói, kiện hàng
            </th>
            <th class="p-[10px] lg:p-[20px] font-medium">
              <span
                >- Nếu gói, kiện hàng không chứa hàng hóa không nhận vận chuyển,
                gói, kiện hàng của Shop sẽ được gia cố và tiếp tục chuyển phát.
              </span>
              <span class="block"
                >- Trường hợp phát hiện trong gói, kiện của Shop có chứa hàng
                hóa thuộc Danh mục hàng hóa không nhận vận chuyển hoặc hộp rỗng
                không chứa hàng, GHTK có quyền giao nộp hàng hóa cấm theo quy
                định pháp luật cho cơ quan chức năng; đối với hàng GHTK không
                nhận vận chuyển thì Shop phải đến nhận lại trong vòng 02 (hai)
                ngày kể từ ngày GHTK thông báo, quá thời hạn trên GHTK có toàn
                quyền xử lý gói, kiện.</span
              >
            </th>
          </tr>
        </tbody>
      </table>
    </div>
    <div
      class="pt-[30px] px-[35px] italic pb-[50px] lg:pb-[80px] text-[#039049]"
    >
      <span class="font-bold"> Lưu ý: </span>
      Việc kiểm tra đảm bảo không gây ra hư hỏng, mất mát hàng hóa của Shop;
      Shop chịu hoàn toàn trách nhiệm về hàng và mọi chi phí, thiệt hại phát
      sinh (nếu có) trong trường hợp Shop gửi hàng cấm, GHTK được loại trừ mọi
      trách nhiệm liên quan đến hàng hóa. Việc kiểm tra chính là cách bảo vệ
      quyền lợi cho Shop, vì vậy, rất mong Shop phối hợp thực hiện. Để đảm bảo
      an toàn chung cho toàn hệ thống, GHTK buộc phải từ chối các đơn hàng không
      thể thực hiện kiểm tra đúng yêu cầu.
    </div>
  </div>
</template>

<script>
export default {
  name: "CheckingRegulations",
};
</script>

<style lang="scss" scoped>
.checking-regulations-table {
  table,
  th,
  td {
    border: 1px solid #039049;
  }
  tr {
    th:nth-child(2) {
      padding: 0 10px 0 10px;
    }
  }
}
</style>
