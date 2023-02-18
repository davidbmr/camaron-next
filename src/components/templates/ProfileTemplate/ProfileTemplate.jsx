import { useSelector } from "react-redux";

import { MainContainer } from "../../structures/MainContainer/MainContainer";
import { ButtonContainer } from "../../structures/ButtonContainer/ButtonContainer";
import { PageCamaronLoader } from "../../../../common/loader/PageCamaronLoader/PageCamaronLoader";

import { MainTitle } from "../../atoms/MainTitle/MainTitle";
import { ProfileImg } from "../../atoms/profile/ProfileImg/ProfileImg";
import { TitleProfile } from "../../atoms/profile/TitleProfile/TitleProfile";
import { InformationText } from "../../atoms/InformationText/InformationText";
import { PrimaryButton } from "../../atoms/buttons/PrimaryButton/PrimaryButton";
import { ContactProfile } from "../../molecules/ContactProfile/ContactProfile";
import { ButtonToContact } from "../../molecules/button/ButtonToContact/ButtonToContact";
import { CarouselCovers } from "../../organisms/CarouselCovers/CarouselCovers";
import { MapGeolocation } from "../../organisms/MapGeolocation/MapGeolocation";
import { ServicesProfile } from "../../organisms/profile/ServicesProfile/ServicesProfile";
import { RequestServicesProfile } from "../../organisms/profile/RequestServicesProfile/RequestServicesProfile";

export const ProfileTemplate = ({
	titleSection,
	data,
	handleNavigateEdit,
	isEdit,
	isOwnProfile,
}) => {
	const loggedUser = useSelector((state) => state.auth.user);
	const { isLoading } = useSelector((state) => state.dashboard);
	return (
		<>
			<MainContainer>
				<TitleProfile title={titleSection} />

				{data?.media?.length > 0 && <CarouselCovers media={data?.media} />}
				<br />

				<ProfileImg img={data?.profilePic} />
				<MainTitle title={data?.username} />

				{data?.description && <InformationText title={data?.description} />}

				<MapGeolocation location={data?.location} isEdit={isEdit} data={data} />
				<ContactProfile data={data} />
				<ServicesProfile services={data?.services} />
				<RequestServicesProfile requestServices={data?.searches} />

				{data.nickname == loggedUser?.nickname ? (
					<ButtonContainer>
						<PrimaryButton title={"Editar perfil"} onClick={handleNavigateEdit} />
					</ButtonContainer>
				) : (
					<ButtonContainer>
						<ButtonToContact data={data.contact} mail={"mail"} camaron={data.id} />
					</ButtonContainer>
				)}
			</MainContainer>
			{isLoading && <PageCamaronLoader />}
		</>
	);
};
