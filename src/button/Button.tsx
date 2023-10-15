import styled, { css } from "styled-components";

type ButtonTypeProps ={
	background?:string
	color?: string
	border?:string
	propsBTN: "pripory" | "outline"
}
export const Button = styled.button<ButtonTypeProps>`
	padding:12px 40px 12px 40px;
	border-radius: 8px;
	border:none;
	font-size: 16px;

	${(props) =>props.propsBTN ==="pripory" && css<ButtonTypeProps>`
		border: ${props.border || "none"};
		background-color: ${props.background || "#D3F85A"};
		color: ${props.color || "#090F1D"}
	`}

	${(props) =>props.propsBTN ==="outline" && css<ButtonTypeProps>`
		border: ${props.border || "1px solid #D3F85A"};
		background-color: ${props.background || "#131E3A"};
		color: ${props.color || "#D3F85A"}
	`}

`