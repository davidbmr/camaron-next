import { useRef } from "react";
import { useState, useEffect } from "react";
import { useEdit } from "../../../hooks/useEdit";
import { useRedirection } from "../../../hooks/useRedirection";
import { useServiceCategories } from "../../../hooks/useServiceCategories";
import { CategoryItem } from "../../atoms/CategoryItem/CategoryItem";
import { ActiveEditButtons } from "../button/ActiveEditButtons/ActiveEditButtons";
import style from "./ServiceCategories.module.css";

export const ServiceCategories = ({ categories, isEdit, data, setNewData }) => {
	const {
		currentCategories,
		currentInput,
		handleChangeInput,
		handleKeyDownInput,
		handleChangeCurrentCategories,
		handleAddButton,
	} = useServiceCategories();
	const { redirectCategory } = useRedirection();

	useEffect(() => {
		if (categories) {
			handleChangeCurrentCategories(categories);
		}
	}, [categories]);

	useEffect(() => {
		if (isEdit) {
			// console.log("entra al useEffect");
			// console.log(currentCategories);
			setNewData({ ...data, category: { categories: currentCategories, industry: "Musica" } });
		}
	}, [currentCategories]);

	//Volver al focus cuando se de click al section
	const inputRef = useRef(null);

	const handleFocusInput = () => {
		if (isEdit) {
			inputRef.current.focus();
		} else {
			return;
		}
	};

	/** Funcion para eliminar categorias del listado */
	const handleDeleteCategories = (category) => {
		let categoriesFiltered = currentCategories.filter((current) => current !== category);
		handleChangeCurrentCategories(categoriesFiltered);
	};

	return (
		<div className={style.categoriesContainer}>
			<div className={style.categoriesView} onClick={handleFocusInput}>
				{isEdit ? (
					<>
						{currentCategories &&
							currentCategories.map((category) => (
								<CategoryItem
									key={category}
									category={category}
									isEdit={isEdit}
									onClick={() => handleDeleteCategories(category)}
								/>
							))}
						<div className={style.inputCategoryContainer}>
							<input
								ref={inputRef}
								className={style.inputCategory}
								type='text'
								placeholder='Agrega una categoría'
								value={currentInput}
								onChange={handleChangeInput}
								onKeyDown={handleKeyDownInput}
							/>

							{currentInput.length > 1 && (
								// <p className={style.addCategoryButton}>Añadir: {currentInput}</p>
								<p className={style.addCategoryButton} onClick={handleAddButton}>
									Añadir categoria
								</p>
							)}
						</div>
					</>
				) : currentCategories.length == 0 ? (
					<p className={style.msgNoCategories}>El servicio no tiene categorias</p>
				) : (
					currentCategories &&
					currentCategories.map((category) => (
						<CategoryItem
							key={category}
							category={category}
							onClick={() => redirectCategory(category)}
						/>
					))
				)}
			</div>
		</div>
	);
};

ServiceCategories.defaultProps = {
	isEdit: false,
	setNewData: () => {
		return;
	},
};
