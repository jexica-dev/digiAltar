import api from "./api_config";

export const getAllImages = async () => {
  const resp = await api.get('/images');
  return resp.data;
}