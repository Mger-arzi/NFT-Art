import React from 'react';
import {Icon} from "../icon/Icon"
import iconsSprite from '../image/sprite.svg'


type LogoTypeProps = {
	iconId: string
	href?: string
}

export const Logo = (props: LogoTypeProps) => {
	return (
		<a href={props.href}>
			<Icon height='20px'width='20px' iconId={props.iconId}/>
		</a>
	);
};

