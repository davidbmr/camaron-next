import { TitleProfile } from "../../../atoms/profile/TitleProfile/TitleProfile";
import { SectionProfileContainer } from "../../../atoms/profile/SectionProfileContainer/SectionProfileContainer";
import { InfoProfileAdd } from "../../../molecules/profile/InfoProfileAdd/InfoProfileAdd";
import { InfoServiceProfile } from "../../../molecules/profile/InfoServiceProfile/InfoServiceProfile";
import { useRouter } from "next/router";

export const ServicesProfile = ({ services, isEdit }) => {
	const router = useRouter();

	const handleNavigateAddService = () => {
		router.push(`/crear/servicio`);
	};

	// ---- Redirect hacia los servicios
	const handleNavigate = (idService) => {
		router.push(`/servicio/${idService}`);
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
