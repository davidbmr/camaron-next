import { useEffect } from "react";
import { useRouter } from "next/router";
import { useDispatch, useSelector } from "react-redux";

import { Header } from "@/common/Header/Header";
import { Footer } from "@/common/Footer/Footer";
import { ColorfulBackground } from "@/common/ColorfulBackground/ColorfulBackground";

import { ServiceTemplate } from "@/components/templates/ServiceTemplate/ServiceTemplate";
import { clearSetService, getService, editService, deleteService } from "@/store/slices/services";
import { servicesApi } from "@/connections";
import Head from "next/head";

export default function Service(props) {
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
			<Head>
				<meta name="viewport" content="width=device-width, initial-scale=1" />

				<link rel="icon" href="/favicon.ico" />

				{/* Primary Meta Tags  */}
				<title>{`Servicio de ${props.title} | Camaron`}</title>
				<meta name="title" content={`Titulo de prueba para servicio`} />
				<meta name="description" content={`Esta es la descripcion de servicio`} />

				{/* Open Graph / Facebook  */}
				<meta property="og:type" content="website" />
				{/* <meta property="og:url" content="https://camaron-next.vercel.app/" /> */}
				<meta property="og:title" content="Servicio - Titulo de prueba desde SSR" />
				<meta property="og:description" content="Esta es la descripcion de prueba desde SSR" />
				<meta property="og:image" content={`${props.img}`} />
			</Head>

			<Header />
			<ServiceTemplate
				isLoading={isLoading}
				data={service}
				dataService={dataService}
				titleSection="Servicio solicitado"
				functionToDispatchBanner={editService}
				functionToDispatchInfo={editService}
				functionToDispatchDelete={deleteService}
				mail="service"
				location={service.location}
			/>
			<ColorfulBackground />
			<Footer />
		</>
	);
}

export async function getServerSideProps({ req, res, params }) {
	const id = params.id;
	const { data } = await servicesApi.get(`/${id}`);
	return { props: data.og };
}
