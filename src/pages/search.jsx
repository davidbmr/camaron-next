import { ColorfulBackground } from "@/common/ColorfulBackground/ColorfulBackground";
import { Footer } from "@/common/Footer/Footer";
import { Header } from "@/common/Header/Header";
import { SearchPageTemplate } from "@/components/templates/SearchPageTemplate/SearchPageTemplate";

export default function Search() {
	return (
		<>
			<Header />
			<SearchPageTemplate />

			<ColorfulBackground />
			<Footer />
		</>
	);
}
