//import React from 'react';

//import {FlexWrapper} from "../../../components/FlexWrapper.tsx";
import styled from "styled-components";
import {Icon} from "../../../components/icon/Icon.tsx";

export const Logos = () => {
    return (
        <StyledLogos>
            <Skills>
                <Icon width={"100px"} height={"100px"} viewBox="0 0 100 100"  $iconId={"figma"}/>
                <Icon width={"100px"} height={"100px"} viewBox="0 0 100 100" $iconId={"html"}/>
                <Icon width={"100px"} height={"100px"} viewBox="0 0 100 100" $iconId={"css"}/>
                <Icon width={"100px"} height={"100px"} viewBox="0 0 100 100" $iconId={"sass"}/>
                <Icon width={"100px"} height={"100px"} viewBox="0 0 100 100" $iconId={"react"}/>
            </Skills>
        </StyledLogos>

    );
};

const StyledLogos = styled.section`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    // min-width: ??px;
    max-width: 1441px;
    min-height: 200px;
    background-color: black;
`

const Skills =styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: fit-content;
    height: fit-content;
    gap: 170px;
    
`
//
// const Skills =styled(FlexWrapper).attrs({
//     $justify: "center",
//     $align: "center"
// })`
//     width: fit-content;
//     height: fit-content;
//     gap: 170px;
//
// `



