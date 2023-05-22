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
import { useLocalStorage } from "@/hooks/useLocalStorage";

export default function RequestService(props) {
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

	const [user] = useLocalStorage("userLogin_camaron", {});

	let dataRequestService = {
		...requestService,
		user: user.id,
	};

	return (
		<>
			<Head>
				<meta name="viewport" content="width=device-width, initial-scale=1" />

				<link rel="icon" href="/favicon.ico" />

				{/* Primary Meta Tags  */}
				<title>{`Solicita el servicio de ${props.title} | Camaron`}</title>
				<meta name="title" content={`${props.title}`} />
				<meta name="description" content={`${props.description}`} />

				{/* Open Graph / Facebook  */}
				<meta property="og:type" content="website" />
				{/* <meta property="og:url" content="https://camaron-next.vercel.app/" /> */}
				<meta property="og:title" content={`${props.title}`} />
				<meta property="og:description" content={`${props.description}`} />
				<meta property="og:image" content={`https://soycamaron.com/wp-content/uploads/2022/10/Logo-Camaro%CC%81n.png`} />
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
	const { data } = await requestServicesApi.get(`/detail/${id}`);
	return { props: data.og };
}
