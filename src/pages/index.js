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
import { useLocalStorage } from "@/hooks/useLocalStorage";

// import { store } from "@/store/store";

export default function Home() {
	const dispatch = useDispatch();
	const router = useRouter();
	const [user, saveUser] = useLocalStorage("userLogin_camaron", {});
	const { logged } = user;
	const { url } = useSelector((state) => state.redirection);

	useEffect(() => {
		dispatch(clearSetIsActive());
		dispatch(getAllCategories());
		dispatch(getPopularCategories());
	}, []);

	// ---- Efecto para deslogeo automatico
	useEffect(() => {
		if (logged === true && user.date) {
			dispatch(logoutUserDate(user.date));
		}
		if (logged === true && !user.date) {
			dispatch(logoutUser());
		}
	}, []);

	// ---- Efecto para regresar al menu de creacion de servicios o solicitud
	useEffect(() => {
		if (logged === true) {
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
				<meta name="title" content="Home | App Soy Camarón" />
				<meta name="description" content="Te ayudamos a conectar con ese servicio o profesional que andas buscando" />

				{/* Open Graph / Facebook  */}
				<meta property="og:type" content="website" />
				<meta property="og:url" content="https://camaron-next.vercel.app/" />
				<meta property="og:title" content="Home | App Soy Camarón" />
				<meta property="og:description" content="Te ayudamos a conectar con ese servicio o profesional que andas buscando" />
				<meta
					property="og:image"
					content="https://soycamaron.com/wp-content/uploads/2022/10/Logo-Camaro%CC%81n.png"
				></meta>
			</Head>

			<Header />
			<HomeTemplate />
			<ColorfulBackground />

			<Footer />
		</>
	);
}

export async function getServerSideProps(context) {
	// const dispatch = store.dispatch;
	// console.log("entro");

	// dispatch(getAllCategories());
	// dispatch(getPopularCategories());
	// const initialReduxState = store.getState();
	// return { props: { initialReduxState } };
	return { props: {} };
}
