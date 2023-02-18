import { createSlice } from "@reduxjs/toolkit";

export const requestServicesSlice = createSlice({
	name: "requestServices",
	initialState: {
		isLoading: false,
		requestService: {},
		requestServices: [],
		idRequestServiceCreated: "",
		isNewRequestService: false,
		//----Paginado de las solicitudes en la home
		isLoadingLastRequestService: false,
		lastRequestServices: [],
		nextNumberPage: 1,
		nextPage: false,
	},
	reducers: {
		setIsLoading: (state) => {
			state.requestService = {};
			state.isLoading = true;
		},
		setRequestService: (state, action) => {
			state.requestService = action.payload.requestService;
			state.isLoading = false;
		},
		clearRequestService: (state) => {
			state.requestService = [];
		},
		setRequestServices: (state, action) => {
			state.requestServices = action.payload;
			state.isLoading = false;
		},
		setLastRequestServices: (state, action) => {
			state.isLoadingLastRequestService = false;
			state.lastRequestServices = action.payload.lastRequestServices;
		},
		setIdRequestServiceCreated: (state, action) => {
			state.idRequestServiceCreated = action.payload.id;
			state.isNewRequestService = false;
		},
		setClearIdRequestServiceCreated: (state, action) => {
			state.idRequestServiceCreated = "";
		},
		setIsNewRequestService: (state) => {
			/**Si quiere crear un nueva solicitud de servicio desde la home */
			state.isNewRequestService = true;
		},
		clearIsNewRequestService: (state) => {
			state.isNewRequestService = false;
		},
		//----Paginado de ultimas solicitudes
		setIsLoadingLastRequestService: (state) => {
			state.isLoadingLastRequestService = true;
		},
		stopLoadingLastRequestService: (state) => {
			state.isLoadingLastRequestService = false;
		},
		setLastRequestServices: (state, action) => {
			state.isLoadingLastRequestService = false;

			state.lastRequestServices = [
				...state.lastRequestServices,
				...action.payload.lastRequestServices,
			];

			state.nextNumberPage++;
		},
		clearLastRequestServices: (state) => {
			state.lastRequestServices = [];
			state.nextNumberPage = 1;
		},
		setNextPage: (state, action) => {
			state.nextPage = action.payload;
		},
	},
});

// Action creators are generated for each case reducer function
export const {
	setIsLoading,
	setRequestService,
	clearRequestService,
	setRequestServices,
	setIdRequestServiceCreated,
	setClearIdRequestServiceCreated,
	setIsNewRequestService,
	clearIsNewRequestService,

	//----Paginado de solicitudes
	setIsLoadingLastRequestService,
	stopLoadingLastRequestService,
	setLastRequestServices,
	clearLastRequestServices,
	setNextPage,
} = requestServicesSlice.actions;
