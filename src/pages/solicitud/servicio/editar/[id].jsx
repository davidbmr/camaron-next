import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { useDispatch, useSelector } from "react-redux";

import { RequestServiceEditionTemplate } from "@/components/templates/RequestServiceEditionTemplate/RequestServiceEditionTemplate";
import {
	clearRequestService,
	deleteRequestService,
	editRequestService,
	getRequestService,
} from "@/store/slices/requestServices";
import { Header } from "@/common/Header/Header";
import { ColorfulBackground } from "@/common/ColorfulBackground/ColorfulBackground";
import { Footer } from "@/common/Footer/Footer";

const RequestServiceEdition = () => {
	const dispatch = useDispatch();
	const router = useRouter();
	const { id } = router.query;

	const { isLoading, requestService } = useSelector((state) => state.requestServices);
	const loggedUser = useSelector((state) => state.auth.user);

	const [currentRequestService, setCurrentRequestService] = useState({});
	const [error, setError] = useState("");

	// ---- Restauracion del scroll para el navigate desde el perfil
	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);

	useEffect(() => {
		if (id) {
			dispatch(getRequestService(id));
		}
		return () => {
			dispatch(clearRequestService());
		};
	}, [id]);

	// ---- Agregando el id del usario desde la autenticacion
	useEffect(() => {
		if (requestService) {
			setCurrentRequestService({ ...requestService, user: loggedUser.id });
		}
	}, [requestService]);

	// ---- Funcion para actualizar los datos
	const handleUpdateRequestService = () => {
		/** Validacion rapida */
		if (!currentRequestService.title) {
			setError("Es necesario agregar un titulo a tu solicitud");
			return;
		}
		if (!currentRequestService.description) {
			setError("Es necesario agregar una descripcion a tu solicitud");
			return;
		}

		console.log("Solicitud de servicio actualizado correctamente");
		dispatch(editRequestService(currentRequestService, id, loggedUser.token));
		setTimeout(() => {
			router.push(`/solicitud/servicio/${id}`);
		}, 1000);
	};

	// ---- Funcion para eliminar servicio
	let user = {
		idUser: loggedUser.id,
	};

	const handleDeleteRequestService = () => {
		dispatch(deleteRequestService(user, id, loggedUser.token));
		setTimeout(() => {
			router.push(`/perfil/${loggedUser.nickname}`);
		}, 1000);
	};

	return (
		<>
			<Header />
			<RequestServiceEditionTemplate
				titleSection='Editar solicitud de servicio'
				isEdit={true}
				data={currentRequestService}
				setNewData={setCurrentRequestService}
				functionToDispatch={handleUpdateRequestService}
				functionToDelete={handleDeleteRequestService}
				isLoading={isLoading}
				msgError={error}
			/>
			<ColorfulBackground />
			<Footer />
		</>
	);
};

export default RequestServiceEdition;
