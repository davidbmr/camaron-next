import { useState, useEffect } from "react";
import { useSelector } from "react-redux";

import { formatRequestService } from "@/helpers/getCurrentDate";
import { MainContainer } from "../../structures/MainContainer/MainContainer";
import { ButtonContainer } from "../../structures/ButtonContainer/ButtonContainer";
import { PageCamaronLoader } from "@/common/loader/PageCamaronLoader/PageCamaronLoader";

import { TitleProfile } from "../../atoms/profile/TitleProfile/TitleProfile";
import { InformationText } from "../../atoms/InformationText/InformationText";
import { PrimaryButton } from "../../atoms/buttons/PrimaryButton/PrimaryButton";
import { CardInfoBar } from "../../molecules/CardInfoBar/CardInfoBar";
import { ServiceCategories } from "../../molecules/ServiceCategories/ServiceCategories";
import { ButtonToContact } from "../../molecules/button/ButtonToContact/ButtonToContact";
// import { MapGeolocation } from "../../organisms/MapGeolocation/MapGeolocation";
import { RequestTitleCover } from "../../organisms/RequestTitleCover/RequestTitleCover";
import { useRouter } from "next/router";

export const RequestServiceTemplate = ({
	isEdit,
	isLoading,
	data,
	titleSection,
	functionToDispatchInfo,
	mail,
	location,
}) => {
	const router = useRouter();
	const { id } = router.query;
	const loggedUser = useSelector((state) => state.auth.user);
	const [limitDate, setLimitDate] = useState("");

	useEffect(() => {
		if (data?.date) {
			const newDate = formatRequestService(data.date);
			setLimitDate(newDate);
		}
		if (!data?.date) {
			setLimitDate("No hay fecha limite");
		}
	}, [data]);

	const newData = {
		...data,
		user: `${loggedUser.id}`,
	};

	const handleNavigate = () => {
		router.push(`/solicitud/servicio/editar/${id}`);
	};

	const handleNavigateToProfile = () => {
		router.push(`/perfil/${data?.user?.nickname}`);
	};

	return (
		<>
			<MainContainer>
				<TitleProfile title={titleSection} />
				<RequestTitleCover title={data.title} />
				<CardInfoBar user={data.user} handleNavigateToProfile={handleNavigateToProfile} />
				<InformationText title={limitDate} />
				<ServiceCategories
					categories={newData.category?.categories}
					isEdit={isEdit}
					data={newData}
					functionToDispatch={functionToDispatchInfo}
				/>
				<InformationText title={data.description} />
				{/* <MapGeolocation
					location={location}
					isEdit={isEdit}
					data={newData}
					functionToDispatch={functionToDispatchInfo}
				/> */}
				{data.user?.nickname == loggedUser?.nickname ? (
					<ButtonContainer>
						<PrimaryButton title={"Editar solicitud"} onClick={handleNavigate} />
					</ButtonContainer>
				) : (
					<ButtonContainer>
						<ButtonToContact data={data.contact} mail={mail} camaron={data.user?.id} />
					</ButtonContainer>
				)}
			</MainContainer>

			{isLoading && <PageCamaronLoader />}
		</>
	);
};
