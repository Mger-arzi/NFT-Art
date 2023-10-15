import React from 'react';
import { FlexWrapper } from '../../componentc/FlexWrapper';
import { TitleSection } from '../../componentc/TitleSection';
import styled from 'styled-components';
import { Button } from '../../button/Button';
import imgMain from "../../image/Rectangle 9.jpg"
export const MainSection = () => {
	return (
		<Main>
			<FlexWrapper flexDirection="column" align='center'>
				<TitleSection fontSeze='64px'  >Discover and Collect The Best NFTs <span>Digital Art.</span></TitleSection>
				<Text>Get started with the easiest and most secure platform to buy and trade digital ART and NFT’s. Start exploring the world of digital art and NFTs today and take control of your digital assets with confidence!</Text>
				<Button propsBTN='pripory'>Explore Now</Button>
				<Button propsBTN='outline' border='none'>Learn More</Button>
				<Prise>8.9<span>K</span><br></br><p>Art work</p></Prise>
				<Prise>65<span>K</span><br></br><p>Artist</p></Prise>
				<Prise>87<span>K</span><br></br><p>Collection</p></Prise>
			</FlexWrapper>
			<FlexWrapper flexDirection="column" align='center'>
				<MainImg src={imgMain}/>
				<MainDop>
					<FlexWrapper justidy='space-around'>
						<div>	<span>Ends in</span><br></br>
								<p>05:45:47</p>
						</div>
						<div><span>Current bid</span><br></br>
								<p>0.24ETH</p>
						</div>
					</FlexWrapper>
					<Button propsBTN='outline'>Place A Bid</Button>
				</MainDop>
			</FlexWrapper>
		</Main>
		
	);
};

const Prise = styled.span`
	font-size: 48px;
	color:#D3F85A;
		span{
			color: #fffffd;
		}
		p{
			font-size: 16px;
			color: #fffffd;
		}
`
const Text = styled.p`
`
const Main = styled.section`
	background-color :#5cee75;
	min-height:100vh;
	display: flex;
`

const MainImg = styled.img `
	border-radius: 28px;
`

const MainDop = styled.div `
max-width: 309px;
max-height: 169px;
min-width:224px;
min-height:137px;
background-color: #131E3A;
border-top: 1px solid #D3F85A;
border-radius: 28px;
		span{
			color:  #D3F85A;
		}
		p{
			color: #fff;
		}
`
