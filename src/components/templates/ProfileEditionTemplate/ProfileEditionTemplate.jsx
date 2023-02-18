import { MainContainer } from "../../structures/MainContainer/MainContainer";
import { ButtonContainer } from "../../structures/ButtonContainer/ButtonContainer";

import { ProfileImg } from "../../atoms/profile/ProfileImg/ProfileImg";
import { TitleProfile } from "../../atoms/profile/TitleProfile/TitleProfile";
import { PrimaryButton } from "../../atoms/buttons/PrimaryButton/PrimaryButton";
import { InformationField } from "../../molecules/InfomationField/InformationField";
import { ContactProfileAdd } from "../../molecules/ContactProfileAdd/ContactProfileAdd";
import { InformationFieldArea } from "../../molecules/InfomationFieldArea/InformationFieldArea";
import { CreateBanner } from "../../organisms/CreateBanner/CreateBanner";
import { MapGeolocation } from "../../organisms/MapGeolocation/MapGeolocation";
import { ServicesProfile } from "../../organisms/profile/ServicesProfile/ServicesProfile";
import { RequestServicesProfile } from "../../organisms/profile/RequestServicesProfile/RequestServicesProfile";

export const ProfileEditionTemplate = ({
	titleSection,
	isEdit,
	data,
	setNewData,
	functionToDispatch,
	handleNavigateEdit,
}) => {
	return (
		<MainContainer>
			<TitleProfile title={titleSection} />
			<CreateBanner data={data} setNewData={setNewData} />
			<ProfileImg img={data?.profilePic} isEdit={isEdit} setNewData={setNewData} />
			<InformationField
				title={data?.username}
				data={data}
				dataProperty='username'
				setNewData={setNewData}
				placeholder='Agrega un nombre'
			/>
			<InformationFieldArea
				title={data?.description}
				data={data}
				dataProperty='description'
				setNewData={setNewData}
				placeholder='Agrega una descripción'
				isEdit={isEdit}
			/>
			<MapGeolocation
				location={data?.location}
				isEdit={isEdit}
				data={data}
				setNewData={setNewData}
			/>
			<ContactProfileAdd data={data} setNewData={setNewData} isEdit={isEdit} />
			<ServicesProfile services={data?.services} isEdit={isEdit} />
			<RequestServicesProfile requestServices={data?.searches} isEdit={isEdit} />
			<ButtonContainer>
				<PrimaryButton title='Guardar' onClick={functionToDispatch} />
			</ButtonContainer>
		</MainContainer>
	);
};
