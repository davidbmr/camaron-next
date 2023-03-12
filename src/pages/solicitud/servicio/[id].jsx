import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useRouter } from "next/router";

import {
	clearRequestService,
	deleteRequestService,
	editRequestService,
	getRequestService,
} from "@/store/slices/requestServices";
import { RequestServiceTemplate } from "@/components/templates/RequestServiceTemplate/RequestServiceTemplate";
import { Header } from "@/common/Header/Header";
import { ColorfulBackground } from "@/common/ColorfulBackground/ColorfulBackground";
import { Footer } from "@/common/Footer/Footer";

const RequestService = () => {
	const dispatch = useDispatch();
	const router = useRouter();
	const { id } = router.query;

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

	const { isLoading, requestService } = useSelector((state) => state.requestServices);
	const loggedUser = useSelector((state) => state.auth.user);

	let dataRequestService = {
		...requestService,
		user: loggedUser.id,
	};

	return (
		<>
			<Header />
			<RequestServiceTemplate
				isLoading={isLoading}
				data={requestService}
				dataService={dataRequestService}
				titleSection='Servicio solicitado'
				functionToDispatchBanner={editRequestService}
				functionToDispatchInfo={editRequestService}
				functionToDispatchDelete={deleteRequestService}
				mail='solicitud'
				location={requestService.location}
			/>
			<ColorfulBackground />
			<Footer />
		</>
	);
};

export default RequestService;
