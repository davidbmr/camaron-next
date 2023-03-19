import { MainContainer } from "../../structures/MainContainer/MainContainer";
import { ButtonContainer } from "../../structures/ButtonContainer/ButtonContainer";

import { TitleProfile } from "../../atoms/profile/TitleProfile/TitleProfile";
import { PrimaryButton } from "../../atoms/buttons/PrimaryButton/PrimaryButton";
import { InformationField } from "../../molecules/InfomationField/InformationField";
import { ServiceCategories } from "../../molecules/ServiceCategories/ServiceCategories";
import { InformationFieldArea } from "../../molecules/InfomationFieldArea/InformationFieldArea";
// import { MapGeolocation } from "../../organisms/MapGeolocation/MapGeolocation";
import { CreateBanner } from "../../organisms/CreateBanner/CreateBanner";

export const CreateServiceTemplate = ({
	titleSection,
	isEdit,
	data,
	setNewData,
	functionToDispatch,
	msgError,
}) => {
	return (
		<>
			<MainContainer>
				<TitleProfile title={titleSection} />
				<CreateBanner data={data} setNewData={setNewData} />
				<InformationField
					title={data?.title}
					data={data}
					dataProperty='title'
					setNewData={setNewData}
					placeholder='Agrega un título'
					isEdit={isEdit}
				/>
				<ServiceCategories
					categories={data?.category?.categories}
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
				{/* <MapGeolocation location={location} isEdit={isEdit} data={data} setNewData={setNewData} /> */}
				<ButtonContainer>
					<PrimaryButton title='Publicar Servicio' onClick={functionToDispatch} />
				</ButtonContainer>
				{msgError && <p className='textErrorMsg'>{msgError}</p>}
			</MainContainer>
		</>
	);
};
