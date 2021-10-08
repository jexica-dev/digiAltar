import api from "./api_config";

export const getAllAltars = async () => {
  const res = await api.get("/altars");
  return res.data;
};

export const getAltar = async (id) => {
  try {
    const res= await api.get(`/altars/${id}`);
    return res.data;
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
  const res = await api.delete(`/altars/${id}`);
  return res.data;
};
