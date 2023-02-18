import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { CarouselStructure } from "../../../structures/CarouselStructure/CarouselStructure";

import { RequestServiceCard } from "../../service/RequestServiceCard/RequestServiceCard";
// import { getLastRequestServices } from "../../../../../store/slices/requestServices/thunks";

import { SectionTitle } from "../../../atoms/SectionTitle/SectionTitle";

// import ScrollContainer from "react-indiana-drag-scroll";

import style from "./LastRequestServicePosted.module.css";
import { SeeMoreCards } from "../../../molecules/SeeMoreCards/SeeMoreCards";
import { NewServiceCard } from "../../service/NewServiceCard/NewServiceCard";
// import { clearLastRequestServices } from "../../../../../store/slices/requestServices/requestServicesSlice";
import { Loader } from "@/common/Loader/Loader";
import { clearLastRequestServices, getLastRequestServices } from "@/store/slices/requestServices";

export const LastRequestServicePosted = () => {
	const dispatch = useDispatch();

	const { lastRequestServices, isLoadingLastRequestService, nextNumberPage, nextPage } =
		useSelector((state) => state.requestServices);

	useEffect(() => {
		dispatch(clearLastRequestServices());
		dispatch(getLastRequestServices(1));
	}, []);

	// ---- Agregar más solicitudes al home
	const handleGetMoreRequestServices = () => {
		if (nextPage) {
			dispatch(getLastRequestServices(nextNumberPage));
		}
	};

	return (
		<div className={style.lastServicesContainer}>
			{isLoadingLastRequestService && <Loader />}

			{lastRequestServices[0] && (
				<>
					<SectionTitle text='Te ayuda a encontrar' />
					<CarouselStructure>
						{lastRequestServices &&
							lastRequestServices.map((lastRequestService, index) => {
								if (!lastRequestService) return null;
								return (
									<RequestServiceCard
										key={lastRequestService._id + index}
										{...lastRequestService}
									/>
								);
							})}

						{!!nextPage ? (
							<SeeMoreCards onClick={handleGetMoreRequestServices} />
						) : (
							<NewServiceCard type={"solicitud"} />
						)}
					</CarouselStructure>
				</>
			)}

			{!lastRequestServices[0] && !isLoadingLastRequestService && (
				<div className={style.lastServiceNotResultContainer}>
					<p className={style.lastServicesTitle}>
						No se han encontrado Solicitudes de Servicio Posteados
					</p>
				</div>
			)}
		</div>
	);
};
