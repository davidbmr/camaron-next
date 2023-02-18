import React from "react";

export const Points = (props) => {
	return (
		<svg
			width={6}
			height={27}
			fill='none'
			xmlns='http://www.w3.org/2000/svg'
			{...props}
		>
			<path
				d='M3 6.387a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM3 16.387a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM3 26.387a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z'
				fill='#969696'
			/>
		</svg>
	);
};
