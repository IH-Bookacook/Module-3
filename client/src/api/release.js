import axios from "axios";

const service = axios.create({
  baseURL: "http://localhost:3000/api"
});

export function getAllReleases(masterId) {
  return service.get(`/masters/${masterId}/releases`).then(res => res.data);
}

export function getRelease(id) {
  return service.get(`/releases/${id}`).then(res => res.data);
}

export function createRelease(data) {
  return service.post(`/releases`, data).then(res => res.data);
}
