import { useSelector } from "react-redux";

import { SearchBar } from "../../organisms/SearchBar/SearchBar";
import { SearchResults } from "../../organisms/SearchResults/SearchResults";
import { MainContainer } from "../../structures/MainContainer/MainContainer";

import style from "./SearchPageTemplate.module.css";

export const SearchPageTemplate = () => {
	const { results, isLoading } = useSelector((state) => state.search);

	return (
		<MainContainer>
			<p className={style.lastServicesTitle}>Resultados de búsqueda para:</p>

			<SearchBar />
			<div className={style.searchResultsContainer}>
				<SearchResults services={results} isLoading={isLoading} />
			</div>
		</MainContainer>
	);
};
