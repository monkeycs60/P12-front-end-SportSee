import axios from "axios";
import { reformateUser, User } from "../models/userModel";

const api = axios.create({
  baseURL: "http://localhost:3050",
});

export async function getDataUser(userId) {
  const response = await api.get(`/user/${userId}`);
  const reformatedData = reformateUser(response.data.data);
  const user = new User(
    reformatedData
  );
  return user;
}

export async function getDataUserActivity(userId) {
  const response = await api.get(`/user/${userId}/activity`);
  return response.data;
}

export async function getDataUserAverageSession(userId) {
  const response = await api.get(`/user/${userId}/average-sessions/`);
  return response.data;
}

export async function getDataUserPerformance(userId) {
  const response = await api.get(`/user/${userId}/performance`);
  return response.data;
}
