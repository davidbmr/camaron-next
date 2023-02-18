import { AddButton } from "../../atoms/buttons/AddButton/AddButton";
// import { FooterMenuText } from "../../atoms/FooterMenuText/FooterMenuText";
import { ProfileImage } from "../../atoms/images/ProfileImage/ProfileImage";

import style from "./FieldCreateFooter.module.css";

export const FieldCreateFooter = ({ text, img, add, onClick, nickname }) => {
	return (
		<div>
			{img && (
				<div className={style.fieldCreateFooterContainer} onClick={() => onClick(nickname)}>
					<div className={style.fieldCreateImgContainer}>
						<ProfileImage img={img} />
					</div>
					{/* <FooterMenuText text={text} /> */}
					<p className={style.fieldCreateFooterText}>{text}</p>
				</div>
			)}

			{add && (
				<div className={style.fieldCreateFooterContainer} onClick={onClick}>
					<div className={style.fieldCreateButton}>
						<AddButton />
					</div>
					<p className={style.fieldCreateFooterText}>{text}</p>
					{/* <FooterMenuText text={text} /> */}
				</div>
			)}
		</div>
	);
};
