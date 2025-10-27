// import React from 'react';

import styled from "styled-components";
import {Button} from "../../../../components/button/Button.tsx";
import {ButtonLabel} from "../../../../components/button/ButtonLabel.ts";
import {Icon} from "../../../../components/icon/Icon.tsx";
import {StyledText} from "../../../../components/StyledText.ts";
import {TextDetails} from "../../../../components/TextDetail.tsx";

export const HeroDesc = () => {
    return (
        <StyledHeroDesc>
            <Name> Hello!<br/>
                I’m Zarror Nibors</Name>
            <SkillCardGroup>
                <StyledText width={"404px"} height={"108px"} $fontWeight={"bold"} $fontSize={"20px"}
                $lineHeight={"180%"}>
                    I’am freelance <TextDetails>web developer</TextDetails> based in
                    Indonesia who loves to craft attractive design experiences for the web.
                </StyledText>
                {/*<SkillCard>*/}
                {/*    I’am freelance <SkillCardDetails>web developer</SkillCardDetails> based in*/}
                {/*    Indonesia who loves to craft attractive design experiences for the web.*/}
                {/*</SkillCard>*/}
                <SkillCardButtons>
                    <Button as={"a"} $backgroundColor={"#676CDB"}>
                        <Icon $iconId={"mail"} width="20" height="20" viewBox="0 0 20 20"/>
                        <ButtonLabel width={"92px"} height={"24px"}
                                     $fontWeight={"400"} $fontSize={"20px"} $lineHeight={"120%"} $fontFamily={"Poppins"}>Email me</ButtonLabel>
                    </Button>
                    <Button as={"button"}>
                        <Icon $iconId={"download"} width="20" height="18" viewBox="0 0 20 18"/>
                        <ButtonLabel width={"136px"} height={"24px"} $fontWeight={"400"} $fontSize={"20px"} $lineHeight={"120%"}
                                     $fontFamily={"Poppins"} $textDecoration={"underline"}>Download CV</ButtonLabel>
                    </Button>
                </SkillCardButtons>
            </SkillCardGroup>
        </StyledHeroDesc>
    );
};

const StyledHeroDesc = styled.div`
    position: absolute;
    top: 175px;
    left: 118px;
    display: flex;
    flex-direction: column;
    z-index: 1;
    // align-items: stretch;
`

const Name = styled.h1`
    width: 735px;
    height: 216px;
    font-size: 90px;
    line-height: 120%;
    font-weight: 700;
    font-family: Playfair Display, serif;
    color: #FFFFFF;
    margin: 0;
   
`
const SkillCardGroup = styled.div`
    display: flex;
    flex-direction: column;
    align-items: stretch;
    align-self: flex-start;
    
`


// const SkillCard = styled.p`
//     width: 404px;
//     height: 108px;
//     font-family: Poppins, sans-serif;
//     font-size: 20px;
//     font-weight: 400;
//     line-height: 180%;
//     color: rgba(255, 255, 255, 0.5);
//
// `
const SkillCardButtons = styled.div`
  display: flex;
`

// const SkillCardDetails = styled.span`
//     color: rgba(255, 255, 255, 1);
// `
