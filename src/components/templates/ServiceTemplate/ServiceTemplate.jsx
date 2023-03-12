import { useRouter } from "next/router";
import { useSelector } from "react-redux";

import { MainContainer } from "../../structures/MainContainer/MainContainer";
import { ButtonContainer } from "../../structures/ButtonContainer/ButtonContainer";
import { PageCamaronLoader } from "@/common/loader/PageCamaronLoader/PageCamaronLoader";

import { MainTitle } from "../../atoms/MainTitle/MainTitle";
import { TitleProfile } from "../../atoms/profile/TitleProfile/TitleProfile";
import { InformationText } from "../../atoms/InformationText/InformationText";
import { PrimaryButton } from "../../atoms/buttons/PrimaryButton/PrimaryButton";
import { CardInfoBar } from "../../molecules/CardInfoBar/CardInfoBar";
import { ServiceCategories } from "../../molecules/ServiceCategories/ServiceCategories";
import { ButtonToContact } from "../../molecules/button/ButtonToContact/ButtonToContact";
import { BannerSection } from "../../organisms/BannerSection/BannerSection";
// import { MapGeolocation } from "../../organisms/MapGeolocation/MapGeolocation";

// import style from "./ServiceTemplate.module.css";

//----ShareContent
// import { ShareContent } from "../../organisms/ShareContent/ShareContent";
// import { useShare } from "../../../hooks/useShare";
// import { AiOutlineShareAlt } from "react-icons/ai"; //Icono para compartir

export const ServiceTemplate = ({
	isEdit,
	isLoading,
	data,
	functionToDispatchInfo,
	mail,
	location,
}) => {
	const router = useRouter();
	const { id } = router.query;
	const loggedUser = useSelector((state) => state.auth.user);

	const newData = {
		...data,
		user: `${loggedUser.id}`,
	};

	const handleNavigate = () => {
		router.push(`/servicio/editar/${id}`);
	};

	const handleNavigateToProfile = () => {
		router.push(`/perfil/${data?.user?.nickname}`);
	};

	// ---- Compartir contenido
	// const { isActive, onActive } = useShare();
	// console.log(isActive);

	return (
		<>
			<MainContainer>
				<TitleProfile title='Servicio' />

				{/* <ServiceBanner img={data?.frontPage} user={data?.user} /> */}

				{data?.media?.length > 0 && <BannerSection user={data?.user} data={newData} />}
				<br />

				<CardInfoBar user={data.user} handleNavigateToProfile={handleNavigateToProfile} />

				<MainTitle title={data?.title} />

				<ServiceCategories
					categories={newData.category?.categories}
					isEdit={isEdit}
					data={newData}
					functionToDispatch={functionToDispatchInfo}
				/>

				<InformationText title={data?.description} />

				{/* <MapGeolocation location={location} isEdit={isEdit} data={newData} /> */}

				{data.user?.nickname == loggedUser?.nickname ? (
					<ButtonContainer>
						<PrimaryButton title={"Editar servicio"} onClick={handleNavigate} />
					</ButtonContainer>
				) : (
					// <div className={style.buttonContactContainer}>
					// 	{/* <div className={style.shareButton} onClick={() => onActive()}> */}
					// 	<div className={style.shareButton} onClick={() => console.log("En desarrollo")}>
					// 		{/* ---- Icono de compartir ---- */}
					// 		{/* <AiOutlineShareAlt size={"25px"} /> */}
					// 	</div>
					// </div>
					<ButtonContainer>
						<ButtonToContact data={data.contact} mail={mail} camaron={data.user?.id} />
					</ButtonContainer>
				)}
			</MainContainer>

			{/* Componente para compartir */}
			{/* {isActive ? <ShareContent onActive={onActive} /> : null} */}
			{isLoading && <PageCamaronLoader />}
		</>
	);
};
