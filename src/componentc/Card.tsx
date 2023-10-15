import React from 'react';
import styled from 'styled-components';
import { Icon } from '../icon/Icon';
import { type } from 'os';
import { Button } from '../button/Button';

type CardTypeProps = {
	img: string
	Title: string
}

export const Card = ({img,Title}: CardTypeProps) => {
	return (
		<CardStyle >
			<Img src={img} />
			<CuberpunkTitle>{Title}
				<CuberpunkSpan>
					<Icon iconId="vectorIcon" />
					490ETH
				</CuberpunkSpan>
			</CuberpunkTitle>
			<Text>
				<span>Ending In</span>
				<br />
				<Icon iconId="timeIcon" />
				03:24:56
			<Button propsBTN='pripory'>Place A Bid</Button>

			</Text>
		</CardStyle>
	);
};

const CardStyle = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	padding: 20px ;
	background-color: #131E3A;
	border-top: 1px solid #D3F85A;
	border-radius: 16px;
	max-width: 410px;
	min-width: 343px;

`
const Img = styled.img`
	border-radius: 24px;
`


const CuberpunkTitle = styled.p`
color: #fffffd;
`
const CuberpunkSpan = styled.span`
	color: #fffffd;
`

const Text = styled.p`
color:#fffffd;
`