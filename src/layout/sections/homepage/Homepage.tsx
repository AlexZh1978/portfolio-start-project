//import React from 'react';

//import {Icon} from "../../../components/icon/Icon.tsx";
import styled from "styled-components";
//import {FlexWrapper} from "../../../components/FlexWrapper.tsx";
//import {Background} from "./background/Background.tsx";
//import {Header} from "./header/Header.tsx";
import photo from '../../../assets/images/photo.webp'
import {Header} from "./header/Header.tsx";
import {HeroDesc} from "./hero_desc/HeroDesc.tsx";

export const Homepage = () => {
    return (
        <StyledHomepage>
            <Photo />
            <Header/>
            <HeroDesc/>
        </StyledHomepage>
    );
};
const StyledHomepage = styled.section`
    min-height: 743px;
    width: 100%;
    max-width: 1441px;
    // min-width: ???px;

    position: relative;
    background-color: rgba(34, 42, 54, 0.95);
    display: flex;
    flex-direction: column;
    align-items: center;
    // background-color: rgba(34, 42, 54, 0.95);
    // background-image: url(${photo}) no-repeat right;
    // background-size:
    //position: absolute; /* поверх фона */
    //top:175px;
    //left: 118px;
`
const Photo = styled.div`
    position: absolute;
    top: 0;
    right: 0;
    background-image: url(${photo});
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    width: 50%;
    height: 100%;
    z-index: 1;
`
// const StyledMain = styled.main`
//     position: absolute; /* поверх фона */
//     top:175px;
//     left: 118px;
// `
//
// const StyledH1 = styled.h1`
//     display: inline;
//     font-size: 1em;
//     font-weight: bold;
// `


