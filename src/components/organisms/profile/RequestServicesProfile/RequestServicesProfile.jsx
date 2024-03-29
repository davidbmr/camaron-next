import { TitleProfile } from "../../../atoms/profile/TitleProfile/TitleProfile";
import { SectionProfileContainer } from "../../../atoms/profile/SectionProfileContainer/SectionProfileContainer";
import { InfoProfileAdd } from "../../../molecules/profile/InfoProfileAdd/InfoProfileAdd";
import { ProfileRequestService } from "../../../molecules/profile/ProfileRequestService/ProfileRequestService";
import { useRouter } from "next/router";

export const RequestServicesProfile = ({ requestServices, isEdit }) => {
	const router = useRouter();

	const handleNavigateAddRequestService = () => {
		router.push(`/crear/solicitud/servicio`);
	};

	// ---- Redirect hacia las solicitudes de servicios
	const handleNavigate = (idService) => {
		router.push(`/solicitud/servicio/${idService}`);
	};

	return (
		<SectionProfileContainer>
			<TitleProfile title={"Solicitudes"} />

			{requestServices &&
				requestServices.map((requestService) => (
					<ProfileRequestService
						key={requestService.id}
						id={requestService.id}
						title={requestService.title}
						handleNavigate={handleNavigate}
					/>
				))}

			{!requestServices && !isEdit && (
				<p className='noServicesText'>No hay solicitudes publicados</p>
			)}

			{isEdit && (
				<InfoProfileAdd
					text={"Agregar una solicitud de servicio"}
					onClickFunction={handleNavigateAddRequestService}
				/>
			)}
		</SectionProfileContainer>
	);
};
