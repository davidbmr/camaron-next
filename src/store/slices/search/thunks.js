import { searchbarApi } from "../../../connections";
import { setIsLoading, setResults } from "./searchSlice";

export const getSearchResults = (payload = "", switchData, currentCategories) => {
	return async (dispatch) => {
		try {
			dispatch(setIsLoading());
			let { Solicitudes, Servicios } = switchData;
			const { data } = await searchbarApi.post(
				`/allresults?search=${payload}&solicitudes=${Solicitudes}&servicios=${Servicios}`,
				{ category: currentCategories }
			);
			dispatch(setResults({ results: data }));
		} catch (error) {
			console.log(error);
		}
	};
};
