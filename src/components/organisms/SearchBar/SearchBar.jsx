import { useState } from "react";

import { useDispatch, useSelector } from "react-redux";
import { IoFilterSharp } from "react-icons/io5";
import { VscTriangleUp } from "react-icons/vsc";

import { setSearch } from "@/store/slices/search/searchSlice";
import { getSearchResults } from "@/store/slices/search/thunks";
import { getAllCategories } from "@/store/slices/categories/thunks";

import { SearchBarFilters } from "../SearchBarFilters/SearchBarFilters";

import style from "./SearchBar.module.css";
import { useRouter } from "next/router";

export const SearchBar = ({ handleMenuActive = false }) => {
	const dispatch = useDispatch();
	const router = useRouter();
	const { pathname } = router;

	const [isFilterActive, setIsFilterActive] = useState(false);
	const { search, switchService, switchRequest } = useSelector((state) => state.search);
	//---- Categorias agregadas en el filtro
	const { currentCategories } = useSelector((state) => state.search);

	const handleGetWorks = (e) => {
		e.preventDefault();
		//---- Si no se encuentra en la vista de search
		if (pathname !== "/search") {
			router.push("/search");
		}

		//---- Solicitar busqueda
		let switchData = {
			Servicios: switchService,
			Solicitudes: switchRequest,
		};
		dispatch(getSearchResults(search, switchData, currentCategories));
		if (handleMenuActive) {
			handleMenuActive();
		}
		setIsFilterActive(false);
	};

	const handleFilterActive = () => {
		setIsFilterActive((prev) => !prev);
		//---- Cargar categorias al activar el filtro
		if (!isFilterActive) dispatch(getAllCategories());
	};

	return (
		<div className={style.searchBarSectionContainer}>
			<div className={style.searchBarContainer}>
				<form className={style.searchBarFormContainer}>
					<input
						autoFocus
						className={style.searchBar}
						type='text'
						placeholder='Buscar'
						value={search}
						onChange={(e) => dispatch(setSearch(e.target.value))}
					/>
					<button className={style.searchIconButton} onClick={handleGetWorks}></button>
				</form>

				<div className={style.filterButton} onClick={handleFilterActive}>
					{isFilterActive ? <VscTriangleUp /> : <IoFilterSharp />}
				</div>
			</div>

			{/* ---- Preview de categorias ---- */}
			{!isFilterActive && (
				<div className={style.categoryListPreview}>
					{switchService && !switchRequest && (
						<div className={style.categoryItem} value='Rosado'>
							Servicios
						</div>
					)}
					{!switchService && switchRequest && (
						<div className={style.categoryItem} value='Rosado'>
							Solicitudes
						</div>
					)}
					{switchService && switchRequest && (
						<div className={style.categoryItem} value='Rosado'>
							Servicios y solicitudes
						</div>
					)}
					{currentCategories?.length > 0 ? (
						currentCategories.map((category) => (
							<div
								key={category}
								className={style.categoryItem}
								value='Active'
								// onClick={() => handleCurrentCategories(category)}
							>
								{category}
								{/* <span className={style.categoryItemDelete}>x</span> */}
							</div>
						))
					) : (
						<div className={style.categoryItem} value='Active'>
							Todas las categorias
						</div>
					)}
				</div>
			)}

			{isFilterActive && (
				<SearchBarFilters
					switchService={switchService}
					switchRequest={switchRequest}
					handleFilterActive={() => setIsFilterActive((prev) => !prev)}
				/>
			)}
		</div>
	);
};
