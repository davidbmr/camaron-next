import { useEffect, useState } from "react";

import { useSelector, useDispatch } from "react-redux";

import { getInfoDashboard } from "@/store/slices/dashboard/thunks";
import { clearPerfil } from "@/store/slices/dashboard/dashboardSlice";
import { ProfileTemplate } from "@/components/templates/ProfileTemplate/ProfileTemplate";
import { useRouter } from "next/router";
import { Header } from "@/common/Header/Header";
import { ColorfulBackground } from "@/common/ColorfulBackground/ColorfulBackground";
import { Footer } from "@/common/Footer/Footer";

// import { ProfileTemplate } from "../../components/UI/templates/ProfileTemplate/ProfileTemplate";
// import { MetaDecorator } from "../../common/MetaDecorator/MetaDecorator";

import { dashboardApi } from "@/connections";
import Head from "next/head";

export default function Profile(props) {
	console.log(props);
	const ogData = props;

	const dispatch = useDispatch();
	const router = useRouter();
	const { nickname } = router.query;

	const loggedUser = useSelector((state) => state.auth.user);
	const { perfil } = useSelector((state) => state.dashboard);

	const [isOwnProfile, setIsOwnProfile] = useState(false);

	// ---- Restauracion del scroll para el navigate desde el perfil
	useEffect(() => {
		window.scrollTo(0, 0);
		if (nickname === loggedUser.nickname) {
			setIsOwnProfile(true);
		} else {
			setIsOwnProfile(false);
		}
		return () => {
			dispatch(clearPerfil());
		};
	}, []);

	// ---- Obteniendo los datos del perfil
	useEffect(() => {
		if (nickname) {
			dispatch(getInfoDashboard(nickname));
		}
	}, [getInfoDashboard, nickname]);

	// ---- Navegacion hacia la vista del edit
	const handleNavigateEdit = () => {
		router.push(`/perfil/editar/${nickname}`);
	};

	return (
		<>
			<Head>
				<meta name="viewport" content="width=device-width, initial-scale=1" />

				<link rel="icon" href="/favicon.ico" />

				{/* Primary Meta Tags  */}
				<title>{`Perfil de ${props.title} | Camaron`}</title>
				<meta name="title" content={`Titulo de prueba`} />
				<meta name="description" content={`Esta es la descripcion profile`} />

				{/* Open Graph / Facebook  */}
				<meta property="og:type" content="website" />
				<meta property="og:url" content="https://camaron-next.vercel.app/" />
				<meta property="og:title" content="Titulo de prueba desde SSR" />
				<meta property="og:description" content="Esta es la descripcion de prueba desde SSR" />
				<meta
					property="og:image"
					content="https://www.imgworlds.com/wp-content/uploads/2015/12/18-CONTACTUS-HEADER.jpg"
				></meta>
			</Head>

			<Header />
			<ProfileTemplate
				titleSection="Perfil de usuario"
				data={perfil}
				handleNavigateEdit={handleNavigateEdit}
				isEdit={false}
				isOwnProfile={isOwnProfile}
			/>
			<ColorfulBackground />
			<Footer />
		</>
	);
}

export async function getServerSideProps({ req, res, params }) {
	// Quiero obtener el url de la pagina aqui
	const nickname = params.nickname;
	const { data } = await dashboardApi.get(`/view/${nickname}`);
	return { props: data.og };
}
