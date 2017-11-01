import axios from "axios";

const service = axios.create({
  baseURL: "http://localhost:3000/api/users"
});

export function getAllUsers() {
  return service.get("/").then(res => res.data);
}

export function getUSer(id) {
  return service.get("/${id}").then(res => res.data);
}

export function createUser(id) {
  return service.post("/", data).then(res => res.data);
}
