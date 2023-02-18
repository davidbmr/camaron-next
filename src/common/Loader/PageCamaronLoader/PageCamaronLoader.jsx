import { Loader } from "../../Loader/Loader";
import style from "./PageCamaronLoader.module.css";
export const PageCamaronLoader = () => {
	return (
		<div className={style.loaderContainer}>
			<Loader />
		</div>
	);
};
