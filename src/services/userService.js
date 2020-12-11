import http from "./httpService";
import { apiUrl } from "../config.json";

const apiEndpoint = apiUrl + "/users";

export function register(name, email, password, repeatpassword) {
  return http.post(apiEndpoint, {
    name: name,
    email: email,
    password: password,
    repeatpassword: repeatpassword
  });
}
