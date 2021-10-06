import api from "./api_config";

export const getAllAltars = async () => {
  const resp = await api.get('/altars');
  return resp.data;
}