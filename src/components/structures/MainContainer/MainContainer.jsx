import style from "./MainContainer.module.css";

export const MainContainer = ({ children }) => {
	return <main className={style.mainContainer}>{children}</main>;
};
