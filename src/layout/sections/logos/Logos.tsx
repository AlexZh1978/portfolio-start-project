//import React from 'react';

import {FlexWrapper} from "../../../components/FlexWrapper.tsx";
import styled from "styled-components";
import {Icon} from "../../../components/icon/Icon.tsx";

export const Logos = () => {
    return (

        <StyledFlexLogos>
            <StyledFlexSkill>
                <Icon width={"100px"} height={"100px"} iconId={"figma"}/>
                <Icon width={"100px"} height={"100px"}  iconId={"html"}/>
                <Icon width={"100px"} height={"100px"}  iconId={"css"}/>
                <Icon width={"100px"} height={"100px"}  iconId={"sass"}/>
                <Icon width={"100px"} height={"100px"}  iconId={"react"}/>
            </StyledFlexSkill>
        </StyledFlexLogos>

    );
};

const StyledFlexLogos =styled(FlexWrapper).attrs({
    justify: "center",
    align: "center",
})`
    width: 1441px;
    height: 200px;
    background-color: black;
    
`
const StyledFlexSkill = styled(StyledFlexLogos)`
    width: fit-content;
    height: fit-content;
    gap: 170px;
`


