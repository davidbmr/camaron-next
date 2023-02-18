import { createSlice } from "@reduxjs/toolkit";

export const searchSlice = createSlice({
	name: "search",
	initialState: {
		isLoading: false,
		results: [],
		search: "",
		switchService: true,
		switchRequest: true,
		currentCategories: [],
	},
	reducers: {
		setIsLoading: (state) => {
			state.isLoading = true;
		},
		clearIsLoading: (state) => {
			state.isLoading = false;
		},
		setResults: (state, action) => {
			state.results = action.payload.results;
			state.isLoading = false;
		},
		clearResults: (state) => {
			state.results = [];
		},
		setSearch: (state, action) => {
			state.search = action.payload;
		},
		setSwitchService: (state) => {
			state.switchService = !state.switchService;
		},
		setSwitchRequest: (state) => {
			state.switchRequest = !state.switchRequest;
		},
		setCurrentCategories: (state, action) => {
			state.currentCategories = action.payload.currentCategories;
		},
	},
});

// Action creators are generated for each case reducer function
export const {
	setIsLoading,
	clearIsLoading,
	setResults,
	clearResults,
	setSearch,
	setSwitchService,
	setSwitchRequest,
	setCurrentCategories,
} = searchSlice.actions;
