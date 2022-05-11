import http from "./http";

const addressService = {
  async getAddress(params = {}) {
    const response = await http.get("/portal/address/public", { params });
    return response;
  },
  async getNearOffices(params = {}) {
    const response = await http.get("/portal/address/near-offices", { params });
    return response;
  },
};

export default addressService;
