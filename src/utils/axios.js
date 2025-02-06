import axios from "axios";

const baseURL = process.env.REACT_APP_API_URL; // Make sure your .env file is correctly set

// Create instances with consistent base URLs for each service
const sireperks = axios.create({
  baseURL: `${baseURL}/sireperks`, // Ensure this is the correct endpoint for login
});

// Generic request interceptor for all instances
const requestInterceptor = (req) => {
  // Optionally add authorization headers or custom logic
  // req.headers.Authorization = `Bearer ${localStorage.getItem("token") || ""}`;
  return req;
};

const errorInterceptor = (err) => {
  console.error("Request failed:", err);
  return Promise.reject(err);
};

// Apply interceptors for each axios instance
sireperks.interceptors.request.use(requestInterceptor, errorInterceptor);

export { sireperks };
