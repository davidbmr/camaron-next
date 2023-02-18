import style from "./MenuInputFile.module.css";
import { ThreeQuartersLoader } from "../../../../../common/loader/ThreeQuartersLoader/ThreeQuartersLoader";

export const MenuInputFile = ({ onChangeFunction, isLoading }) => {
	return (
		<div className={style.menuInputFileContainer}>
			<input
				className={style.menuInputFile}
				type='file'
				onChange={onChangeFunction}
			/>

			{isLoading === null ? (
				<></>
			) : isLoading ? (
				<ThreeQuartersLoader />
			) : (
				<p className={style.msgInputFileSuccess}>
					La imagen esta lista para guardar
				</p>
			)}
		</div>
	);
};
