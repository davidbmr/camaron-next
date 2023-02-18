import { useState } from "react";
import { useSelector } from "react-redux";
import { CategoryItem } from "../../../atoms/CategoryItem/CategoryItem";
import { SectionTitle } from "../../../atoms/SectionTitle/SectionTitle";
import { VscTriangleDown, VscTriangleUp } from "react-icons/vsc";
import style from "./MostUsedCategories.module.css";
import { useRedirection } from "@/hooks/useRedirection";

export const MostUsedCategories = () => {
	const [popularCategoriesActive, setPopularCategoriesActive] = useState(true);

	const { categories, popularCategories } = useSelector((state) => state.categories);
	const { redirectCategory } = useRedirection();

	const handleViewCategories = () => {
		setPopularCategoriesActive((prev) => !prev);
	};

	return (
		<div className={style.mostUsedCategories__container}>
			<SectionTitle text='Las categorías más usadas' />

			{popularCategoriesActive ? (
				<>
					<div className={style.categories__container}>
						{popularCategories?.length > 0 &&
							popularCategories.map((category) => (
								<CategoryItem
									key={category.display}
									category={category.display}
									onClick={() => redirectCategory(category.name)}
								/>
							))}
					</div>

					<button className={style.buttonCategories} onClick={handleViewCategories}>
						Ver más <VscTriangleDown />
					</button>
				</>
			) : (
				<>
					<div className={style.categories__container}>
						{categories?.length > 0 &&
							categories.map((category) => (
								<CategoryItem
									key={category.display}
									category={category.display}
									onClick={() => redirectCategory(category.name)}
								/>
							))}
					</div>
					<button className={style.buttonCategories} onClick={handleViewCategories}>
						Ver menos <VscTriangleUp />
					</button>
				</>
			)}
		</div>
	);
};
