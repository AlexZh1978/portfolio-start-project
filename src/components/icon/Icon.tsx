//import React from 'react';
import iconsSprite from  "../../assets/images/icons-sprite.svg"
import styled from "styled-components";

type IconPropsType = {
    $iconId: string;
    width?: string;
    height?: string;
    viewBox?:  string;
    $rotated?: boolean
}
export const Icon = (props: IconPropsType) => {
    return (
        <StyledSvg width={props.width || "50"} height={props.height || "50"} viewBox={props.viewBox || "0 0 50 50 "} fill="none" xmlns="http://www.w3.org/2000/svg"
                   rotated={props.$rotated}>
            <use xlinkHref={`${iconsSprite}#${props.$iconId}`}/>
        </StyledSvg>
    // <svg width={props.width || "50"} height={props.height || "50"} viewBox={props.viewBox || "0 0 50 50 "} fill="none" xmlns="http://www.w3.org/2000/svg">
    //     <use xlinkHref={`${iconsSprite}#${props.$iconId}`}/>
    // </svg>
    );
};

const StyledSvg = styled.svg<{rotated?: boolean}>`
    transform: ${props => (props.rotated ? "rotate(180deg)" : "none")};
`
