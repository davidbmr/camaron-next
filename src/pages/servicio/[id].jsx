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
import { useLocalStorage } from "@/hooks/useLocalStorage";

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

	const [user] = useLocalStorage("userLogin_camaron", {});

	let dataService = {
		...service,
		user: user.id,
	};

	return (
		<>
			<Head>
				<meta name="viewport" content="width=device-width, initial-scale=1" />

				<link rel="icon" href="/favicon.ico" />

				{/* Primary Meta Tags  */}
				<title>{`Servicio de ${props.title} | Camaron`}</title>
				<meta name="title" content={props.title} />
				<meta name="description" content={props.description} />

				{/* Open Graph / Facebook  */}
				<meta property="og:type" content="website" />
				{/* <meta property="og:url" content="https://camaron-next.vercel.app/" /> */}
				<meta property="og:title" content={props.title} />
				<meta property="og:description" content={props.description} />
				<meta property="og:image" content={`${props.image}`} />
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
