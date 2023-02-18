import { ModalStructure } from "../../structures/ModalStructure/ModalStructure";

import { BiCopy } from "react-icons/bi";
import { SiGmail } from "react-icons/si";
import { FaFacebookF, FaLinkedinIn, FaWhatsapp } from "react-icons/fa";

import {
	FacebookShareButton,
	LinkedinShareButton,
	WhatsappShareButton,
	EmailShareButton,
} from "react-share";

import style from "./ShareContent.module.css";

export const ShareContent = ({ url = "https://app.soycamaron.com", onActive }) => {
	// const currentUrl = window.location.href;

	return (
		<ModalStructure onActive={onActive}>
			<div className={style.shareContainer}>
				<p className={style.shareUrl}>{url}</p>
				<div className={style.mainButtonContainer}>
					<button className={style.mainButton} onClick={() => navigator.clipboard.writeText(url)}>
						<span>
							<BiCopy size={"15px"} />
						</span>
						Copiar
					</button>
					<button className={style.mainButton}>
						<span>
							<FaFacebookF size={"15px"} />
						</span>
						Facebook
					</button>
				</div>
				<div className={style.socialButtonContainer}>
					<div className={style.socialButton}>
						<FacebookShareButton url={url}>
							<FaFacebookF size={"25px"} />
						</FacebookShareButton>
					</div>
					<div className={style.socialButton}>
						<LinkedinShareButton url={url}>
							<FaLinkedinIn size={"25px"} />
						</LinkedinShareButton>
					</div>
					<div className={style.socialButton}>
						<WhatsappShareButton url={url}>
							<FaWhatsapp size={"25px"} />
						</WhatsappShareButton>
					</div>
					<div className={style.socialButton}>
						<EmailShareButton url={url}>
							<SiGmail size={"25px"} />
						</EmailShareButton>
					</div>
				</div>
			</div>
		</ModalStructure>
	);
};
