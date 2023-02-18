import style from "./MainTitle.module.css";

export const MainTitle = ({ title }) => {
	return (
		<div className={style.titleContainer}>
			<h1 className={style.title}>{title}</h1>
		</div>
	);
};
