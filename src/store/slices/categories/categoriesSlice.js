import { createSlice } from "@reduxjs/toolkit";

export const categoriesSlice = createSlice({
	name: "categories",
	initialState: {
		isLoading: false,
		categories: [],
		popularCategories: [],
	},
	reducers: {
		setIsLoading: (state) => {
			state.isLoading = true;
		},
		stopIsLoading: (state) => {
			state.isLoading = false;
		},
		setCategories: (state, action) => {
			state.categories = action.payload.categories;
			state.isLoading = false;
		},
		clearCategories: (state) => {
			state.categories = [];
		},
		setPopularCategories: (state, action) => {
			state.popularCategories = action.payload.popularCategories;
			state.isLoading = false;
		},
		clearPopularCategories: () => {
			state.popularCategories = [];
		},
	},
});

export const {
	setIsLoading,
	stopIsLoading,
	setCategories,
	clearCategories,
	setPopularCategories,
	clearPopularCategories,
} = categoriesSlice.actions;
