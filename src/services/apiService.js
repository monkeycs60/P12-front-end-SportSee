import axios from "axios";
import { reformateUser, User } from "../models/userModel";
import { reformateUserScore, UserScore } from "../models/userScoreModel";
import { reformatePerformance, PerformanceData } from "../models/userPerformanceModel";
import { reformateActivity, ActivityData } from "../models/userActivityModel";
import { reformateAverageSession, SessionData } from "../models/userAverageSessionModel";

const api = axios.create({
  baseURL: "http://localhost:3050",
});

/**
Fetches user data and returns a User instance.
@async
@function
@param {string} userId - The user's unique identifier.
@returns {Promise<User>} - A promise that resolves to an instance of the User class.
*/
export async function getDataUser(userId) {
  const response = await api.get(`/user/${userId}`);
  const reformatedData = reformateUser(response.data.data);
  const user = new User(
    reformatedData
  );
  return user;
}

/**
Fetches user score data and returns a UserScore instance.
@async
@function
@param {string} userId - The user's unique identifier.
@returns {Promise<UserScore>} - A promise that resolves to an instance of the UserScore class.
*/
export async function getDataUserScore(userId) {
  const response = await api.get(`/user/${userId}`);
  const reformatedData = reformateUserScore(response.data.data);
  const userScore = new UserScore(
    reformatedData
  );
  return userScore;
}

/**
Fetches user activity data and returns an ActivityData instance.
@async
@function
@param {string} userId - The user's unique identifier.
@returns {Promise<ActivityData>} - A promise that resolves to an instance of the ActivityData class.
*/
export async function getDataUserActivity(userId) {
  const response = await api.get(`/user/${userId}/activity`);
  const reformatedData = reformateActivity(response.data.data);
  const activityData = new ActivityData(
    reformatedData
  );
  return activityData;
}

/**
Fetches user average session data and returns a SessionData instance.
@async
@function
@param {string} userId - The user's unique identifier.
@returns {Promise<SessionData>} - A promise that resolves to an instance of the SessionData class.
*/
export async function getDataUserAverageSession(userId) {
  const response = await api.get(`/user/${userId}/average-sessions/`);
  const reformatedData = reformateAverageSession(response.data.data);
  const sessionData = new SessionData(
    reformatedData
  );
  return sessionData;
}

/**
Fetches user performance data and returns a PerformanceData instance.
@async
@function
@param {string} userId - The user's unique identifier.
@returns {Promise<PerformanceData>} - A promise that resolves to an instance of the PerformanceData class.
*/
export async function getDataUserPerformance(userId) {
  const response = await api.get(`/user/${userId}/performance`);
  const reformatedData = reformatePerformance(response.data.data);
  const performanceData = new PerformanceData(
    reformatedData
  );
  return performanceData;
}
