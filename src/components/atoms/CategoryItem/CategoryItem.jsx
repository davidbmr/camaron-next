import style from "./CategoryItem.module.css";

export const CategoryItem = ({ category, isEdit, onClick }) => {
	return (
		<>
			<div className={style.itemCategoryContainer}>
				<p className={style.itemCategory} onClick={onClick}>
					{category}
				</p>
				{isEdit && <p className={style.itemCategoryDelete}>x</p>}
			</div>
		</>
	);
};

CategoryItem.defaultProps = {
	onClick: () => alert("falta agregar funcionalidad"),
};
