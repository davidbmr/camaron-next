import { MainContainer } from "../../structures/MainContainer/MainContainer";
import { ButtonContainer } from "../../structures/ButtonContainer/ButtonContainer";

import { DateField } from "../../atoms/DateField/DateField";
import { TitleProfile } from "../../atoms/profile/TitleProfile/TitleProfile";
import { PrimaryButton } from "../../atoms/buttons/PrimaryButton/PrimaryButton";
import { ServiceCategories } from "../../molecules/ServiceCategories/ServiceCategories";
import { InformationFieldArea } from "../../molecules/InfomationFieldArea/InformationFieldArea";
import { MapGeolocation } from "../../organisms/MapGeolocation/MapGeolocation";

export const CreateRequestServiceTemplate = ({
	titleSection,
	isEdit,
	isLoading,
	data,
	setNewData,
	functionToDispatch,
	mail,
	location,
	msgError,
}) => {
	return (
		<MainContainer>
			<TitleProfile title={titleSection} />
			<InformationFieldArea
				title={data?.title}
				data={data}
				dataProperty='title'
				setNewData={setNewData}
				placeholder='Agrega un título'
				isEdit={isEdit}
			/>
			<DateField
				title={data.date}
				data={data}
				dataProperty='date'
				setNewData={setNewData}
				isEdit={isEdit}
			/>
			<ServiceCategories
				categories={data.category?.categories}
				isEdit={isEdit}
				data={data}
				setNewData={setNewData}
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
				<PrimaryButton title='Publicar solicitud' onClick={functionToDispatch} />
			</ButtonContainer>

			{msgError && <p className='textErrorMsg'>{msgError}</p>}
		</MainContainer>
	);
};
