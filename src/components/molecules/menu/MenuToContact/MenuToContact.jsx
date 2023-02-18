import { useState } from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate, useParams } from "react-router-dom";
import { sendMailContact } from "../../../../../store/slices/services/thunks";
import { MenuButtonToContact } from "../../../atoms/menu/MenuButtonToContact/MenuButtonToContact";
import { MenuTitle } from "../../../atoms/menu/MenuTitle/MenuTitle";
import style from "./MenuToContact.module.css";

import { BsWhatsapp, BsFacebook, BsInstagram, BsLinkedin, BsTelephone } from "react-icons/bs";
import { HiOutlineMail } from "react-icons/hi";

export const MenuToContact = ({ data, closeMenuFunction, mail, camaron }) => {
	const dispatch = useDispatch();
	const { user } = useSelector((state) => state.auth);

	const { id } = useParams();
	const usuario = useSelector((state) => state.auth.user);
	const token = usuario.token;

	let mailContactData = {
		service: id, //Id del servicio
		user: usuario.id, //Id del usuario
		camaron: camaron, //Dueño del servicio
		mail: mail,
	};

	console.log(data.phone);

	const handleSendMailOfContact = () => {
		dispatch(sendMailContact(mailContactData, token));
		closeMenuFunction();
	};

	return (
		<>
			<MenuTitle title={"Medios de contacto"} onClick={closeMenuFunction} />

			<div className={style.contactButtonIconContainer}>
				{data?.phone && (
					<div className={style.contactButtonIcon} onClick={handleSendMailOfContact}>
						<a href={`tel:+${data.phone}`} target='_blank'>
							<BsTelephone />
						</a>
					</div>
				)}

				{data?.whatsapp && (
					<div className={style.contactButtonIcon} onClick={handleSendMailOfContact}>
						<a
							href={`https://api.whatsapp.com/send?phone=${data.whatsapp}&text=%F0%9F%91%8B%20Hola%2C%20mi%20nombre%20es%20*${user.username}*`}
							target='_blank'
						>
							<BsWhatsapp />
						</a>
					</div>
				)}

				{data?.email && (
					<div className={style.contactButtonIcon} onClick={handleSendMailOfContact}>
						<a href={`mailto:${data.email}`} target='_blank'>
							<HiOutlineMail />
						</a>
					</div>
				)}

				{data?.facebook && (
					<div className={style.contactButtonIcon} onClick={handleSendMailOfContact}>
						<a href={`https://www.facebook.com/${data.facebook}`} target='_blank'>
							<BsFacebook />
						</a>
					</div>
				)}

				{data?.instagram && (
					<div className={style.contactButtonIcon} onClick={handleSendMailOfContact}>
						<a href={`https://www.instagram.com/${data.instagram}`} target='_blank'>
							<BsInstagram />
						</a>
					</div>
				)}

				{data?.linkedin && (
					<div className={style.contactButtonIcon} onClick={handleSendMailOfContact}>
						<a href={`https://www.linkedin.com/in/${data.linkedin}`} target='_blank'>
							<BsLinkedin />
						</a>
					</div>
				)}
			</div>
		</>
	);
};
