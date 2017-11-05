import axios from "axios";

const service = axios.create({
  baseURL: "http://localhost:3000/api/artists"
});

export function getArtists(params) {
  return service.get(`/`, { params }).then(res => res.data);
}

export function getAllArtists() {
  return service.get("/").then(res => res.data);
}

export function getArtist(id) {
  return service.get(id).then(res => res.data);
}

export function createArtist(data) {
  return service.post("/", data).then(res => res.data);
}
