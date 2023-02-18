// import CharacterOne from "../../../../../assets/svg/character-one.svg";
import { useRedirection } from "../../../../hooks/useRedirection";
import { PrimaryButton } from "../../../atoms/buttons/PrimaryButton/PrimaryButton";

import style from "./NewServiceCard.module.css";

export const NewServiceCard = ({ type }) => {
	const { redirectService, redirectRequestService } = useRedirection();

	return (
		<div className={style.containerServiceCard}>
			{/* <div className={style.serviceCard__title}>
				<p className={style.serviceCard__title__text}>asd</p>
			</div> */}
			<div>
				{/* <img src={CharacterOne} alt='Personaje de camaron' /> */}
			</div>

			{type === "servicio" && (
				<>
					<div>
						<p>¿No encontraste lo que buscabas?</p>
					</div>

					<PrimaryButton
						title='Publicar Solicitud'
						cssClass='tertiaryButton'
						onClick={redirectRequestService}
					/>
				</>
			)}

			{type === "solicitud" && (
				<>
					<p>¿No encontraste lo que buscabas?</p>

					<PrimaryButton
						title='Publicar Servicio'
						cssClass='tertiaryButton'
						onClick={redirectService}
					/>
				</>
			)}

			{type === "search" && (
				<>
					<p>¿No encontraste lo que buscabas?</p>

					<div>
						<PrimaryButton
							title='Publicar Servicio'
							cssClass='tertiaryButton'
							onClick={redirectService}
						/>

						<p>ó</p>

						<PrimaryButton
							title='Publicar Solicitud'
							cssClass='tertiaryButton'
							onClick={redirectRequestService}
						/>
					</div>
				</>
			)}
		</div>
	);
};
