import axios from "axios";
import { reformateUser, User } from "../models/userModel";
import { reformatePerformance, PerformanceData } from "../models/userPerformanceModel";
import { reformateActivity, ActivityData } from "../models/userActivityModel";

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
  const reformatedData = reformateActivity(response.data.data);
  console.log(reformatedData, "reformatedACTIVITY");
  const activityData = new ActivityData(
    reformatedData
  );
  console.log(activityData, "activityData");
  return activityData;
}

export async function getDataUserAverageSession(userId) {
  const response = await api.get(`/user/${userId}/average-sessions/`);
  return response.data;
}

export async function getDataUserPerformance(userId) {
  const response = await api.get(`/user/${userId}/performance`);
  const reformatedData = reformatePerformance(response.data.data);
  const performanceData = new PerformanceData(
    reformatedData
  );
  return performanceData;
}
