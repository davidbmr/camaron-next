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
import { requestServicesApi } from "@/connections";
import Head from "next/head";

export default function RequestService() {
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
			<Head>
				<meta name="viewport" content="width=device-width, initial-scale=1" />

				<link rel="icon" href="/favicon.ico" />

				{/* Primary Meta Tags  */}
				<title>{`Solicita el servicio de ${props.title} | Camaron`}</title>
				<meta name="title" content={`Titulo de prueba para solicitud dde servicio`} />
				<meta name="description" content={`Esta es la descripcion de solicitud de servicio`} />

				{/* Open Graph / Facebook  */}
				<meta property="og:type" content="website" />
				{/* <meta property="og:url" content="https://camaron-next.vercel.app/" /> */}
				<meta property="og:title" content="Solicitud servicio - Titulo de prueba desde SSR" />
				<meta property="og:description" content="Esta es la descripcion de prueba desde SSR" />
				<meta property="og:image" content={`${props.image}`} />
			</Head>

			<Header />
			<RequestServiceTemplate
				isLoading={isLoading}
				data={requestService}
				dataService={dataRequestService}
				titleSection="Servicio solicitado"
				functionToDispatchBanner={editRequestService}
				functionToDispatchInfo={editRequestService}
				functionToDispatchDelete={deleteRequestService}
				mail="solicitud"
				location={requestService.location}
			/>
			<ColorfulBackground />
			<Footer />
		</>
	);
}

export async function getServerSideProps({ req, res, params }) {
	const id = params.id;
	const { data } = await requestServicesApi.get(`/${id}`);
	return { props: data.og };
}
