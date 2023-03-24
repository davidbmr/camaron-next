// Solicitud de servicio
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { useDispatch, useSelector } from "react-redux";

import { addRequestService, setClearIdRequestServiceCreated } from "@/store/slices/requestServices";
import { CreateRequestServiceTemplate } from "@/components/templates/CreateRequestServiceTemplate/CreateRequestServiceTemplate";
import { dataStructureRequestService } from "@/helpers/dataStructureToCreate";
import { Header } from "@/common/Header/Header";
import { ColorfulBackground } from "@/common/ColorfulBackground/ColorfulBackground";
import { Footer } from "@/common/Footer/Footer";

const Servicio = () => {
	const dispatch = useDispatch();
	const router = useRouter();

	const { id, token } = useSelector((state) => state.auth.user);
	const { idRequestServiceCreated } = useSelector((state) => state.requestServices);

	const [newRequestService, setNewRequestService] = useState(dataStructureRequestService);
	const [error, setError] = useState("");

	// ---- Restauracion del scroll para el navigate desde el perfil
	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);

	// ---- Agregando el id del usario desde la autenticacion
	useEffect(() => {
		if (id) {
			setNewRequestService({ ...newRequestService, user: id });
		}
	}, [id]);

	// ---- Navegacion al servicio creado
	useEffect(() => {
		if (idRequestServiceCreated) {
			router.push(`/solicitud/servicio/${idRequestServiceCreated}`);
			dispatch(setClearIdRequestServiceCreated());
		}
	}, [idRequestServiceCreated]);

	// ---- Crear nuevo servicio
	const handleCreateRequestService = () => {
		/** Validacion rapida */
		if (!newRequestService.title) {
			setError("Es necesario agregar un titulo a tu solicitud");
			return;
		}
		if (!newRequestService.description) {
			setError("Es necesario agregar una descripcion a tu solicitud");
			return;
		}
		dispatch(addRequestService(newRequestService, token));
	};

	return (
		<>
			<Header />
			<CreateRequestServiceTemplate
				titleSection='Crear solicitud de servicio'
				isEdit={true}
				data={newRequestService}
				setNewData={setNewRequestService}
				functionToDispatch={handleCreateRequestService}
				msgError={error}
			/>
			<ColorfulBackground />
			<Footer />
		</>
	);
};

export default Servicio;
