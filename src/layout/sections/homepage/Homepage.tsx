//import React from 'react';

import {Icon} from "../../../components/icon/Icon.tsx";
import styled from "styled-components";
import {FlexWrapper} from "../../../components/FlexWrapper.tsx";
import {Background} from "./background/Background.tsx";
import {Header} from "./header/Header.tsx";

export const Homepage = () => {
    return (
        <StyledHomepage>
            <Background>
                <Header/>
                <StyledMaim>
                    <FlexWrapper align={"center"} justify={"space-around"}>
                        <div>
                            <p>Hello! <br/>
                                I’m Zarror Nibors
                            </p>

                            <p>
                                I’m freelance <StyledH1>web developer</StyledH1> based in <br/>Indonesia who loves to
                                craft
                                attractive design experiences for the web.
                            </p>

                            <div>
                                <a href={"mailto:mail@gmai.com"}>
                                    <Icon iconId={"mail"}/>
                                    Email me
                                </a>
                                <a href={"cv.pdf"} download>
                                    <Icon iconId={"download"}/>
                                    Download CV
                                </a>
                            </div>
                        </div>
                    </FlexWrapper>
                </StyledMaim>
            </Background>
        </StyledHomepage>
    );
};
const StyledHomepage = styled.section`
    min-height: 100vh;
    //position: absolute; /* поверх фона */
    //top:175px;
    //left: 118px;
`
const StyledMaim = styled.main`
    position: absolute; /* поверх фона */
    top:175px;
    left: 118px;
`

const StyledH1 = styled.h1`
    display: inline;
    font-size: 1em;
    font-weight: bold;
`


