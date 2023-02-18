import { useNavigate } from "react-router-dom";

import { TitleProfile } from "../../../atoms/profile/TitleProfile/TitleProfile";
import { SectionProfileContainer } from "../../../atoms/profile/SectionProfileContainer/SectionProfileContainer";
import { InfoProfileAdd } from "../../../molecules/profile/InfoProfileAdd/InfoProfileAdd";
import { InfoServiceProfile } from "../../../molecules/profile/InfoServiceProfile/InfoServiceProfile";

export const ServicesProfile = ({ services, isEdit }) => {
	const navigate = useNavigate();

	const handleNavigateAddService = () => {
		navigate(`/crear/servicio`);
	};

	// ---- Redirect hacia los servicios
	const handleNavigate = (idService) => {
		navigate(`/servicio/${idService}`);
	};

	return (
		<SectionProfileContainer>
			<TitleProfile title={"Servicios"} />

			{services &&
				services.map((service) => (
					<InfoServiceProfile
						key={service.id}
						id={service.id}
						title={service.title}
						img={service.frontPage}
						handleNavigate={handleNavigate}
					/>
				))}

			{!services && !isEdit && <p className='noServicesText'>No hay servicios publicados</p>}

			{isEdit && (
				<InfoProfileAdd
					text={"Agregar un nuevo servicio"}
					onClickFunction={handleNavigateAddService}
				/>
			)}
		</SectionProfileContainer>
	);
};
