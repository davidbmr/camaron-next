import { createSlice } from "@reduxjs/toolkit";
// import { PURGE } from "redux-persist";
// import storage from "redux-persist/lib/storage";

export const authSlice = createSlice({
	name: "auth",
	initialState: {
		isLoading: false,
		/** Login */
		isLogged: false,
		user: {},
		loginErrorMsg: "",
		/** Register */
		verificationUser: false,
		isCreatedUser: false,
		emailVerification: "",
		passwordVerification: "",
		registerErrorMsg: "",
		/** Verification */
		verificationErrorMsg: "",
		/** Dia de login */
		loginDate: "",
	},
	reducers: {
		isLoading: (state) => {
			state.isLoading = true;
		},

		/** Login */
		setUser: (state, action) => {
			state.user = action.payload.user;
			state.isLogged = true;
			state.isLoading = false;
			state.loginErrorMsg = "";
		},
		setLogoutUser: (state) => {
			state.user = {};
			state.isLogged = false;
			state.isLoading = false;
		},
		loginErrorMsg: (state, action) => {
			state.loginErrorMsg = action.payload.loginError;
			state.isLoading = false;
		},
		clearLoginErrorMsg: (state) => {
			state.loginErrorMsg = "";
			state.isLoading = false;
		},

		/** Register */
		setDataVerification: (state, action) => {
			state.verificationUser = true;
			state.emailVerification = action.payload.email;
			state.passwordVerification = action.payload.password;
			state.registerErrorMsg = "";
		},
		isCreatedUser: (state) => {
			state.isCreatedUser = true;
		},
		clearDataVerification: (state) => {
			state.isLoading = false;
			state.emailVerification = "";
			state.passwordVerification = "";
			state.verificationUser = false;
			state.isCreatedUser = false;
		},
		registerErrorMsg: (state, action) => {
			state.registerErrorMsg = action.payload.registerError;
			state.isLoading = false;
		},
		clearRegisterErrorMsg: (state) => {
			state.registerErrorMsg = "";
			state.isLoading = false;
		},
		/** Verificacion */
		verificationErrorMsg: (state, action) => {
			state.verificationErrorMsg = action.payload.verificationError;
			state.isLoading = false;
		},
		clearVerificationErrorMsg: (state) => {
			state.verificationErrorMsg = "";
			state.isLoading = false;
		},
		setLoginDate: (state, action) => {
			state.loginDate = action.payload;
		},
	},
});

export const {
	isLoading,
	/** Login */
	setUser,
	loginErrorMsg,
	setLogoutUser,
	clearLoginErrorMsg,
	/** Register */
	registerErrorMsg,
	setDataVerification,
	clearDataVerification,
	isCreatedUser,
	clearRegisterErrorMsg,
	/** Verification */
	verificationErrorMsg,
	clearVerificationErrorMsg,
	/** Hora */
	setLoginDate,
} = authSlice.actions;
