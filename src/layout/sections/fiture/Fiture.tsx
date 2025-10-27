//import React from 'react';

import styled from "styled-components";
import {FlexWrapper} from "../../../components/FlexWrapper.tsx";
import {Icon} from "../../../components/icon/Icon.tsx";
import {Statistics, StyledFragmentText, TextGroup} from "../../../components/textgroup/TextGroup.tsx";

//import {SectionTitle} from "../../../components/SectionTitle.tsx";
//import {Skill} from "./skill/Skill.tsx";
//import {ExperienceDescription} from "../../../components/ExperienceDescription.tsx";

export const Fiture = () => {
    return (
       // fiture
        <StyledFiture>
            <TextGroup width={"207px"} height={"336px"} left={"122px"} top={"130px"}>
                <Statistics width={"133px"} height={"120px"} fontSize={"100px"}>
                    4 +
                </Statistics>
                <StyledFragmentText width={"207px"} height={"216px"} fontSize={"40px"} lineHeight={"180%"}>
                    Years
                    Experience
                    Working
                </StyledFragmentText>
            </TextGroup>
            <CardBox $width={"894px"} $height={"459px"}>
                <SkillDescription>
                    Developer and Designer, specialized in
                    UI/UX and Web Developer
                </SkillDescription>
                <Cards>
                    <li>
                        <CardSkillBox $width={"106px"} $height={"86px"}>
                            <Icon $iconId={"frontend"} width="30" height="30" viewBox="0 0 30 30"></Icon>
                            <CardSkillDescription color={"#FFFFFF"} height={"47px"} weight={"106px"}
                                                  fontFamily={"Poppins, sans-serif"} fontWeight={"700"}
                                                  fontSize={"20px"} lineHeight={"120%"}>
                                Front End Developer</CardSkillDescription>
                        </CardSkillBox>
                    </li>
                    <li>
                        <CardSkillBox $width={"96px"} $height={"86px"}>
                            <Icon $iconId={"designer"} width="30" height="30" viewBox="0 0 30 30"></Icon>
                            <CardSkillDescription color={"#222A36"} height={"47px"} weight={"96px"}
                                                  fontFamily={"Poppins, sans-serif"} fontWeight={"700"}
                                                  fontSize={"20px"} lineHeight={"120%"}>
                                UI/UX Designer</CardSkillDescription>
                        </CardSkillBox>
                    </li>
                    <li>
                        <CardSkillBox $width={"96px"} $height={"86px"}>
                            <Icon $iconId={"branding"} width="30" height="30" viewBox="0 0 30 30"></Icon>
                            <CardSkillDescription color={"#222A36"} height={"47px"} weight={"96px"}
                                                  fontFamily={"Poppins, sans-serif"} fontWeight={"700"}
                                                  fontSize={"20px"} lineHeight={"120%"}>
                                Branding Designer</CardSkillDescription>
                        </CardSkillBox>
                    </li>
                </Cards>
            </CardBox>
            {/*Group 4*/}
            {/*<FlexWrapper>*/}
            {/*    <ExperienceDescription>4 +</ExperienceDescription>*/}
            {/*    <ExperienceDescription>*/}
            {/*        Years*/}
            {/*        Experience*/}
            {/*        Working*/}
            {/*    </ExperienceDescription>*/}
            {/*</FlexWrapper>*/}
            {/* /!*fiture right*!/*/}
            {/*<FlexWrapper>*/}
            {/*    <SectionTitle>Developer and Designer, specialized in*/}
            {/*        UI/UX and Web Developer</SectionTitle>*/}
            {/*    <FlexWrapper justify={"space-between"}>*/}
            {/*        <Skill iconId={"frontend"} title={"Front End Developer"}/>*/}
            {/*        <Skill iconId={"designer"} title={"UI/UX Designer"}/>*/}
            {/*        <Skill iconId={"branding"} title={"Branding Designer"}/>*/}
            {/*    </FlexWrapper>*/}
            {/*</FlexWrapper>*/}

        </StyledFiture>
    );
};

const StyledFiture = styled.section`

    min-height: 659px;
    width: 100%;
    max-width: 1441px;
    // min-width: ???px;
    background-color: #222A36;
    position: relative;
`
type CardBoxPropsType = {
    $width?: string;
    $height?: string;
};
const CardBox = styled(FlexWrapper).attrs({
    $direction: "column",
    $align: "center",
    $justify: "center",
})<CardBoxPropsType>`
    && {
        width: ${props => props.$width || '100%'};
        height: ${props => props.$height || '100%'};
    }
    position: absolute;
    left: 425px;
    top: 100px;
`

const SkillDescription = styled.h2`
    width: 800px;
    height: 144px;
    text-align: center;
    font-size: 40px;
    line-height: 180%;
    font-weight: 700;
    letter-spacing: 0;
    font-family:Poppins, sans-serif;
    color: #ffffff;
    margin-top: 0;
    margin-bottom: 20px;
`

type CardSkillDescriptionPropsType = {
    color?: string;
    weight?: string;
    height?: string;
    fontFamily?: string;
    fontWeight?: string;
    fontSize?: string;
    lineHeight?: string;
    letterSpacing?: string;
}

const CardSkillDescription = styled.h3<CardSkillDescriptionPropsType>`
    color: ${props => props.color || 'black'};
    width: ${props => props.weight || '100%'};
    height: ${props => props.height || '100%'};
    font-size: ${props => props.fontFamily || "sans-serif"};
    font-weight: ${props => props.fontWeight || 'bold'};
    font-size: ${props => props.fontSize || '16px'};
    line-height: ${props => props.lineHeight || '100%'};
    letter-spacing: ${props => props.letterSpacing || '0'};
    padding: 0;
    margin: 10px 0 0 0 ;
    text-align: left;
    
`

// Group 234, 235, 236 from Figma
// type CardSkillBoxPropsType = {
//     $width?: string;
//     $height?: string;
// }
// const CardSkillBox = styled.div<CardSkillBoxPropsType>`
//     display: flex;
//     flex-direction: column;
//     align-items: flex-start;
//     justify-content: center;
//     width: ${props=>props.$width || `100%`};
//     height: ${props=>props.$height || `100%`};
//     position: absolute;
//     left: 30px;
//     top: 170px
// `
type CardSkillBoxPropsType = {
    $width?: string;
    $height?: string;
};

export const CardSkillBox = styled(FlexWrapper).attrs({
    $direction: "column",
    $align: "flex-start",
    $justify: "center",
})<CardSkillBoxPropsType>`
    && {
        width: ${props => props.$width || '100%'};
        height: ${props => props.$height || '100%'};
    }

    position: absolute;
    left: 30px;
    top: 170px;
`;

const Cards = styled.ul`
    display: flex;
    gap: 15px;
    list-style: none;
    margin: 0;
    padding: 0;
    li {
        background-color: #C4C4C4;
        width: 288px;
        height: 295px;
        position: relative;
    }
    li:nth-of-type(1) {
        background-color: #676CDB;
    }
    
`

// const Card = styled.li`
//
// `
