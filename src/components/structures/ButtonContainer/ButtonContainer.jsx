import style from "./ButtonContainer.module.css";

export const ButtonContainer = ({ children }) => {
	return <div className={style.buttonContainer}>{children}</div>;
};
