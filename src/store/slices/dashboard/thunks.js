import { dashboardApi } from "../../../connections";
import { setIsLoading, setPerfil } from "./dashboardSlice";

export const getInfoDashboard = (nickname) => {
	return async (dispatch) => {
		try {
			dispatch(setIsLoading());
			const { data } = await dashboardApi.get(`/view/${nickname}`);
			dispatch(setPerfil({ dashboardData: data }));
		} catch (error) {
			console.log(error);
		}
	};
};

export const editInfoDashboard = (data, token) => {
	return async (dispatch) => {
		try {
			await dashboardApi.post(`/edit/${data.id}`, data, {
				headers: {
					"x-access-token": token,
				},
			});
			/**Cambiar en vez de data.id por data.nickname (Pero se tendria que agregar ese campo en la data -dashboard-) */
			dispatch(getInfoDashboard(data.nickname));
		} catch (error) {
			console.log(error);
		}
	};
};
