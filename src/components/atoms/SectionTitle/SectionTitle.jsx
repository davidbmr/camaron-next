import style from "./SectionTitle.module.css";

export const SectionTitle = ({ text = "Añade un titulo" }) => {
	return <div className={style.sectionTitle}>{text}</div>;
};
