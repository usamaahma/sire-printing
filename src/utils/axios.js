import axios from "axios";

const baseURL = process.env.REACT_APP_API_URL; // Make sure your .env file is correctly set

// Create instances with consistent base URLs for each service
const sireperks = axios.create({
  baseURL: `${baseURL}/sireperks`, // Ensure this is the correct endpoint for login
});
const products = axios.create({
  baseURL: `${baseURL}/products`,
});
const getquote = axios.create({
  baseURL: `${baseURL}/getquote`, // Ensure this is the correct endpoint for login
});
const category = axios.create({
  baseURL: `${baseURL}/category`, // Ensure this is the correct endpoint for login
});
const portfolio = axios.create({
  baseURL: `${baseURL}/portfolio`, // Ensure this is the correct endpoint for login
});
const blogs = axios.create({
  baseURL: `${baseURL}/blogs`, // Ensure this is the correct endpoint for login
});
const contactus = axios.create({
  baseURL: `${baseURL}/contactus`, // Ensure this is the correct endpoint for login
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
products.interceptors.request.use(requestInterceptor, errorInterceptor);
getquote.interceptors.request.use(requestInterceptor, errorInterceptor);
category.interceptors.request.use(requestInterceptor, errorInterceptor);
portfolio.interceptors.request.use(requestInterceptor, errorInterceptor);
blogs.interceptors.request.use(requestInterceptor, errorInterceptor);
contactus.interceptors.request.use(requestInterceptor, errorInterceptor);

export { sireperks, products, getquote, category, portfolio, blogs, contactus };
