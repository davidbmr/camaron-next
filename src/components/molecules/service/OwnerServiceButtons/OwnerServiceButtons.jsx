import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { PrimaryButton } from "../../../atoms/buttons/PrimaryButton/PrimaryButton";

import style from "./OwnerServiceButtons.module.css";

export const OwnerServiceButtons = ({ functionToDispatch, functionToDelete, titleNavigate }) => {
	const navigate = useNavigate();
	const dispatch = useDispatch();
	const { token } = useSelector((state) => state.auth.user);
	const { id } = useParams();

	// let user = {
	// 	idUser: idUser,
	// };

	// const handleDeleteService = (functionToDispatch) => {
	// 	dispatch(functionToDispatch(user, id, token));
	// 	alert("Acción exitosa, en 1 segundos te redireccionaremos a tu perfil");
	// 	setTimeout(() => {
	// 		navigate("/perfil");
	// 	}, 1000);
	// };

	// const handleNavigateEditService = () => {
	// 	navigate(`${urlNavigate}`);
	// };

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
