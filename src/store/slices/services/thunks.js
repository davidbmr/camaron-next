import axios from "axios";
import { servicesApi } from "../../../connections";
import {
	setIsLoading,
	setlastServiceCreatedId,
	setLastServices,
	setIsLoadingLastService,
	stopLoadingLastService,
	setNextPage,
	setService,
} from "./servicesSlice";

export const getService = (id) => {
	return async (dispatch) => {
		try {
			dispatch(setIsLoading());
			let { data } = await servicesApi.get(`/${id}`);
			dispatch(setService({ service: data }));
		} catch (error) {
			console.log(error);
		}
	};
};

export const addService = (payload, token) => {
	return async (dispatch) => {
		try {
			// console.log("entro aqui");
			let { data } = await servicesApi.post("/add", payload, {
				headers: {
					"x-access-token": token,
				},
			});
			console.log("servicio agregado exitosamente");
			dispatch(setlastServiceCreatedId({ id: data.id }));
		} catch (error) {
			console.log(error);
		}
	};
};

export const editService = (payload, id, token) => {
	return async (dispatch) => {
		try {
			await servicesApi.put(`/update/${id}`, payload, {
				headers: {
					"x-access-token": token,
				},
			});
			dispatch(getService(id));
		} catch (error) {
			console.log(error);
		}
	};
};

export const deleteService = (payload, id, token) => {
	return async () => {
		try {
			await servicesApi.delete(`/delete/${id}`, {
				headers: {
					"x-access-token": token,
				},
				data: payload,
			});
			console.log("Servicio eliminado correctamente");
		} catch (error) {
			console.log(error);
		}
	};
};

export const sendMailContact = (payload, token) => {
	return async () => {
		try {
			await servicesApi.post(`/mailcontact`, payload, {
				headers: {
					"x-access-token": token,
				},
			});
		} catch (error) {
			console.log(error);
		}
	};
};

//---- Paginado de ultimos servicios

export const getLastServices = (page = 1) => {
	return async (dispatch) => {
		try {
			if (page < 2) {
				dispatch(setIsLoadingLastService());
			}

			const { data } = await servicesApi.get(`/pagination-latest?page=${page}&limit=10`);

			const nextPage = data.result.next;
			const lastServices = data.result.results;
			dispatch(setLastServices({ lastServices: lastServices }));

			nextPage ? dispatch(setNextPage(nextPage)) : dispatch(setNextPage(false));
		} catch (error) {
			dispatch(stopLoadingLastService());
			console.log(error);
		}
	};
};
