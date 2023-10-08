import axios from "axios";

axios.defaults.baseURL = "https://64a84cb8dca581464b859c03.mockapi.io";

export const fetchItemByIdApi = async (itemId) => {
  try {
    const response = await axios.get(`adverts/${itemId}`);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const fetchItemsByIdsApi = async (itemIds) => {
  try {
    const adverts = [];
    for (const itemId of itemIds) {
      const item = await fetchItemByIdApi(itemId);
      adverts.push(item);
    }
    return adverts;
  } catch (error) {
    throw error;
  }
};
