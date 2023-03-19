import { useState, useEffect } from "react";

import { useDispatch, useSelector } from "react-redux";

import { dataStructureService } from "@/helpers/dataStructureToCreate";
import { addService } from "@/store/slices/services/thunks";
import { setClearlastServiceCreatedId } from "@/store/slices/services/servicesSlice";
import { CreateServiceTemplate } from "@/components/templates/CreateServiceTemplate/CreateServiceTemplate";

import { useRouter } from "next/router";
import { Header } from "@/common/Header/Header";
import { ColorfulBackground } from "@/common/ColorfulBackground/ColorfulBackground";
import { Footer } from "@/common/Footer/Footer";

const servicio = () => {
	const dispatch = useDispatch();
	const router = useRouter();

	const { id, token } = useSelector((state) => state.auth.user);
	const { lastServiceCreatedId } = useSelector((state) => state.services);

	const [newService, setNewService] = useState(dataStructureService);
	const [error, setError] = useState("");

	// ---- Restauracion del scroll para el navigate desde el perfil
	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);

	// ---- Agregando el id del usario desde la autenticacion
	useEffect(() => {
		if (id) {
			setNewService({ ...newService, user: id });
		}
	}, [id]);

	// ---- Navegacion al servicio creado
	useEffect(() => {
		if (lastServiceCreatedId) {
			router.push(`/servicio/${lastServiceCreatedId}`);
			dispatch(setClearlastServiceCreatedId());
		}
	}, [lastServiceCreatedId]);

	// ---- Crear nuevo servicio
	const handleCreateService = () => {
		/** Validacion rapida */
		if (!newService.title) {
			setError("Es necesario agregar un titulo");
			return;
		}
		if (!newService.media.length > 0) {
			setError("Es necesario una portada como minimo");
			return;
		}
		if (!newService.description) {
			setError("Es necesario agregar una descripcion");
			return;
		}
		dispatch(addService(newService, token));
	};

	return (
		<>
			<Header />
			<CreateServiceTemplate
				titleSection='Crear servicio'
				isEdit={true}
				data={newService}
				setNewData={setNewService}
				functionToDispatch={handleCreateService}
				msgError={error}
			/>
			<ColorfulBackground />
			<Footer />
		</>
	);
};

export default servicio;
