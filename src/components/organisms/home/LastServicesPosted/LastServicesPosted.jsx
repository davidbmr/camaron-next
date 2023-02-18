import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { ServiceCard } from "../../service/ServiceCard/ServiceCard";
import { NewServiceCard } from "../../service/NewServiceCard/NewServiceCard";
import { CarouselStructure } from "../../../structures/CarouselStructure/CarouselStructure";
import { SectionTitle } from "../../../atoms/SectionTitle/SectionTitle";
import { SeeMoreCards } from "../../../molecules/SeeMoreCards/SeeMoreCards";
import style from "./LastServicesPosted.module.css";
import { clearLastService, getLastServices } from "@/store/slices/services";
import { Loader } from "@/common/Loader/Loader";

export const LastServicesPosted = () => {
	const dispatch = useDispatch();
	const { lastServices, isLoadingLastService, nextNumberPage, nextPage } = useSelector(
		(state) => state.services
	);

	useEffect(() => {
		dispatch(clearLastService());

		dispatch(getLastServices(1));
	}, []);

	// ---- Agregar más servicios al home
	const handleGetMoreServices = () => {
		if (nextPage) {
			dispatch(getLastServices(nextNumberPage));
		}
	};

	return (
		<div className={style.lastServicesContainer}>
			{isLoadingLastService && <Loader />}

			{lastServices[0] && (
				<>
					<SectionTitle text='Te ofrece' />

					<CarouselStructure>
						{lastServices &&
							lastServices.map((lastService, index) => {
								if (!lastService) return null;
								return <ServiceCard key={`${lastService._id}${index}`} {...lastService} />;
							})}

						{!!nextPage ? (
							<SeeMoreCards onClick={handleGetMoreServices} />
						) : (
							<NewServiceCard type={"servicio"} />
						)}
					</CarouselStructure>
				</>
			)}

			{!lastServices[0] && !isLoadingLastService && (
				<div className={style.lastServiceNotResultContainer}>
					<p className={style.lastServicesTitle}>No se han encontrado Servicios Posteados</p>
				</div>
			)}
		</div>
	);
};
