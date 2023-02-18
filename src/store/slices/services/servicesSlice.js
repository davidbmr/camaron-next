import { createSlice } from "@reduxjs/toolkit";

export const servicesSlice = createSlice({
	name: "services",
	initialState: {
		isLoading: false,
		service: {},
		lastServiceCreatedId: "",
		//---- Revisar para eliminar
		isLocation: "",
		isActive: "",
		isNewService: false,
		//---- Paginado de servicios en la home
		isLoadingLastService: false,
		lastServices: [],
		nextNumberPage: 1,
		nextPage: false,
	},
	reducers: {
		setIsLoading: (state) => {
			state.service = {};
			state.isLoading = true;
		},
		clearIsLoading: (state) => {
			state.isLoading = false;
		},
		setService: (state, action) => {
			state.service = action.payload.service;
			state.isLoading = false;
		},
		clearSetService: (state) => {
			state.service = {};
		},

		setlastServiceCreatedId: (state, action) => {
			state.lastServiceCreatedId = action.payload.id;
		},
		setClearlastServiceCreatedId: (state) => {
			state.lastServiceCreatedId = "";
		},
		setIsLocation: (state, action) => {
			state.isLocation = action.payload;
		},
		clearIsLocation: (state) => {
			state.isLocation = "";
		},
		setIsActive: (state) => {
			state.isActive = true;
		},
		clearSetIsActive: (state) => {
			state.isActive = false;
			state.isLoading = false;
		},
		setIsNewService: (state) => {
			/**Si quiere crear un nueva solicitud de servicio desde la home */
			state.isNewService = true;
		},
		clearIsNewService: (state) => {
			state.isNewService = false;
		},

		//---- Paginado de ultimos servicios
		setIsLoadingLastService: (state) => {
			state.isLoadingLastService = true;
		},
		stopLoadingLastService: (state) => {
			state.isLoadingLastService = false;
		},
		setLastServices: (state, action) => {
			state.isLoadingLastService = false;

			state.lastServices = [...state.lastServices, ...action.payload.lastServices];

			state.nextNumberPage++;
		},
		clearLastService: (state) => {
			state.lastServices = [];
			state.nextNumberPage = 1;
		},
		setNextPage: (state, action) => {
			state.nextPage = action.payload;
		},
	},
});

export const {
	setIsLoading,
	clearIsLoading,
	setService,
	clearSetService,
	setlastServiceCreatedId,
	setClearlastServiceCreatedId,
	setIsLocation,
	clearIsLocation,
	setIsActive,
	clearSetIsActive,
	setIsNewService,
	clearIsNewService,
	//----Paginado de servicios
	setIsLoadingLastService,
	stopLoadingLastService,
	setLastServices,
	clearLastService,
	setNextPage,
} = servicesSlice.actions;
