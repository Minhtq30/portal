import http from "./http";

const orderService = {
  getOrder: async (params) => {
    return await http.get("/order", { params });
  },
};

export default orderService;
