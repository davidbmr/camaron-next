import { categoriesApi } from "../../../connections";
import { setCategories, setIsLoading, setPopularCategories } from "./categoriesSlice";

export const getAllCategories = () => {
	return async (dispatch) => {
		try {
			dispatch(setIsLoading());
			const { data } = await categoriesApi.get("/all");
			dispatch(setCategories({ categories: data }));
		} catch (error) {
			console.log(error);
		}
	};
};

export const getPopularCategories = () => {
	return async (dispatch) => {
		try {
			dispatch(setIsLoading());
			const { data } = await categoriesApi.get("/popular-categories");
			dispatch(setPopularCategories({ popularCategories: data }));
		} catch (error) {
			console.log(error);
		}
	};
};
