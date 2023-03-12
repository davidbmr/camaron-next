import { useEffect } from "react";
import { useRouter } from "next/router";
import { useDispatch, useSelector } from "react-redux";

import { Header } from "@/common/Header/Header";
import { Footer } from "@/common/Footer/Footer";
import { ColorfulBackground } from "@/common/ColorfulBackground/ColorfulBackground";

import { ServiceTemplate } from "@/components/templates/ServiceTemplate/ServiceTemplate";
import { clearSetService, getService, editService, deleteService } from "@/store/slices/services";

const Service = () => {
	const dispatch = useDispatch();

	const router = useRouter();
	const { id } = router.query;

	// ---- Obteniendo datos del servicio
	useEffect(() => {
		if (id) {
			dispatch(getService(id));
		}
		return () => {
			dispatch(clearSetService());
		};
	}, [id]);

	const { isLoading, service } = useSelector((state) => state.services);
	const loggedUser = useSelector((state) => state.auth.user);

	let dataService = {
		...service,
		user: loggedUser.id,
	};

	return (
		<>
			<Header />
			<ServiceTemplate
				isLoading={isLoading}
				data={service}
				dataService={dataService}
				titleSection='Servicio solicitado'
				functionToDispatchBanner={editService}
				functionToDispatchInfo={editService}
				functionToDispatchDelete={deleteService}
				mail='service'
				location={service.location}
			/>
			<ColorfulBackground />
			<Footer />
		</>
	);
};

export default Service;
