import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { FiChevronDown, FiChevronUp } from "react-icons/fi";

import {
	setCurrentCategories,
	setSwitchRequest,
	setSwitchService,
} from "@/store/slices/search/searchSlice";

import { ToggleSwitch } from "../../molecules/ToggleSwitch/ToggleSwitch";

import style from "./SearchBarFilters.module.css";

export const SearchBarFilters = ({ switchService, switchRequest, handleFilterActive }) => {
	const dispatch = useDispatch();
	const [isCategoriesActive, setIsCategoriesActive] = useState(false);
	//---- Lista de todas las categorias
	const { categories } = useSelector((state) => state.categories);
	//---- Categorias agregadas en el filtro
	const { currentCategories } = useSelector((state) => state.search);

	//---- Siempre habra un switch activo
	if (switchService === false && switchRequest === false) {
		dispatch(setSwitchService());
	}

	//---- Cambiando el valor a los switchs
	const handleSwitchService = () => {
		if (switchRequest) {
			dispatch(setSwitchService());
		}
	};
	const handleSwitchRequest = () => {
		if (switchService) {
			dispatch(setSwitchRequest());
		}
	};

	//---- Activando el estado de las categorias
	const handleCategoriesActive = () => {
		setIsCategoriesActive((prev) => !prev);
	};

	//---- Agregando categorias para el filtrado del slice search
	const handleCurrentCategories = (category) => {
		if (!currentCategories.includes(category)) {
			dispatch(setCurrentCategories({ currentCategories: [...currentCategories, category] }));
		} else {
			let newCategories = currentCategories.filter((element) => element !== category);
			dispatch(setCurrentCategories({ currentCategories: newCategories }));
		}
	};

	//---- Logica de los botones de filtrados
	const handleResetFilters = () => {
		dispatch(setCurrentCategories({ currentCategories: [] }));
		if (!switchRequest) {
			dispatch(setSwitchRequest());
		}
		if (!switchService) {
			dispatch(setSwitchService());
		}
	};
	return (
		<>
			<div className={style.toggleSwitchsContainer}>
				<ToggleSwitch title={"Servicios"} value={switchService} setValue={handleSwitchService} />
				<ToggleSwitch title={"Solicitudes"} value={switchRequest} setValue={handleSwitchRequest} />
			</div>

			{currentCategories?.length > 0 && (
				<div className={style.categoryListPreview}>
					{currentCategories.map((category) => (
						<div
							key={category}
							className={style.categoryItem}
							value='Active'
							onClick={() => handleCurrentCategories(category)}
						>
							{category}
							<span className={style.categoryItemDelete}>x</span>
						</div>
					))}
				</div>
			)}

			{/* Botones del filtrado */}
			<div className={style.filterButtonsContainer}>
				<button className={style.filterButton} value='Secondary' onClick={handleResetFilters}>
					Eliminar
				</button>
				<button className={style.filterButton} value='Primary' onClick={handleFilterActive}>
					Guardar
				</button>
			</div>

			<div className={style.categoryContainer}>
				<div className={style.categoryHeader} onClick={handleCategoriesActive}>
					<p>Categorías de habilidades</p>
					<div className={style.categoryHeaderArrow}>
						{isCategoriesActive ? <FiChevronUp /> : <FiChevronDown />}
					</div>
				</div>

				{isCategoriesActive ? (
					<div className={style.categoryList}>
						{categories &&
							categories.map((category) => (
								<div
									key={category.name}
									className={style.categoryItem}
									value={currentCategories.includes(category.name) ? "Active" : "None"}
									onClick={() => handleCurrentCategories(category.name)}
								>
									{category.display}
								</div>
							))}
					</div>
				) : null}
			</div>
		</>
	);
};
