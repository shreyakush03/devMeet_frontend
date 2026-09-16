export const BASE_URL = (
  import.meta.env.BACKEND_API_URL ||
  (location.hostname === "localhost" ? "http://localhost:7777" : "/api")
).replace(/\/+$/, "");