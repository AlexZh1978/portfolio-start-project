import styled from "styled-components";

type StyledTextPropsType = {
  // children: React.ReactNode;
    width?: string;
    height?: string;
    color?: string;
    $fontSize?: string;
    $fontFamily?: string;
    $fontWeight?: string;
    $lineHeight?: string;
    $letterSpacing?: string;
    position?: string;
    top?: string;
    left?: string;

};
export const StyledText = styled.p<StyledTextPropsType>`
    width: ${props=>props.width || "400px"};
    height: ${props=>props.height || "108px"};
    font-family: ${props=>props.$fontFamily || "Poppins, sans-serif"};
    font-size:  ${props=>props.$fontSize || "20px"};
    font-weight: ${props=>props.$fontWeight || "400"};
    line-height: ${props=>props.$lineHeight || "100%"};
    letter-spacing: ${props=>props.$letterSpacing || "0%"};
    color:  ${props=>props.color || "rgba(255, 255, 255, 0.5)"};
    position: ${props=>props.position || "relative"};
    top: ${props=>props.top || "0"};
    left: ${props=>props.left || "0"};

`