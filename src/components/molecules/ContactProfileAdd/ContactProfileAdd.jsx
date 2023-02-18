import { useState, useEffect } from "react";

import { ContactField } from "../ContactField/ContactField";
import { InfoProfileAdd } from "../profile/InfoProfileAdd/InfoProfileAdd";
import { TitleProfile } from "../../atoms/profile/TitleProfile/TitleProfile";

import { formatContactData } from "../../../helpers/formatContactData";

import { BsWhatsapp, BsFacebook, BsInstagram, BsLinkedin, BsTelephone } from "react-icons/bs";
import { HiOutlineMail } from "react-icons/hi";

import style from "./ContactProfileAdd.module.css";

export const ContactProfileAdd = ({ data, setNewData, isEdit }) => {
	const [currentContact, setCurrentContact] = useState([]);

	// ---- Estado para mostrar el menu de iconos de contacto
	const [isActiveSelect, setIsActiveSelect] = useState(false);

	// ---- Rellenando la lista de contactos para mostrar
	useEffect(() => {
		if (data?.contact && currentContact.length === 0) {
			let dataContact = data.contact;
			let arrContact = formatContactData(dataContact);
			setCurrentContact(arrContact);
		}
	}, [data]);

	return (
		<>
			<TitleProfile title={"Links de contacto"} />

			<div className={style.listContactContainer}>
				{data?.contact?.email || currentContact.includes("email") ? (
					<ContactField
						icon={<HiOutlineMail />}
						data={data}
						setNewData={setNewData}
						dataProperty='email'
						placeholder='Agrega tu correo'
					/>
				) : null}

				{data?.contact?.phone || currentContact.includes("phone") ? (
					<ContactField
						icon={<BsTelephone />}
						data={data}
						setNewData={setNewData}
						dataProperty='phone'
						placeholder='Agrega tu numero de telefono'
					/>
				) : null}

				{data?.contact?.whatsapp || currentContact.includes("whatsapp") ? (
					<ContactField
						icon={<BsWhatsapp />}
						data={data}
						setNewData={setNewData}
						dataProperty='whatsapp'
						placeholder='Agrega tu numero de whatsapp'
					/>
				) : null}

				{data?.contact?.facebook || currentContact.includes("facebook") ? (
					<ContactField
						icon={<BsFacebook />}
						data={data}
						setNewData={setNewData}
						dataProperty='facebook'
						placeholder='Agrega tu usuario de facebook'
					/>
				) : null}

				{data?.contact?.instagram || currentContact.includes("instagram") ? (
					<ContactField
						icon={<BsInstagram />}
						data={data}
						setNewData={setNewData}
						dataProperty='instagram'
						placeholder='Agrega tu usuario de instagram'
					/>
				) : null}

				{data?.contact?.linkedin || currentContact.includes("linkedin") ? (
					<ContactField
						icon={<BsLinkedin />}
						data={data}
						setNewData={setNewData}
						dataProperty='linkedin'
						placeholder='Agrega tu usuario de linkedin'
					/>
				) : null}
			</div>

			{isEdit && (
				<div className={style.addContactContainer}>
					<InfoProfileAdd
						text={"Crear vinculo de contacto"}
						onClickFunction={() => setIsActiveSelect(!isActiveSelect)}
					/>

					{isActiveSelect && (
						<div className={style.addListContact}>
							<div
								onClick={() => {
									if (!currentContact.includes("phone")) {
										setCurrentContact((current) => [...current, "phone"]);
									}
									setIsActiveSelect(false);
								}}
							>
								<BsTelephone />
							</div>

							<div
								onClick={() => {
									if (!currentContact.includes("whatsapp")) {
										setCurrentContact((current) => [...current, "whatsapp"]);
									}
									setIsActiveSelect(false);
								}}
							>
								<BsWhatsapp />
							</div>

							<div
								onClick={() => {
									if (!currentContact.includes("email")) {
										setCurrentContact((current) => [...current, "email"]);
									}
									setIsActiveSelect(false);
								}}
							>
								<HiOutlineMail />
							</div>

							<div
								onClick={() => {
									if (!currentContact.includes("facebook")) {
										setCurrentContact((current) => [...current, "facebook"]);
									}
									setIsActiveSelect(false);
								}}
							>
								<BsFacebook />
							</div>

							<div
								onClick={() => {
									if (!currentContact.includes("instagram")) {
										setCurrentContact((current) => [...current, "instagram"]);
									}
									setIsActiveSelect(false);
								}}
							>
								<BsInstagram />
							</div>

							<div
								onClick={() => {
									if (!currentContact.includes("linkedin")) {
										setCurrentContact((current) => [...current, "linkedin"]);
									}
									setIsActiveSelect(false);
								}}
							>
								<BsLinkedin />
							</div>
						</div>
					)}
				</div>
			)}
		</>
	);
};
