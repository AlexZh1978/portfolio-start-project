// import React from 'react';

import styled from "styled-components";
//import {FlexWrapper} from "../../../components/FlexWrapper.tsx";
import {Slider} from "./slider/Slider.tsx";
import {FlexWrapper} from "../../../components/FlexWrapper.tsx";
//import {StyledText} from "../../../components/StyledText.ts";
import {Statistics, StyledFragmentText} from "../../../components/textgroup/TextGroup.tsx";

export const Testimonial = () => {
    return (
        <StyledTestimonial>
            <FlexWrapper $width={"fit-content"} $height={"fit-content"} $align={"flex-start"} gap={"109px"}>
                <Slider/>
                <FlexWrapper $width={"194px"} $height={"450px"} $direction={"column"} $align={"flex-start"} gap={"10px"}>
                   <StyledFragmentText width={"164px"} height={"72px"} fontSize={"30px"} lineHeight={"120%"}>
                       Satisfaction
                       Clients
                   </StyledFragmentText>
                    <Statistics width={"132px"} height={"60px"} fontSize={"50px"}>
                        100 %
                    </Statistics>
                    <StyledFragmentText width={"183px"} height={"72px"} fontSize={"30px"} lineHeight={"120%"}>
                        Clients On Worldwide
                    </StyledFragmentText>
                    <Statistics width={"132px"} height={"60px"} fontSize={"50px"}>
                        + 80
                    </Statistics>
                    <StyledFragmentText width={"194px"} height={"36px"} fontSize={"30px"} lineHeight={"120%"}>
                        Projects Done
                    </StyledFragmentText>
                    <Statistics width={"71px"} height={"60px"} fontSize={"50px"}>
                        743
                    </Statistics>
                </FlexWrapper>
            </FlexWrapper>

        </StyledTestimonial>
    );
};

const StyledTestimonial = styled.section`
    min-height: 650px;
    width: 100%;
    max-width: 1441px;
    // min-width: ???px;
    background-color: rgba(34, 42, 54, 0.95);
    display: flex;
    justify-content: center;
    align-items: center;
;
`
