import React from 'react';
import styled from 'styled-components';
import { Logo } from '../logo/Logo';
import { Icon } from '../icon/Icon';

export const Header = () => {
	return (
		<StyledHeader>
			
			<Logo href='https://web.telegram.org/a/#1140893833' iconId='timeIcon'/>
			<Naviation>
				<ul>
					<li>
						<a href="">Marketplace</a>
					</li>
					<li>
						<a href="">Artists</a>
					</li>
					<li>
						<a href="">Community</a>
					</li>
					<li>
						<a href="">Collections</a>
					</li>
				</ul>
			</Naviation>
			<Logo iconId='Logo'/>
		</StyledHeader>
	);
};
const StyledHeader = styled.div `
display: flex;
justify-content: space-around;
align-items: center;
	background-color: #090F1D;
	min-height: 50px;
`
const Naviation = styled.nav `
	ul{
		display: flex;
		gap: 30px;
	}

`