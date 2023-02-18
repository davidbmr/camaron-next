import axios from "axios";
import { url } from "./mainApi";

export const authApi = axios.create({
	baseURL: `${url}/auth`,
});

export const userApi = axios.create({
  baseURL: `${url}/user`,
});

export const dashboardApi = axios.create({
	baseURL: `${url}/user/dashboard`,
});

export const servicesApi = axios.create({
	baseURL: `${url}/services`,
});

export const requestServicesApi = axios.create({
	baseURL: `${url}/searches`,
});

export const searchbarApi = axios.create({
	baseURL: `${url}/searchbar`,
});

export const categoriesApi = axios.create({
  baseURL: `${url}/categories`
})