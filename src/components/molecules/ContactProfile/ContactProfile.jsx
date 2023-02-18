import { TitleProfile } from "../../atoms/profile/TitleProfile/TitleProfile";

import { BsWhatsapp, BsFacebook, BsInstagram, BsLinkedin, BsTelephone } from "react-icons/bs";
import { HiOutlineMail } from "react-icons/hi";
import { ContactIcon } from "../../atoms/ContactIcon/ContactIcon";

import style from "./ContactProfile.module.css";
import { useEffect, useState } from "react";

export const ContactProfile = ({ data }) => {
	//Telefono --
	//whatsapp --
	//Email --
	//Messenger --
	//Instagram --
	//Linkedin --
	//Telegram
	//Correo
	//Pagina
	const [isThereContact, setIsThereContact] = useState(false);
	useEffect(() => {
		if (data?.contact?.phone) {
			setIsThereContact(true);
			return;
		}
		if (data?.contact?.whatsapp) {
			setIsThereContact(true);
			return;
		}
		if (data?.contact?.email) {
			setIsThereContact(true);
			return;
		}
		if (data?.contact?.facebook) {
			setIsThereContact(true);
			return;
		}
		if (data?.contact?.instagram) {
			setIsThereContact(true);
			return;
		}
		if (data?.contact?.linkedin) {
			setIsThereContact(true);
			return;
		}
		setIsThereContact(false);
	}, [data]);

	return (
		<>
			{isThereContact && <TitleProfile title={"Links de contacto"} />}

			<div className={style.contactContainer}>
				{data?.contact?.phone && <ContactIcon icon={<BsTelephone />} />}
				{data?.contact?.whatsapp && <ContactIcon icon={<BsWhatsapp />} />}
				{data?.contact?.email && <ContactIcon icon={<HiOutlineMail />} />}
				{data?.contact?.facebook && <ContactIcon icon={<BsFacebook />} />}
				{data?.contact?.instagram && <ContactIcon icon={<BsInstagram />} />}
				{data?.contact?.linkedin && <ContactIcon icon={<BsLinkedin />} />}
			</div>
		</>
	);
};
