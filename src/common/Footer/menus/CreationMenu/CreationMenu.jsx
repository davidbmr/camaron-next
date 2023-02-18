import { useDispatch } from "react-redux";
// import { useNavigate } from "react-router-dom";
// import { FieldCreateFooter } from "../../../../components/UI/molecules/FieldCreateFooter/FieldCreateFooter";
// import { setUrl } from "../../../../store/slices/redirection/redirectionSlice";
import { MenuModal } from "../../MenuModal/MenuModal";
// import style from "./CreationMenu.module.css";

export const CreationMenu = ({ handleMenuActive, isLogged }) => {
	// const navigate = useNavigate();
	const dispatch = useDispatch();

	// ---- Navegacion a crear servicio
	const handleNavigateCreateService = () => {
		if (!isLogged) {
			navigate("/login");
			dispatch(setUrl("/crear/servicio"));
		} else {
			// navigate("/crear/servicio");
		}
		handleMenuActive();
	};

	// ---- Navegacion a crear solicitud de servicio
	const handleNavigateCreateRequestService = () => {
		if (!isLogged) {
			// navigate("/login");
			dispatch(setUrl("/crear/solicitud/servicio"));
		} else {
			// navigate("/crear/solicitud/servicio");
		}
		handleMenuActive();
	};

	return (
		<MenuModal handleMenuActive={handleMenuActive}>
			<FieldCreateFooter
				text={"Agregar un servicio"}
				add={true}
				onClick={handleNavigateCreateService}
			/>
			<FieldCreateFooter
				text={"Agregar una solicitud"}
				add={true}
				onClick={handleNavigateCreateRequestService}
			/>
		</MenuModal>
	);
};

// onClick={isLogged ? () => handleMenuActive("creationMenu") : () => navigate("/login")}
