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

export async function getServerSideProps() {
	const dispatch = store.dispatch;
	await dispatch(getAllCategories());
	await dispatch(getPopularCategories());

	return {
		props: {},
	};
}

export default function Home2() {
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
				<meta name='description' content='Pagina principal' />
				<meta name='viewport' content='width=device-width, initial-scale=1' />
				<title>Soy camaron app | Home</title>
				<meta name='title' content='Homepage Camaron titulo' />
				<meta name='description' content='Homepage Camaron description' />
				<link rel='icon' href='/favicon.ico' />
			</Head>

			<Header />
			<HomeTemplate />
			<ColorfulBackground />

			{/* <Footer /> */}
		</>
	);
}
