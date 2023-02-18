import { createSlice } from "@reduxjs/toolkit";

export const dashboardSlice = createSlice({
	name: "dashboard",
	initialState: {
		isLoading: false,
		perfil: {},
	},
	reducers: {
		setIsLoading: (state) => {
			state.isLoading = true;
		},
		setPerfil: (state, action) => {
			state.perfil = action.payload.dashboardData;
			state.isLoading = false;
		},
		clearPerfil: (state) => {
			state.perfil = {};
			state.isLoading = false;
		},
	},
});

// Action creators are generated for each case reducer function
export const { setPerfil, setIsLoading, clearPerfil } = dashboardSlice.actions;
