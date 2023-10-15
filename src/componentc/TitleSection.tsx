
import { styled } from 'styled-components';

type TypeTitleSectionProps = {
	fontSeze?: string
	LineHeight?: string
	width?: string
	height?: string
}

export const TitleSection = styled.h2<TypeTitleSectionProps>`
	font-size: ${props => props.fontSeze || "48px"};
	font-weight: 500;
	/* line-height: ${props => props.LineHeight || "57.6px"}; */
	/* width: 100%; */
	max-width: ${props => props.width || "100%"};
	span{
		color:#D3F85A;
	}
`