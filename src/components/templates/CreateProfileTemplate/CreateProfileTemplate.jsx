import { MainContainer } from "../../structures/MainContainer/MainContainer";
import { ButtonContainer } from "../../structures/ButtonContainer/ButtonContainer";

import { ProfileImg } from "../../atoms/profile/ProfileImg/ProfileImg";
import { TitleProfile } from "../../atoms/profile/TitleProfile/TitleProfile";
import { PrimaryButton } from "../../atoms/buttons/PrimaryButton/PrimaryButton";
import { InformationField } from "../../molecules/InfomationField/InformationField";
import { InformationFieldArea } from "../../molecules/InfomationFieldArea/InformationFieldArea";
import { CreateBanner } from "../../organisms/CreateBanner/CreateBanner";
import { MapGeolocation } from "../../organisms/MapGeolocation/MapGeolocation";

export const CreateProfileTemplate = ({
	titleSection,
	isEdit,
	data,
	setNewData,
	functionToDispatch,
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
			<InformationField
				title={data?.nickname}
				data={data}
				dataProperty='nickname'
				setNewData={setNewData}
				placeholder='Agrega un nickname'
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
			<ButtonContainer>
				<PrimaryButton title='Crear' onClick={functionToDispatch} />
			</ButtonContainer>
		</MainContainer>
	);
};
