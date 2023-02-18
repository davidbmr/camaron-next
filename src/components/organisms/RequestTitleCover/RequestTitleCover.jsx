import style from "./RequestTitleCover.module.css";

export const RequestTitleCover = ({ title }) => {
	return (
		<div className={style.titleCoverContainer}>
			<h1 className={style.titleCover}>{title}</h1>
		</div>
	);
};
