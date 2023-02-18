import { Loader } from "@/common/Loader/Loader";
import { CarouselStructure } from "../../structures/CarouselStructure/CarouselStructure";
import { NewServiceCard } from "../service/NewServiceCard/NewServiceCard";

import { RequestServiceCard } from "../service/RequestServiceCard/RequestServiceCard";

import { ServiceCard } from "../service/ServiceCard/ServiceCard";
import { ServiceNotFound } from "../ServiceNotFound/ServiceNotFound";
import style from "./SearchResults.module.css";

export const SearchResults = ({ services, isLoading }) => {
	return (
		<div className={style.searchResultContainer}>
			{isLoading ? (
				<Loader />
			) : services?.length ? (
				<>
					<CarouselStructure>
						{services &&
							services.map((service) => {
								if (!service) return null;
								if (service.type === "Solicitudes") {
									return <RequestServiceCard key={service._id} {...service} />;
								}
								if (service.type === "Servicios") {
									return <ServiceCard key={service._id} {...service} />;
								}
							})}
						<NewServiceCard type='search' />
					</CarouselStructure>
				</>
			) : (
				<div className={style.notFoundSearch}>
					<ServiceNotFound type={"search"} />
				</div>
			)}
		</div>
	);
};
