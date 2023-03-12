import { PrimaryButton } from "../../../atoms/buttons/PrimaryButton/PrimaryButton";

import style from "./OwnerServiceButtons.module.css";

export const OwnerServiceButtons = ({ functionToDispatch, functionToDelete, titleNavigate }) => {
	return (
		<div className={style.buttonsContainer}>
			<PrimaryButton
				title={titleNavigate}
				onClick={functionToDispatch}
				cssClass={"primaryButton"}
			/>
			<PrimaryButton title={"Eliminar"} onClick={functionToDelete} cssClass={"tertiaryButton"} />
		</div>
	);
};

OwnerServiceButtons.defaultProps = {
	titleNavigate: "Volver",
};
