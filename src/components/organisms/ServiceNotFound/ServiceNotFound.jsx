//Componente para eliminar

import { useRouter } from "next/router";
import { useDispatch, useSelector } from "react-redux";

import { setIsNewRequestService } from "@/store/slices/requestServices/requestServicesSlice";
import { setIsNewService } from "@/store/slices/services/servicesSlice";

import style from "./ServiceNotFound.module.css";
import { PrimaryButton } from "@/components/atoms/buttons/PrimaryButton/PrimaryButton";

export const ServiceNotFound = ({ type }) => {
	const router = useRouter();
	const dispatch = useDispatch();
	const { isLogged } = useSelector((state) => state.auth);

	const handleCreateService = () => {
		if (isLogged) {
			router.push("/crear/servicio");
			return;
		}
		dispatch(setIsNewService());
		router.push("/login");
	};

	const handleCreateRequestService = () => {
		if (isLogged) {
			router.push("/crear/solicitud/servicio");
			return;
		}
		dispatch(setIsNewRequestService());

		router.push("/login");
	};

	return (
		<div className={style.serviceCardGridNoFound}>
			{type === "Servicio" && (
				<>
					<p>¿Tienes habilidades que te gustaria convertir en una fuente de ingresos?</p>

					<p>
						Publica tu servicio y encuentra
						<br />
						oportunidades de trabajo.
					</p>

					<PrimaryButton
						title='Publicar servicio'
						cssClass='tertiaryButton'
						onClick={handleCreateService}
					/>
				</>
			)}

			{type === "Solicitud" && (
				<>
					<p>¿No encontraste lo que buscabas?</p>

					<p>
						Publica tu solicitud
						<br />y te ayudaremos a encontrarlo.
					</p>
					<PrimaryButton
						title='Publicar solicitud'
						cssClass='tertiaryButton'
						onClick={handleCreateRequestService}
					/>
				</>
			)}
		</div>
	);
};
