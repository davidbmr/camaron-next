import { useDispatch } from "react-redux";
import { useRouter } from "next/router";

import { FieldCreateFooter } from "@/components/molecules/FieldCreateFooter/FieldCreateFooter";
import { setUrl } from "@/store/slices/redirection/redirectionSlice";
import { MenuModal } from "../../MenuModal/MenuModal";

import style from "./CreationMenu.module.css";

export const CreationMenu = ({ handleMenuActive, isLogged }) => {
	const router = useRouter();
	const dispatch = useDispatch();

	// ---- Navegacion a crear servicio
	const handleNavigateCreateService = () => {
		if (!isLogged) {
			router.push("/login");
			dispatch(setUrl("/crear/servicio"));
		} else {
			router.push("/crear/servicio");
		}
		handleMenuActive();
	};

	// ---- Navegacion a crear solicitud de servicio
	const handleNavigateCreateRequestService = () => {
		if (!isLogged) {
			router.push("/login");
			dispatch(setUrl("/crear/solicitud/servicio"));
		} else {
			router.push("/crear/solicitud/servicio");
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
