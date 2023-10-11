import axios from "axios";

axios.defaults.baseURL = "https://64a84cb8dca581464b859c03.mockapi.io";

export const getAdverts = async (page) => {
  const response = await axios.get("/adverts", {
    params: {
      page: page,
      limit: 8,
    },
  });
  return response.data;
};
