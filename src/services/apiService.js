import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:3050",
});

export async function getDataUser(userId) {
  const response = await api.get(`/user/${userId}`);
  return response.data;
}

export async function getDataUserActivity(userId) {
  const response = await api.get(`/user/${userId}/activity`);
  return response.data;
}

export async function getDataUserAverageSession(userId) {
  const response = await api.get(`/user/${userId}/average-session/`);
  return response.data;
}

export async function getDataUserPerformance (userId) {
  const response = await api.get(`/user/${userId}/performance`);
  return response.data;
}

