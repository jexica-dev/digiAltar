import api from "./api_config";


export const getAllImages = async () => {
  const res = await api.get('/images');
  return res.data;
}


export const getImage = async (id) => {
  try {
    const res = await api.get(`/images/${id}`);
    return res.data;
  } catch (error) {
    throw error;
  }
};

export const createImage = async (image) => {
  const res = await api.post(`/images/`, image);
  return res.data;
};

export const updateImage = async (id, image) => {
  const res = await api.put(`/images/${id}`, image);
  return res.data;
};

export const deleteImage = async (id) => {
  const res = await api.delete(`/images/${id}`);
  return res.data;
};
