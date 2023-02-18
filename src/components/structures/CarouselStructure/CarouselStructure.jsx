import style from "./CarouselStructure.module.css";

export const CarouselStructure = ({ children }) => {
	return <div className={style.carouselStructure__container}>{children}</div>;
};
