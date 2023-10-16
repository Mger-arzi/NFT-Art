import React from 'react';
import styled from 'styled-components';
import { TitleSection } from '../../componentc/TitleSection';
import { Button } from '../../button/Button';
import { FlexWrapper } from '../../componentc/FlexWrapper';

export const BestNFTs = () => {
	return (
		<StyledBestNFTs>
			<FlexWrapper width='426px' flexDirection='column'>
				<TitleSection >Create And Sell Your <span>Best NFTs.</span></TitleSection>
				<Text>Start exploring the world of digital art and NFTs today and take control of your digital assets with confidence!</Text>
			</FlexWrapper>
				<Button propsBTN='pripory'>Explore Now</Button>
				<Button propsBTN='outline' border='none' background='transparent'>Learn More</Button>
			
		</StyledBestNFTs>
	);
};

const StyledBestNFTs = styled.section `
background-color: #6977e3;
height: 60vh;
`
const Text = styled.p`
`