
import { styled } from 'styled-components';

type TypeTitleSectionProps = {
	fontSeze?: string
	LineHeight?: string

}

export const TitleSection = styled.h2<TypeTitleSectionProps>`
	font-size: ${props => props.fontSeze || "48px"};
	font-weight: 500;
	line-height: ${props => props.LineHeight || "57.6px"}


	span{
		color:#D3F85A;
	}
`