import { MenuButtonContact } from "../../../atoms/menu/MenuButtonContact/MenuButtonContact";
import { MenuTitle } from "../../../atoms/menu/MenuTitle/MenuTitle";

export const AddContact = ({
	statusMenuContact,
	statusMenuEditContact,
	setNameSocial,
	closeMenuFunction,
}) => {
	return (
		<>
			<MenuTitle
				title={"Selecciona el tipo de contacto"}
				onClick={closeMenuFunction}
			/>

			<MenuButtonContact
				titleButton={"Whats App"}
				statusMenuContact={statusMenuContact}
				statusMenuEditContact={statusMenuEditContact}
				setNameSocial={setNameSocial}
				nameData='whatsapp'
			/>
			<MenuButtonContact
				titleButton={"Facebook"}
				statusMenuContact={statusMenuContact}
				statusMenuEditContact={statusMenuEditContact}
				setNameSocial={setNameSocial}
				nameData='facebook'
			/>
			<MenuButtonContact
				titleButton={"Instagram"}
				statusMenuContact={statusMenuContact}
				statusMenuEditContact={statusMenuEditContact}
				setNameSocial={setNameSocial}
				nameData='instagram'
			/>
			<MenuButtonContact
				titleButton={"Linkedin"}
				statusMenuContact={statusMenuContact}
				statusMenuEditContact={statusMenuEditContact}
				setNameSocial={setNameSocial}
				nameData='linkedin'
			/>
			<MenuButtonContact
				titleButton={"Telefono"}
				statusMenuContact={statusMenuContact}
				statusMenuEditContact={statusMenuEditContact}
				setNameSocial={setNameSocial}
				nameData='phone'
			/>
			<MenuButtonContact
				titleButton={"Correo"}
				statusMenuContact={statusMenuContact}
				statusMenuEditContact={statusMenuEditContact}
				setNameSocial={setNameSocial}
				nameData='email'
			/>
		</>
	);
};
