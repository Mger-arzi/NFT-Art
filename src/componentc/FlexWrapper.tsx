import styled from "styled-components";

type TypeFlexWrapperProps = {
	justidy?: string
	align?: string
	flexDirection?: string
	wrap?:string
}


export const FlexWrapper = styled.div<TypeFlexWrapperProps> `
	display: flex;
	justify-content: ${props => props.justidy || "flex-start"};
	align-items: ${props => props.align || "stretch"};
	flex-direction: ${props => props.flexDirection || "row"};
	flex-wrap: ${props => props.wrap || "nowrap"};
`