import { useState } from "react";
import { editService } from "../../../../../store/slices/services/thunks";
import { SectionProfileContainer } from "../../../atoms/profile/SectionProfileContainer/SectionProfileContainer";
import { TitleProfile } from "../../../atoms/profile/TitleProfile/TitleProfile";
import { SaveInfoProfile } from "../../../molecules/menu/SaveInfoProfile/SaveInfoProfile";
import { InfoProfile } from "../../../molecules/profile/InfoProfile/InfoProfile";
import { MainTitle } from "../../../atoms/MainTitle/MainTitle";
import { DisplayMenu } from "../../menu/DisplayMenu/DisplayMenu";

export const DescriptionService = ({ title, titleSection, description, data, isEdit, functionToDispatch }) => {
	const [statusMenuDescription, setStatusMenuDescription] = useState(false);

	const [dataEdit, setDataEdit] = useState({
		title: "",
		name: "",
	});

	const handleStatusMenuEditDescription = () => {
		setStatusMenuDescription(!statusMenuDescription);
	};

	return (
		<>
			<SectionProfileContainer>
				<MainTitle
					title={title}
					isEdit={isEdit}
					editFunction={handleStatusMenuEditDescription}
					setDataEdit={setDataEdit}
					dataName={"title"}
					dataTitle={"titulo del servicio"}
				/>
				<InfoProfile
					title={description ? description : "Esta es su descripcion"}
					isEdit={isEdit}
					editFunction={handleStatusMenuEditDescription}
					setDataEdit={setDataEdit}
					dataName={"description"}
					dataTitle={"descripcion del servicio"}
				/>
			</SectionProfileContainer>

			{/* Menu edit */}
			{statusMenuDescription && (
				<DisplayMenu
					menu={
						<SaveInfoProfile
							data={data}
							dataEdit={dataEdit}
							functionToDispatch={functionToDispatch}
							closeMenuFunction={handleStatusMenuEditDescription}
						/>
					}
					closeMenuFunction={handleStatusMenuEditDescription}
				/>
			)}
		</>
	);
};
