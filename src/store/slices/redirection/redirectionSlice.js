import { createSlice } from "@reduxjs/toolkit";

export const redirectionSlice = createSlice({
	name: "redirection",
	initialState: {
		url: "",
	},
	reducers: {
		setUrl: (state, action) => {
			state.url = action.payload;
		},
		clearRedirection: (state) => {
			state.url = "";
		},
	},
});

// Action creators are generated for each case reducer function
export const { setUrl, clearRedirection } = redirectionSlice.actions;
