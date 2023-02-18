import { setUrl } from "@/store/slices/redirection";
import { useDispatch, useSelector } from "react-redux";
// import { useLocation, useNavigate } from "react-router-dom";

import { clearResults, setCurrentCategories } from "@/store/slices/search/searchSlice";
import { getSearchResults } from "@/store/slices/search/thunks";

export const useRedirection = () => {
	// const navigate = useNavigate();
	const dispatch = useDispatch();
	const { isLogged } = useSelector((state) => state.auth);
	// const { pathname } = useLocation();

	// ---- Navegacion a crear servicio
	const handleNavigateCreateService = () => {
		if (!isLogged) {
			// navigate("/login");
			dispatch(setUrl("/crear/servicio"));
		} else {
			// navigate("/crear/servicio");
		}
	};

	// ---- Navegacion a crear solicitud de servicio
	const handleNavigateCreateRequestService = () => {
		if (!isLogged) {
			// navigate("/login");
			dispatch(setUrl("/crear/solicitud/servicio"));
		} else {
			// navigate("/crear/solicitud/servicio");
		}
	};

	// ---- Navegacion de categoria hacia la pagina del search

	const handleSearchCategory = (category) => {
		dispatch(clearResults());

		//---- Solicitar busqueda
		let switchData = {
			Servicios: true,
			Solicitudes: true,
		};
		dispatch(getSearchResults("", switchData, [category]));
		dispatch(setCurrentCategories({ currentCategories: [category] }));

		//---- Si no se encuentra en la vista de search
		// if (pathname !== "/search") {
		// 	navigate("/search");
		// }
	};

	return {
		redirectService: handleNavigateCreateService,
		redirectRequestService: handleNavigateCreateRequestService,
		redirectCategory: handleSearchCategory,
	};
};
