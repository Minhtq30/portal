<template>
  <div class="orders">
    <div class="relative">
      <img
        class="w-full h-900[px]"
        src="@/assets/images/search-page/orders.png"
      />
      <div class="btn-download-app flex flex-row items-end">
        <div
          class="btn-download mr-[10px] sm:mr-[30px] w-[100px] lg:w-[188px] h-[30px] leading-[30px] lg:h-[54px] lg:leading-[54px] bg-[#039049] text-white text-center font-semibold text-[13px] lg:text-[24px] cursor-pointer"
        >
          TẢI NGAY
        </div>
        <div class="flex flex-col">
          <div
            class="flex flex-row mb-[6px] md:mb-[15px] h-[20px] sm:h-[30px] md:h-[35px] lg:h-[48px] xl:h-[60px]"
          >
            <img
              class="h-full sm:pr-[8px] md:pr-[15px] cursor-pointer"
              src="@/assets/images/search-page/GooglePlay_download.png"
            />
            <img
              class="h-full"
              src="@/assets/images/search-page/GooglePlay_QR.png"
            />
          </div>
          <div
            class="flex flex-row h-[20px] sm:h-[30px] md:h-[35px] lg:h-[48px] xl:h-[60px]"
          >
            <img
              class="h-full sm:pr-[8px] md:pr-[15px] cursor-pointer"
              src="@/assets/images/search-page/AppStore_download.png"
            />
            <img
              class="h-full"
              src="@/assets/images/search-page/AppStore_QR.png"
            />
          </div>
        </div>
      </div>
      <div
        class="search-title h-[40px] sm:h-[60px] lg:h-[120px] w-[80vw] sm:w-[60vw] 2xl:w-[35vw] text-black bg-white m-auto flex justify-center items-center text-[18px] sm:text-[28px] lg:text-[42px] font-bold"
      >
        TRA CỨU ĐƠN HÀNG
      </div>
    </div>
    <div
      class="search-bar m-auto pt-[10px] md:pt-[40px] h-fit w-[90%] lg:w-[55%] bg-[#F0F0F0] mt-[90px] sm:mt-[100px] lg:mt-[150px] xl:mt-[200px]"
    >
      <div
        class="px-[30px] sm:px-[90px] pb-[10px] md:pb-[48px] flex flex-col items-center text-[13px] md:text-2xl"
      >
        <input
          class="border-0 rounded-2xl pl-2 sm:pl-10 w-full"
          placeholder="Nhập mã đơn hàng, nhiều đơn hàng cách nhau bởi dấu phẩy"
        />
        <div>
          <g-button
            class="flex-1 btn-primary rounded-full mt-[10px] md:mt-[36px]"
          >
            <span class="font-bold">TRA CỨU</span>
          </g-button>
        </div>
      </div>
    </div>
    <div
      class="orders-info md:px-[50px] lg:px-[200px] pt-[30px] pb-[60px] md:py-[100px]"
    >
      <div
        v-for="(order, index) in listOrders"
        :key="index"
        class="md:text-[24px] text-[13px]"
      >
        <div class="py-[10px] px-[20px] md:p-[20px]">
          <div
            class="orders-detail-title flex justify-between cursor-pointer bg-[#f9f9f9] p-[25px]"
            @click="displayDetailOrder(index)"
          >
            <span class="font-semibold md:text-[24px] text-[13px] text-ellipsis"
              >Thông tin vận đơn {{ order.orderCode }}</span
            >
            <img
              class="my-auto h-[15px] w-[25px]"
              :class="
                showDetailList.includes(index) ? 'origin-center rotate-180' : ''
              "
              src="@/assets/icons/arrow-down-select.png"
            />
          </div>
          <div v-if="showDetailList.includes(index)" class="order-info-detail">
            <table class="order-detail-table table border w-full">
              <tbody class="">
                <tr>
                  <td class="align-text-top font-semibold">
                    <span>Người nhận</span>
                  </td>
                  <td class="md:text-[22px] text-[13px]">
                    <span class="block"
                      >Họ tên:
                      <hidden-content
                        :text="order.receiveName"
                        :first="4"
                        :last="4"
                    /></span>
                    <span class="block"
                      >Số điện thoại:
                      <hidden-content
                        :text="order.receiveTel"
                        :first="2"
                        :last="3"
                    /></span>
                    <span class="block"
                      >Địa chỉ:
                      <hidden-content
                        :text="order.receiveAddress"
                        :is-address="true"
                    /></span>
                  </td>
                </tr>
                <tr>
                  <td class="align-text-top font-semibold">
                    <span>Người gửi</span>
                  </td>
                  <td>
                    <span class="block"
                      >Họ tên:
                      <hidden-content
                        :text="order.sendName"
                        :first="4"
                        :last="4"
                    /></span>
                    <span class="block"
                      >Số điện thoại:
                      <hidden-content
                        :text="order.sendTel"
                        :first="2"
                        :last="3"
                    /></span>
                    <span class="block"
                      >Địa chỉ:
                      <hidden-content
                        :text="order.sendAddress"
                        :is-address="true"
                    /></span>
                  </td>
                </tr>
                <tr>
                  <td class="align-text-top font-semibold">
                    <span>Thông tin đơn hàng</span>
                  </td>
                  <td>
                    <span class="block"
                      >Tiền thu hộ:
                      <hidden-content
                        :text="order.orderMoney"
                        :first="0"
                        :last="0"
                      />
                      VNĐ</span
                    >
                    <span class="block"
                      >Trả ship:
                      {{ displayOrderPayType(order.orderPayType) }}</span
                    >
                    <span class="block">Ghi chú:</span>
                    <div class="break-words">{{ order.orderNote }}</div>
                  </td>
                </tr>
                <tr>
                  <td class="align-text-top font-semibold">
                    <span>Trạng thái đơn hàng</span>
                  </td>
                  <td>
                    <span>{{ displayOrderStatus(order.orderStatus) }}</span>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <div
            v-if="showDetailList.includes(index)"
            class="order-log pt-[35px]"
          >
            <span class="font-semibold pl-[10px] md:pl-0">Logs</span>
            <div v-for="log in order.logs" :key="log" class="order-log-detail">
              <span class="block p-[10px] md:p-[15px]">{{ log.log }}</span>
            </div>
            <div
              class="font-medium italic text-[#039049] text-center py-[20px] md:py-[50px]"
            >
              Để tra cứu đầy đủ logs ĐH vui lòng cài app iGHTK
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { GButton } from "~/components/elements";
import HiddenContent from "~/components/elements/HiddenContent.vue";

