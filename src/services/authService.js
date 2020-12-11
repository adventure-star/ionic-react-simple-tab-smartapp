import jwtDecode from "jwt-decode";
import http from "./httpService";
import { apiUrl } from "../config.json";

const apiEndpoint = apiUrl + "/auth";
const tokenKey = "token";
const adminTokenKey = null;

http.setJwt(getJwt());

export async function login(email, password) {

  // const { data: jwt } = await http.post(apiEndpoint, { email, password });
  const response = await http.post(apiEndpoint, { email, password });

  const jwt = response.data.token;

  console.log("currentuser = ", jwt);

  localStorage.setItem(tokenKey, jwt);
  // localStorage.setItem(adminTokenKey, adminJwt);

  return jwt;
}

export function loginWithJwt(jwt) {
  localStorage.setItem(tokenKey, jwt);
}

export function logout() {
  localStorage.removeItem(tokenKey);
}

export function getCurrentUser() {
  try {
    const jwt = localStorage.getItem(tokenKey);
    return jwtDecode(jwt);
  } catch (ex) {
    return null;
  }
}

export function getAdmin() {
  try {
    const jwt = localStorage.getItem(adminTokenKey);
    return jwt;
  } catch (ex) {
    return null;
  }
}

export function getJwt() {
  return localStorage.getItem(tokenKey);
}

export default {
  login,
  loginWithJwt,
  logout,
  getCurrentUser,
  getJwt
};
