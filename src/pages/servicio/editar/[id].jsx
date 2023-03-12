import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { useDispatch, useSelector } from "react-redux";

import { Header } from "@/common/Header/Header";
import { Footer } from "@/common/Footer/Footer";
import { ColorfulBackground } from "@/common/ColorfulBackground/ColorfulBackground";

import { clearSetService } from "@/store/slices/services/servicesSlice";
import { deleteService, editService, getService } from "@/store/slices/services/thunks";
import { ServiceEditionTemplate } from "@/components/templates/ServiceEditionTemplate/ServiceEditionTemplate";

const ServiceEdition = () => {
	const dispatch = useDispatch();
	const router = useRouter();
	const { id } = router.query;

	const loggedUser = useSelector((state) => state.auth.user);
	const { service } = useSelector((state) => state.services);

	const [currentService, setCurrentService] = useState({});
	const [error, setError] = useState("");

	// ---- Obteniendo los datos del servicio ingresado
	useEffect(() => {
		if (id) {
			dispatch(getService(id));
		}
		return () => {
			dispatch(clearSetService());
		};
	}, [id]);

	// ---- Agregando el id del usario desde la autenticacion
	useEffect(() => {
		if (service) {
			setCurrentService({ ...service, user: loggedUser.id });
		}
	}, [service]);

	// ---- Funcion para actualizar los datos
	const handleUpdateService = () => {
		/** Validacion rapida */
		if (!currentService.title) {
			setError("Es necesario agregar un titulo");
			return;
		}
		if (!currentService.media.length > 0) {
			setError("Es necesario una portada como minimo");
			return;
		}
		if (!currentService.description) {
			setError("Es necesario agregar una descripcion");
			return;
		}

		console.log("Servicio actualizado correctamente");
		dispatch(editService(currentService, id, loggedUser.token));
		setTimeout(() => {
			router.push(`/servicio/${id}`);
		}, 1000);
	};

	// ---- Funcion para eliminar servicio
	let user = {
		idUser: loggedUser.id,
	};

	const handleDeleteService = () => {
		dispatch(deleteService(user, id, loggedUser.token));
		setTimeout(() => {
			router.push(`/perfil/${loggedUser.nickname}`);
		}, 1000);
	};

	return (
		<>
			<Header />

			<ServiceEditionTemplate
				titleSection='Editar servicio'
				isEdit={true}
				data={currentService}
				setNewData={setCurrentService}
				functionToDispatch={handleUpdateService}
				functionToDelete={handleDeleteService}
				msgError={error}
			/>

			<ColorfulBackground />
			<Footer />
		</>
	);
};

export default ServiceEdition;
