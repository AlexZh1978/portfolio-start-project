import styled from "styled-components";

type TextDetailsPropsType = {
    $color?: string;

}
export const TextDetails = styled.span<TextDetailsPropsType>`
    color: ${props=>props.$color || "rgba(255, 255, 255, 1)"};
`