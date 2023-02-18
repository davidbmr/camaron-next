import { useEdit } from "../../../hooks/useEdit";
import { EditStructure } from "../../structures/EditStructure/EditStructure";
import { CarouselCovers } from "../CarouselCovers/CarouselCovers";
import { CreateBanner } from "../CreateBanner/CreateBanner";

import style from './BannerSection.module.css'

export const BannerSection = ({ isEdit, data, setNewData, functionToDispatch }) => {
	const { isEditActive, handleIsEditActive } = useEdit();

	return (
		<div className={style.bannerSectionContainer}>
			{!isEditActive ? (
				data?.media?.length > 0 ? (
					<CarouselCovers media={data?.media} />
				) : (
					<CreateBanner data={data} setNewData={setNewData} />
				)
			) : (
				<CreateBanner data={data} setNewData={setNewData} canUpload={true} />
			)}
		</div>
	);
};
