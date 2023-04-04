import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import Head from "next/head";
import { useRouter } from "next/router";

import { Footer } from "@/common/Footer/Footer";
import { Header } from "@/common/Header/Header";
import { HomeTemplate } from "@/components/templates/HomeTemplate/HomeTemplate";
import { clearSetIsActive } from "@/store/slices/services";
import { getAllCategories, getPopularCategories } from "@/store/slices/categories";
import { logoutUser, logoutUserDate } from "@/store/slices/auth";
import { clearRedirection } from "@/store/slices/redirection";
import { ColorfulBackground } from "@/common/ColorfulBackground/ColorfulBackground";

import { store } from "@/store/store";

export default function Home() {
	const dispatch = useDispatch();
	const router = useRouter();
	const { isLogged, user } = useSelector((state) => state.auth);
	const { url } = useSelector((state) => state.redirection);

	useEffect(() => {
		dispatch(clearSetIsActive());
		dispatch(getAllCategories());
		dispatch(getPopularCategories());
	}, []);

	// ---- Efecto para deslogeo automatico
	useEffect(() => {
		if (isLogged === true && user.date) {
			dispatch(logoutUserDate(user.date));
		}
		if (isLogged === true && !user.date) {
			dispatch(logoutUser());
		}
	}, []);

	// ---- Efecto para regresar al menu de creacion de servicios o solicitud
	useEffect(() => {
		if (isLogged === true) {
			if (url) {
				router.push(url);
				dispatch(clearRedirection());
			}
		}
	}, []);

	return (
		<>
			<Head>
				<meta name="viewport" content="width=device-width, initial-scale=1" />

				<link rel="icon" href="/favicon.ico" />

				{/* Primary Meta Tags  */}
				<title>Titulo de prueba desde SSR</title>
				<meta name="title" content="Titulo de prueba desde SSR" />
				<meta name="description" content="Esta es la descripcion de prueba desde SSR" />

				{/* Open Graph / Facebook  */}
				<meta property="og:type" content="website" />
				<meta property="og:url" content="https://camaron-next.vercel.app/" />
				<meta property="og:title" content="Titulo de prueba desde SSR" />
				<meta property="og:description" content="Esta es la descripcion de prueba desde SSR" />
				<meta
					property="og:image"
					content="https://app.soycamaron.com/assets/LogoCamaron.282e0303.svg"
				></meta>
			</Head>

			<Header />
			<HomeTemplate />
			{/* <ColorfulBackground /> */}

			<Footer />
		</>
	);
}

export async function getServerSideProps(context) {
	const dispatch = store.dispatch;
	console.log("entro");

	dispatch(getAllCategories());
	dispatch(getPopularCategories());
	const initialReduxState = store.getState();
	return { props: { initialReduxState } };
}
