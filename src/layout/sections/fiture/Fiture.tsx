//import React from 'react';

import styled from "styled-components";
import {FlexWrapper} from "../../../components/FlexWrapper.tsx";

import {SectionTitle} from "../../../components/SectionTitle.tsx";
import {Skill} from "./skill/Skill.tsx";
import {ExperienceDescription} from "../../../components/ExperienceDescription.tsx";

export const Fiture = () => {
    return (
       // fiture
        <StyledFiture>
            {/*Group 4*/}
            <FlexWrapper>
                <ExperienceDescription>4 +</ExperienceDescription>
                <ExperienceDescription>
                    Years
                    Experience
                    Working
                </ExperienceDescription>
            </FlexWrapper>
             {/*fiture right*/}
            <FlexWrapper>
                <SectionTitle>Developer and Designer, specialized in
                    UI/UX and Web Developer</SectionTitle>
                <FlexWrapper justify={"space-between"}>
                    <Skill iconId={"frontend"} title={"Front End Developer"}/>
                    <Skill iconId={"designer"} title={"UI/UX Designer"}/>
                    <Skill iconId={"branding"} title={"Branding Designer"}/>
                </FlexWrapper>
            </FlexWrapper>

        </StyledFiture>
    );
};

const StyledFiture = styled.section`
    background-color: #222A36;
    min-height: 50vh;
`
