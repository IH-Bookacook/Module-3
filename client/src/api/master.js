import axios from "axios";

const service = axios.create({
  baseURL: "http://localhost:3000/api/master"
});

export function getMasters(params) {
  return service.get(`/`, { params }).then(res => res.data);
}

export function getAllMasters() {
  return service.get(`/`).then(res => res.data);
}

export function getMaster(id) {
  return service.get(id).then(res => res.data);
}

export function createMaster(data) {
  return service.post(`/`, data).then(res => res.data);
}
