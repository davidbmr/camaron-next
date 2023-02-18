import style from "./SectionProfileContainer.module.css";

export const SectionProfileContainer = ({ children }) => {
	return (
    <div className={style.sectionProfileContainer}>
      {children}
    </div>)
};
