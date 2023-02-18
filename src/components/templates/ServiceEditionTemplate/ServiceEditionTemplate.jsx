import { TitleProfile } from "../../atoms/profile/TitleProfile/TitleProfile";

import { MainContainer } from "../../structures/MainContainer/MainContainer";
import { ButtonContainer } from "../../structures/ButtonContainer/ButtonContainer";

import { InformationField } from "../../molecules/InfomationField/InformationField";
import { ServiceCategories } from "../../molecules/ServiceCategories/ServiceCategories";
import { InformationFieldArea } from "../../molecules/InfomationFieldArea/InformationFieldArea";
import { OwnerServiceButtons } from "../../molecules/service/OwnerServiceButtons/OwnerServiceButtons";
import { CreateBanner } from "../../organisms/CreateBanner/CreateBanner";
import { MapGeolocation } from "../../organisms/MapGeolocation/MapGeolocation";

export const ServiceEditionTemplate = ({
	titleSection,
	isEdit,
	data,
	setNewData,
	functionToDispatch,
	functionToDelete,
	msgError,
}) => {
	return (
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

			<MapGeolocation
				location={data?.location}
				isEdit={isEdit}
				data={data}
				setNewData={setNewData}
			/>

			<ButtonContainer>
				<OwnerServiceButtons
					functionToDispatch={functionToDispatch}
					functionToDelete={functionToDelete}
					titleNavigate={"Guardar y ver"}
				/>
			</ButtonContainer>

			{msgError && <p className='textErrorMsg'>{msgError}</p>}
		</MainContainer>
	);
};
