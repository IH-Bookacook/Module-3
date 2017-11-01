import axios from "axios";

const service = axios.create({
  baseURL: "http://localhost:3000/api/publishers"
});

export function getAllPublishers() {
  return service.get("/").then(res => res.data);
}

export function getPublisher(id) {
  return service.get("/${id}").then(res => res.data);
}

export function createPublisher(data) {
  return service.post("/", data).then(res => res.data);
}
