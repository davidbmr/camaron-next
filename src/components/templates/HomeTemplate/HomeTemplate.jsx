import { MainContainer } from "../../structures/MainContainer/MainContainer";

import { LastServicesPosted } from "../../organisms/home/LastServicesPosted/LastServicesPosted";
import { LastRequestServicePosted } from "../../organisms/home/LastRequestServicePosted/LastRequestServicePosted";
import { MostUsedCategories } from "../../organisms/home/MostUsedCategories/MostUsedCategories";

export const HomeTemplate = () => {
	return (
		<MainContainer>
			{/* <LastServicesPosted /> */}
			{/* <LastRequestServicePosted /> */}
			<MostUsedCategories />
		</MainContainer>
	);
};
