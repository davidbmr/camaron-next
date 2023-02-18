import { authApi, userApi } from "../../../connections";
import {
	isCreatedUser,
	loginErrorMsg,
	setDataVerification,
	setUser,
	isLoading,
	registerErrorMsg,
	verificationErrorMsg,
	setLogoutUser,
} from "./authSlice";
// import { clearPerfil } from "../dashboard/dashboardSlice";
import { getCurrentDate } from "../../../helpers/getCurrentDate";

/** Login */
export const getUser = (payload) => {
	return async (dispatch) => {
		try {
			const { data } = await authApi.post("/login", payload);
			dispatch(setUser({ user: data }));
		} catch (error) {
			dispatch(loginErrorMsg({ loginError: error.response.data.msg }));
		}
	};
};

/** Register */
export const createNewUser = (payload) => {
	return async (dispatch) => {
		try {
			dispatch(isLoading());
			await authApi.post("/signup", payload);
			console.log("usuario creado exitosamente");
			dispatch(
				setDataVerification({
					email: payload.email,
					password: payload.password,
				})
			);
		} catch (error) {
			dispatch(registerErrorMsg({ registerError: error.response.data.msg }));
		}
	};
};

export const completeVerification = (payload, data) => {
	return async (dispatch) => {
		try {
			dispatch(isLoading());
			await authApi.post("/verify", payload);
			dispatch(isCreatedUser());
			dispatch(getUser(data));
		} catch (error) {
			dispatch(
				verificationErrorMsg({ verificationError: error.response.data.msg })
			);
		}
	};
};

export const logoutUser = () => {
	return (dispatch) => {
		console.log("Tu sesion ha expirado");
		persistor.purge();
		dispatch(setLogoutUser());
		dispatch(clearPerfil());
	};
};

export const logoutUserDate = (dateLogin) => {
	return (dispatch) => {
		let currentDate = getCurrentDate();
		if (dateLogin.date !== currentDate.date) {
			console.log("Tu sesion ha expirado");
			persistor.purge();
			dispatch(setLogoutUser());
			dispatch(clearPerfil());
		} else {
			return null;
		}
	};
};

export const createNewProfile = (payload, token) => {
	return async (dispatch) => {
		try {
			let { data } = await userApi.post("/newProfile", payload, {
				headers: {
					"x-access-token": token,
				},
			});
			dispatch(setUser({ user: data }));
		} catch (error) {
			dispatch(loginErrorMsg({ loginError: error.response.data.msg }));
		}
	};
};

export const switchUser = (payload, token) => {
	return async (dispatch) => {
		try {
			let { data } = await userApi.post("/switchuser", payload, {
				headers: {
					"x-access-token": token,
				},
			});
			dispatch(setUser({ user: data }));
		} catch (error) {
			console.log(error);
			// dispatch(loginErrorMsg({ loginError: error.response.data.msg }));
		}
	};
};
