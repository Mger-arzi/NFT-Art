import React from 'react';
import styled from 'styled-components';
import { FlexWrapper } from '../../componentc/FlexWrapper';
import { TitleSection } from '../../componentc/TitleSection';
import { Button } from '../../button/Button';
import { Card } from '../../componentc/Card';
import Cuberpunk from "../../image/Cyberpunk.jpg"
import Charge from "../../image/Charge.jpg"
import Surgeon from "../../image/Surgeon.jpg"

export  const ThisWeek = () => {
	return (
		<ThisWeekStyle>
			<FlexWrapper justidy='space-between'>
				<TitleSection width='532px' ><span>Amazing</span> and Super Unique Art of This <span>Week</span></TitleSection>
				<Button propsBTN='pripory'>See All</Button>
			</FlexWrapper>
			<FlexWrapper justidy='space-around'>
			<Card img={Cuberpunk} Title='Cyberpunk Cocomo'/>
			<Card img={Charge} Title='Charge, Qi tiao yu'/>
			<Card img={Surgeon} Title='Surgeon, Josh Rife'/>
			</FlexWrapper>
		</ThisWeekStyle>
	);
};

const  ThisWeekStyle = styled.section `
	background-color: #696762;
	min-height: 100vh;
`