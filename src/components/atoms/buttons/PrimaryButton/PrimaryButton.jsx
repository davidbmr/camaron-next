import style from "./PrimaryButton.module.css";

export const PrimaryButton = ({ title, onClick, cssClass }) => {
	return (
		<>
			<button
				className={`${style.btn} ${style[cssClass]} `}
				onClick={onClick}
			>
				{title}
			</button>
		</>
	);
};

PrimaryButton.defaultProps = {
  cssClass: 'primaryButton'
}

