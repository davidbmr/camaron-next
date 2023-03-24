import Head from "next/head";
import { ColorfulBackground } from "@/common/ColorfulBackground/ColorfulBackground";
import { Footer } from "@/common/Footer/Footer";
import { Header } from "@/common/Header/Header";
import { SearchPageTemplate } from "@/components/templates/SearchPageTemplate/SearchPageTemplate";

export default function Search() {
	return (
		<>
			<Head>
				<meta name='description' content='Pagina principal' />
				<meta name='viewport' content='width=device-width, initial-scale=1' />
				<title>Soy camaron app | Search</title>
				<link rel='icon' href='/favicon.ico' />
			</Head>

			<Header />
			<SearchPageTemplate />

			<ColorfulBackground />
			<Footer />
		</>
	);
}
