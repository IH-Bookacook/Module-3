import axios from "axios";

const service = axios.create({
  baseURL: "http://localhost.3000/api/masters"
});

export function getAllMasters() {
  return service.get("/").then(res => res.data);
}

export function getMaster(id) {
  return service.get("/${id}").then(res => res.data);
}

export function createMaster(id) {
  return service.post("/", data).then(res => res.data);
}