export default {
  name: "Orders",
  components: {
    HiddenContent,
    GButton,
  },
  data() {
    return {
      listOrders: [
        {
          orderCode: "S45.HN6-Y1.1414634883",
          receiveName: "Hoang Duc Truong",
          receiveTel: "0915021248",
          receiveAddress: "So 1, Thuong tin, Ha Noi",
          sendName: "La Xuan Duc",
          sendTel: "0123456789",
          sendAddress: "So 88, Yen Lang, Ha Noi",
          orderMoney: "100.000",
          orderPayType: 1,
          orderNote: "Day la note don hang",
          orderStatus: 2,
          logs: [
            {
              log: "17 giờ trước, 18:24: Đã tạo đơn hàng",
            },
            {
              log: "17 giờ trước, 18:24: Đã tiếp nhận",
            },
            {
              log: "14 giờ trước, 11:34: Bưu tá báo delay lấy hàng",
            },
          ],
        },
        {
          orderCode: "S46.HN6-Y1.1414634666",
          receiveName: "Hoang Duc Truong",
          receiveTel: "0915021248",
          receiveAddress: "So 1, Thuong tin, Ha Noi",
          sendName: "La Xuan Duc",
          sendTel: "0123456789",
          sendAddress: "So 88, Yen Lang, Ha Noi",
          orderMoney: "10.000",
          orderPayType: 1,
          orderNote:
            "Day la note don hang chu y lam hong don hang rat quan trong nay cua toi nhe, cam on cac ban rat nhieu GTHK mai dinh <3",
          orderStatus: 2,
          logs: [
            {
              log: "17 giờ trước, 18:24: Đã tạo đơn hàng",
            },
            {
              log: "17 giờ trước, 18:24: Đã tiếp nhận",
            },
            {
              log: "14 giờ trước, 11:34: Bưu tá báo delay lấy hàng",
            },
          ],
        },
        {
          orderCode: "S47.HN6-Y1.1414634777",
          receiveName: "Hoang Duc Truong",
          receiveTel: "0915021248",
          receiveAddress: "So 1, Thuong tin, Ha Noi",
          sendName: "La Xuan Duc",
          sendTel: "0123456789",
          sendAddress: "So 88, Yen Lang, Ha Noi",
          orderMoney: "10.000",
          orderPayType: 1,
          orderNote:
            "Day la note don hang chu y lam hong don hang rat quan trong nay cua toi nhe, cam on cac ban rat nhieu GTHK mai dinh <3",
          orderStatus: 2,
          logs: [
            {
              log: "17 giờ trước, 18:24: Đã tạo đơn hàng",
            },
            {
              log: "17 giờ trước, 18:24: Đã tiếp nhận",
            },
            {
              log: "14 giờ trước, 11:34: Bưu tá báo delay lấy hàng",
            },
          ],
        },
      ],
      showDetail: false,
      showDetailList: [],
    };
  },
  computed: {},
  methods: {
    displayDetailOrder(index) {
      if (this.showDetailList.includes(index)) {
        const valueToRemove = index;
        this.showDetailList = this.showDetailList.filter(
          (item) => item !== valueToRemove
        );
      } else {
        this.showDetailList.push(index);
      }
    },
    displayOrderPayType(orderPayType) {
      return orderPayType === "1" ? "Người nhận" : "Người gửi";
    },
    displayOrderStatus(orderStatus) {
      return orderStatus === "1" ? "Đang lấy hàng" : "Đang giao";
    },
  },
};
</script>

