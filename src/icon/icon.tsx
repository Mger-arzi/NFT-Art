import React from 'react';
import iconsSprite from '../image/sprite.svg'
type IconPropsType = {
	iconId: string
	height?: string
	width?: string
	viewBox?: string
}

export const Icon = (props: IconPropsType) => {
	return (
		
			<svg width={props.width || "24"} height={props.height ||"25"} viewBox={props.viewBox || "0 0 24 25"} fill="none" xmlns="http://www.w3.org/2000/svg">
				<use xlinkHref={ `${iconsSprite}#${props.iconId}` }/>
			</svg>
	);
};

