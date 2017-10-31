import axios from "axios";

const service = axios.create({
  baseURL: "http://localhost.3000/api/series"
});

export function getAllSeries() {
  return service.get("/").then(res => res.data);
}

export function getSerie(id) {
  return service.get("/${id}").then(res => res.data);
}

export function createSerie(id) {
  return service.post("/", data).then(res => res.data);
}
