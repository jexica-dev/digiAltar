import api from "./api_config";

export const getAllAltars = async () => {
  const resp = await api.get("/altars");
  return resp.data;
};

export const getAltar = async (id) => {
  try {
    const response = await api.get(`/altar/${id}`);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const createAltar = async (altar) => {
  const res = await api.post(`/altars/`, altar);
  return res.data;
};

export const updateAltar = async (id, altar) => {
  const res = await api.put(`/altars/${id}`, altar);
  return res.data;
};

export const deleteAltar = async (id) => {
  const response = await api.delete(`/altars/${id}`);
  return response.data;
};
