export const dataCreateNewService = (idUser) => {
	let newService = {
		title: "Nombre del servicio",
		user: idUser,
		// location: "",
		description: "Descripcion del servicio",
		images: [],
		// profilePic: "url de la imagen del perfil",
		// frontPage: "url de la imagen de la portada",
		category: { categories: [], industry: "Musica" },
	};
	return newService;
};

export const dataCreateNewRequestService = (idUser) => {
	let newService = {
		title: "Nombre del servicio solicitado",
		user: idUser,
		// location: "",
		description: "Descripcion del servicio solicitado",
		images: [],
		// profilePic: "url de la imagen del perfil",
		// frontPage: "url de la imagen de la portada",
		category: { categories: [], industry: "Musica" },
	};
	return newService;
};

export const dataStructureProfile = {
	username: "",
	nickname: "",
	isEnterprise: true,
	location: {},
	description: "",
	// profilePic:'',
	// frontPage:'',
	media: [],
	date: {},
};

export const dataStructureService = {
	title: "",
	user: "",
	location: {
		lat: null,
		lng: null,
		name: "",
		adress: {},
	},
	// category: {},
	description: "",
	media: [],
	// profilePic: "",
	// frontPage: "",
};

export const dataStructureRequestService = {
	title: "",
	user: "",
	location: {
		lat: null,
		lng: null,
		name: "",
		adress: {},
	},
	// category: {},
	description: "",
	media: [],
	// profilePic: "",
	// frontPage: "",
	date: "",
};
