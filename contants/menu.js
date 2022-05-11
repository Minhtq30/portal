const menu = [
  {
    key: "gioi-thieu",
    title: "Giới thiệu",
    name: "ve-chung-toi",
    path: "/ve-chung-toi",
    pathComponent: "pages/intro.vue",
    children: [
      {
        key: "gioi-thieu_ve-chung-toi",
        title: "Về chúng tôi",
        name: "ve-chung-toi",
        path: "/ve-chung-toi",
      },
      {
        key: "gioi-thieu_tin-tuc",
        title: "Tin tức",
        name: "tin-tuc",
        pathComponent: "pages/news/index.vue",
        path: "/tin-tuc",
      },
      {
        hidden: true,
        key: "chi-tiet_tin-tuc",
        title: "Chi tiết tin tức",
        name: "chi-tiet-tin-tuc",
        path: "/tin-tuc/:id",
        pathComponent: "pages/news/_id",
      },
    ],
  },
  {
    key: "tra-cuu",
    title: "Tra cứu",
    name: "estimate-ship-cost",
    path: "/uoc-tinh-cuoc",
    pathComponent: "pages/search-page/estimate-ship-cost.vue",
    children: [
      {
        key: "tra-cuu_uoc-tinh-phi-van-chuyen",
        title: "Ước tính phí vận chuyển",
        name: "estimate-ship-cost",
        path: "/uoc-tinh-cuoc",
      },
      {
        key: "tra-cuu_tra-cuu-van-don",
        title: "Tra cứu vận đơn",
        name: "search-orders",
        path: "/tra-cuu-van-don",
        pathComponent: "pages/search-page/orders.vue",
      },
      {
        key: "tra-cuu_tim-buu-cuc",
        title: "Tìm bưu cục",
        name: "search-post",
        path: "/tim-buu-cuc",
        pathComponent: "pages/search-page/search-post.vue",
      },
      {
        key: "tra-cuu_bieu-phi",
        title: "Biểu phí",
      },
      {
        key: "tra-cuu_quy-dinh-dong-goi-hang-hoa",
        title: "Quy định đóng gói hàng hóa",
        name: "ship-rules",
        path: "/quy-dinh-ship",
        pathComponent: "pages/search-page/ship-rules/ship-rules.vue",
      },
      {
        key: "tra-cuu_hang-cam-gui",
        title: "Hàng cấm gửi",
      },
    ],
  },
  {
    key: "dich-vu",
    title: "Dịch vụ",
    name: "dich-vu-xfast",
    path: "/dich-vu-xfast",
    pathComponent: "pages/service-page/index.vue",
    children: [
      {
        key: "dich-vu_xfast",
        title: "Xfast",
        name: "dich-vu-xfast",
        path: "/dich-vu-xfast",
      },
      {
        key: "dich-vu_express",
        title: "Express",
        name: "dich-vu-express",
        path: "/dich-vu-express",
        pathComponent: "pages/service-page/express.vue",
      },
      {
        key: "dich-vu_dich-vu-ho-tro-dong-goi",
        title: "Dịch vụ hỗ trợ đóng gói",
      },
      {
        key: "dich-vu_vat",
        title: "Dịch vụ vat",
        name: "dich-vu-vat",
        path: "/dich-vu-vat",
        pathComponent: "pages/service-page/vat.vue",
      },
      {
        key: "dich-vu_khac",
        title: "Dịch vụ khác ",
      },
    ],
  },
  {
    key: "moshop",
    title: "moshop",
    name: "moshop",
    path: "/moshop",
    pathComponent: "pages/moshop.vue",
  },
  {
    key: "tuyen-dung",
    title: "Tuyển dụng",
    name: "tuyen-dung",
    path: "/tuyen-dung",
    pathComponent: "pages/recruit-page/index.vue",
    children: [
      {
        key: "tuyen-dung_viec-lam",
        title: "Việc làm",
        name: "tuyen-dung",
        path: "/tuyen-dung",
      },
      {
        hidden: true,
        key: "tuyen-dung_chi-tiet-tuyen-dung",
        title: "Chi tiết tuyển dụng",
        name: "chi-tiet-tuyen-dung",
        path: "/tuyen-dung/:id",
        pathComponent: "pages/recruit-page/_id.vue",
      },
      {
        key: "tuyen-dung_zone-9",
        title: "Zone 9",
      },
    ],
  },
  {
    key: "hoi-dap",
    title: "Hỏi đáp",
    name: "hoi-dap",
    path: "/hoi-dap",
    pathComponent: "pages/faqs.vue",
  },
];

export default menu;
