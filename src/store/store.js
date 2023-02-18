import { configureStore } from "@reduxjs/toolkit";
import { authSlice } from "./slices/auth";
import { categoriesSlice } from "./slices/categories";
import { redirectionSlice } from "./slices/redirection";
import { requestServicesSlice } from "./slices/requestServices";
import { searchSlice } from "./slices/search";
import { servicesSlice } from "./slices/services";

export const store = configureStore({
	reducer: {
		auth: authSlice.reducer,
		services: servicesSlice.reducer,
		requestServices: requestServicesSlice.reducer,
		categories: categoriesSlice.reducer,
		redirection: redirectionSlice.reducer,
		search: searchSlice.reducer,
	},
});
