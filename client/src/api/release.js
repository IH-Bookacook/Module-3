import axios from "axios";

const service = axios.create({
  baseURL: "http://localhost.3000/api"
});

export function getAllReleases() {
  return service.get("/masters/${id}/releases").then(res => res.data);
}

export function getRelease(id) {
  return service.get("/releases/${id}").then(res => res.data);
}

export function createRelease(id) {
  return service.post("/releases/", data).then(res => res.data);
}
