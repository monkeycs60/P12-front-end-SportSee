import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:3050",
});

export async function getData(userId) {
  const response = await api.get(`/user/${userId}`);
  return response.data;
}