<style lang="scss" scoped>
.orders {
  position: relative;
  .btn-download {
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 27px;
  }
  .btn-download-app {
    position: absolute;
    bottom: 9%;
    right: 3%;
  }
  .search-title {
    box-shadow: 0 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 60px;
    position: absolute;
    bottom: -17%;
    left: 50%;
    transform: translateX(-50%);
  }
  .search-bar {
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    input {
      outline: 0;
      height: 69px;
      width: 911px;
      max-width: 100%;
    }
    button {
      height: 54px;
      width: 188px;
      box-shadow: 0 4px 4px rgba(0, 0, 0, 0.25);
    }
  }
  .orders-info {
    table,
    th,
    td {
      border: 1px solid #b8b8b8;
    }
    tr {
      border-left: hidden;
      border-right: hidden;
      td:first-child {
        width: 330px;
        padding-top: 20px;
      }
      td:nth-child(2) {
        padding: 20px 20px 50px;
      }
    }
    tr:first-child {
      border-top: hidden;
    }
    .orders-detail-title {
      box-shadow: 0 4px 4px rgba(0, 0, 0, 0.25);
      border-radius: 10px;
    }
    .order-detail-table {
      word-break: break-word;
    }
  }
}
@media screen and (min-width: 768px) {
  .orders {
    .orders-info {
      tr {
        td:first-child {
          padding: 20px;
        }
      }
    }
  }
}
@media screen and (max-width: 768px) {
  .orders {
    .search-bar {
      box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);

      input {
      }
      button {
        height: 30px;
        width: 100px;
        box-shadow: 0 4px 4px rgba(0, 0, 0, 0.25);
      }
    }
    .orders-info {
      tr {
        td:first-child {
          padding-top: 10px;
          padding-bottom: 10px;
          width: 90px;
        }
        td:nth-child(2) {
          padding: 10px 10px 15px;
        }
      }
    }
  }
}
@media screen and (max-width: 550px) {
  .orders {
    .search-title {
      bottom: -30%;
    }
  }
}
</style>

<style lang="scss">
.orders {
  .search-bar {
    input {
      text-overflow: ellipsis;
    }
  }
}
</style>
