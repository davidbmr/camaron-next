// import { useState } from "react";
// import { useSelector } from "react-redux";

// import { SectionProfileContainer } from "../../atoms/profile/SectionProfileContainer/SectionProfileContainer";
// import { TitleProfile } from "../../atoms/profile/TitleProfile/TitleProfile";
// import { InfoProfile } from "../profile/InfoProfile/InfoProfile";
// import { InfoProfileAdd } from "../profile/InfoProfileAdd/InfoProfileAdd";

// import { DisplayMenu } from "../../organisms/menu/DisplayMenu/DisplayMenu";
// import { AddContact } from "../menu/AddContact/AddContact";
// import { SaveContact } from "../menu/SaveContact/SaveContact";

// import { BsWhatsapp, BsFacebook, BsInstagram, BsLinkedin, BsTelephone } from "react-icons/bs";
// import { HiOutlineMail } from "react-icons/hi";

// export const ContactProfile = () => {
// 	const [statusMenuContact, setStatusMenuContact] = useState(false);
// 	const [statusMenuEditContact, setStatusMenuEditContact] = useState(false);
// 	const [nameSocial, setNameSocial] = useState("");

// 	const data = useSelector((state) => state.dashboard.perfil);
// 	const { contact } = useSelector((state) => state.dashboard.perfil);

// 	const handleStatusMenuContact = () => {
// 		setStatusMenuContact(!statusMenuContact);
// 	};

// 	const handleStatusMenuEditContact = () => {
// 		setStatusMenuEditContact(!statusMenuEditContact);
// 	};
// 	return (
// 		<>
// 			<SectionProfileContainer>
// 				<TitleProfile title={"Links de contacto"} />
// 				{contact ? (
// 					<>
// 						{contact.whatsapp && <InfoProfile title={contact.whatsapp} icon={<BsWhatsapp />} />}
// 						{contact.facebook && <InfoProfile title={contact.facebook} icon={<BsFacebook />} />}
// 						{contact.instagram && <InfoProfile title={contact.instagram} icon={<BsInstagram />} />}
// 						{contact.linkedin && <InfoProfile title={contact.linkedin} icon={<BsLinkedin />} />}
// 						{contact.phone && <InfoProfile title={contact.phone} icon={<BsTelephone />} />}
// 						{contact.email && <InfoProfile title={contact.email} icon={<HiOutlineMail />} />}
// 					</>
// 				) : (
// 					<></>
// 				)}

// 				<InfoProfileAdd
// 					text={"Agregar o editar un canal de contacto"}
// 					onClickFunction={handleStatusMenuContact}
// 				/>
// 			</SectionProfileContainer>
// 		</>
// 	);
// };
