// import React from 'react';

import styled from "styled-components";
import {FlexWrapper} from "../../../components/FlexWrapper.tsx";
import {Slider} from "./slider/Slider.tsx";

export const Testimonial = () => {
    return (
        <StyledTestimonial>
            <FlexWrapper>
                <Slider />
                    <FlexWrapper direction="column">

                    </FlexWrapper>

            </FlexWrapper>
        </StyledTestimonial>
    );
};

const StyledTestimonial = styled.section`
    min-height: 50vh;
    background-color: rgba(34, 42, 54, 0.95)
;
`