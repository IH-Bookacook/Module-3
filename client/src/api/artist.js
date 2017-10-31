import axios from "axios";

const service = axios.create({
  baseURL: "http://localhost.3000/api/artists"
});

export function getAllArtists() {
  return service.get("/").then(res => res.data);
}

export function getArtist(id) {
  return service.get("/${id}").then(res => res.data);
}

export function createArtist(id) {
  return service.post("/", data).then(res => res.data);
}