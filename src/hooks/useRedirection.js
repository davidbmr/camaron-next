import { setUrl } from "@/store/slices/redirection";
import { useDispatch, useSelector } from "react-redux";
// import { useLocation, useNavigate } from "react-router-dom";

import { clearResults, setCurrentCategories } from "@/store/slices/search/searchSlice";
import { getSearchResults } from "@/store/slices/search/thunks";
import { useRouter } from "next/router";
import { useLocalStorage } from "./useLocalStorage";

export const useRedirection = () => {
	const router = useRouter();
	const dispatch = useDispatch();
	const [user] = useLocalStorage("userLogin_camaron", {});
	const { logged } = user;
	const { pathname } = router.query;

	// ---- Navegacion a crear servicio
	const handleNavigateCreateService = () => {
		if (!logged) {
			router.push("/login");
			dispatch(setUrl("/crear/servicio"));
		} else {
			router.push("/crear/servicio");
		}
	};

	// ---- Navegacion a crear solicitud de servicio
	const handleNavigateCreateRequestService = () => {
		if (!logged) {
			router.push("/login");
			dispatch(setUrl("/crear/solicitud/servicio"));
		} else {
			router.push("/crear/solicitud/servicio");
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
		if (pathname !== "/search") {
			router.push("/search");
		}
	};

	return {
		redirectService: handleNavigateCreateService,
		redirectRequestService: handleNavigateCreateRequestService,
		redirectCategory: handleSearchCategory,
	};
};
