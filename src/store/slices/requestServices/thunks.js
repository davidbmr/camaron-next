import { requestServicesApi } from "../../../connections";

import {
	setIsLoading,
	setRequestService,
	setIdRequestServiceCreated,
	setIsLoadingLastRequestService,
	stopLoadingLastRequestService,
	setLastRequestServices,
	setNextPage,
} from "./requestServicesSlice";

export const addRequestService = (payload, token) => {
	return async (dispatch) => {
		try {
			let { data } = await requestServicesApi.post("/add", payload, {
				headers: {
					"x-access-token": token,
				},
			});
			console.log("solicitud de servicio agregado exitosamente");
			dispatch(setIdRequestServiceCreated({ id: data.id }));
		} catch (error) {
			console.log(error);
		}
	};
};

export const getRequestService = (id) => {
	return async (dispatch) => {
		try {
			dispatch(setIsLoading());
			let { data } = await requestServicesApi.get(`/detail/${id}`);
			dispatch(setRequestService({ requestService: data }));
		} catch (error) {
			console.log(error);
		}
	};
};

export const editRequestService = (payload, id, token) => {
	return async (dispatch) => {
		try {
			await requestServicesApi.put(`/update/${id}`, payload, {
				headers: {
					"x-access-token": token,
				},
			});
			dispatch(getRequestService(id));
		} catch (error) {
			console.log(error);
		}
	};
};

export const deleteRequestService = (payload, id, token) => {
	return async () => {
		try {
			await requestServicesApi.delete(`/delete/${id}`, {
				headers: {
					"x-access-token": token,
				},
				data: payload,
			});
		} catch (error) {
			console.log(error);
		}
	};
};

// export const getLastRequestServices = () => {
// 	return async (dispatch) => {
// 		try {
// 			//Peticion al endpoint
// 			dispatch(setIsLoadingLastRequestService());
// 			const { data } = await requestServicesApi.get("/latest");
// 			dispatch(setLastRequestServices({ lastRequestServices: data }));
// 		} catch (error) {
// 			dispatch(stopLoadingLastRequestService());

// 			console.log(error);
// 		}
// 	};
// };

export const getLastRequestServices = (page = 1) => {
	return async (dispatch) => {
		try {
			if (page < 2) {
				dispatch(setIsLoadingLastRequestService());
			}
			const { data } = await requestServicesApi.get(`/pagination-latest?page=${page}&limit=10`);
			const nextPage = data.result.next;
			const lastRequestServices = data.result.results;
			dispatch(setLastRequestServices({ lastRequestServices: lastRequestServices }));

			nextPage ? dispatch(setNextPage(nextPage)) : dispatch(setNextPage(false));
		} catch (error) {
			dispatch(stopLoadingLastRequestService());
			console.log(error);
		}
	};
};
