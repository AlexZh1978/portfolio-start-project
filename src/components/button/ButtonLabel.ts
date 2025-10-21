import styled from "styled-components";

type ButtonLabelType = {
    width?: string;
    height?: string;
    fontFamily?: string;
    fontWeight?: string;
    fontSize?: string;
    lineHeight?: string;
    letterSpacing?: string;
    color?: string;
    textDecoration?: string;

}
export const ButtonLabel = styled.span<ButtonLabelType>`
    display:  inline-flex;
    align-items: center;
    justify-content: center;
    width: ${props=>props.width};
    height: ${props=>props.height};
    font-family: ${props=>props.fontFamily || "sans-serif"} ;
    font-weight: ${props=>props.fontWeight};
    font-size: ${props=>props.fontSize || "1em"};
    line-height: ${props=>props.lineHeight || "100%"};
    letter-spacing: ${props=>props.letterSpacing || "0%"};
    color: ${props=>props.color || "#FFFFFF"};
    text-decoration: ${props=>props.textDecoration || "none"};
    
`