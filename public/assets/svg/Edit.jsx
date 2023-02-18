import React from "react";

export const Edit = (props) => {
	return (
		<svg
			width={16}
			height={16}
			fill='none'
			xmlns='http://www.w3.org/2000/svg'
			{...props}
		>
			<path
				d='M13.11 0a2.6 2.6 0 0 1 1.838 4.435L4.934 14.451a.5.5 0 0 1-.222.129l-4.08 1.113a.5.5 0 0 1-.614-.614l1.113-4.08a.5.5 0 0 1 .129-.222L11.274.761A2.582 2.582 0 0 1 13.11 0ZM4.32 13.65l9.92-9.921a1.6 1.6 0 0 0-2.26-2.26l-9.92 9.92-.848 3.108 3.108-.847Z'
				fill='#707070'
			/>
		</svg>
	);
};
