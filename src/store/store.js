import { configureStore } from "@reduxjs/toolkit";
import { authSlice } from "./slices/auth";
import { categoriesSlice } from "./slices/categories";
import { dashboardSlice } from "./slices/dashboard";
import { redirectionSlice } from "./slices/redirection";
import { requestServicesSlice } from "./slices/requestServices";
import { searchSlice } from "./slices/search";
import { servicesSlice } from "./slices/services";

export const store = configureStore({
	reducer: {
		// auth: authSlice.reducer,
		dashboard: dashboardSlice.reducer,
		services: servicesSlice.reducer,
		requestServices: requestServicesSlice.reducer,
		search: searchSlice.reducer,
		categories: categoriesSlice.reducer,
		redirection: redirectionSlice.reducer,
	},
});

// import { combineReducers } from "redux";
// import { configureStore } from "@reduxjs/toolkit";

// import { persistStore } from "redux-persist";
// import { persistReducer, FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER } from "redux-persist";
// import storage from "redux-persist/lib/storage";

// import { authSlice } from "./slices/auth";
// import { categoriesSlice } from "./slices/categories";
// import { dashboardSlice } from "./slices/dashboard";
// import { redirectionSlice } from "./slices/redirection";
// import { requestServicesSlice } from "./slices/requestServices";
// import { searchSlice } from "./slices/search";
// import { servicesSlice } from "./slices/services";

// const persistConfig = {
// 	key: "root",
// 	version: 1,
// 	storage,
// 	// blacklist: ["dashboard", "services", "requestServices"],
// 	whitelist: ["auth"],
// };

// const reducer = combineReducers({
// 	auth: authSlice.reducer,
// 	dashboard: dashboardSlice.reducer,
// 	services: servicesSlice.reducer,
// 	requestServices: requestServicesSlice.reducer,
// 	search: searchSlice.reducer,
// 	categories: categoriesSlice.reducer,
// 	redirection: redirectionSlice.reducer,
// });

// const persistedReducer = persistReducer(persistConfig, reducer);

// export const store = configureStore({
// 	reducer: persistedReducer,
// 	middleware: (getDefaultMiddleware) =>
// 		getDefaultMiddleware({
// 			serializableCheck: {
// 				ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
// 			},
// 		}),
// });

// export let persistor = persistStore(store);
