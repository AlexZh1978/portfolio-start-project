// import React from 'react';
import styled from "styled-components";
import {FlexWrapper} from "../../../components/FlexWrapper.tsx";
import {StyledFragmentText} from "../../../components/textgroup/TextGroup.tsx";
import {Icon} from "../../../components/icon/Icon.tsx";
import {Button} from "../../../components/button/Button.tsx";
import {Form} from "./form/form.tsx";
import {StyledText} from "../../../components/StyledText.ts";
//import {TextDetails} from "../../../components/TextDetail.tsx";

export const Footer = () => {
    return (
        <StyledFooter>
            <FlexWrapper $width={"1194px"} $height={"444px"} $justify={"space-between"}>
               <FlexWrapper $width={"438px"} $height={"296px"} $direction={"column"} $align={"flex-start"} gap={"31px"}>
                   <StyledFragmentText width={"438px"} height={"240px"} $fontFamily={"Poppins"}
                   fontSize={"100px"} lineHeight={"120%"}>
                       Let’s
                       Connect
                   </StyledFragmentText>
                   <FlexWrapper $width={"fit-content"} $height={"fit-content"} $justify={"center"} $align={"center"}
                   gap={"50px"}>
                       <Button $margin={"0"} $padding={"0"}>
                           <Icon $iconId={"dribble" } width="25" height="25" viewBox="0 0 25 25" />
                       </Button>
                       <Button $margin={"0"} $padding={"0"}>
                           <Icon $iconId={"upwork2" } width="25" height="25" viewBox="0 0 25 25" />
                       </Button>
                       <Button $margin={"0"} $padding={"0"}>
                           <Icon $iconId={"youtube" } width="25" height="25" viewBox="0 0 25 25" />
                       </Button>
                       <Button $margin={"0"} $padding={"0"}>
                           <Icon $iconId={"linkedin" } width="25" height="25" viewBox="0 0 25 25" />
                       </Button>
                       <Button $margin={"0"} $padding={"0"}>
                           <Icon $iconId={"github" } width="25" height="25" viewBox="0 0 25 25" />
                       </Button>
                   </FlexWrapper>
               </FlexWrapper>
                <Form/>
            </FlexWrapper>
            <FlexWrapper $width={"fit-content"} $height={"fit-content"} $justify={"center"} $align={"center"} color={"#FFFFFF50"}>
                <StyledText width={"338px"} height={"36px"} $fontWeight={"500"} $fontSize={"20px"}
                            $lineHeight={"180%"} $letterSpacing={"0.3px"}>
                    Created by <StyledFragmentText width={"60px"} color={"rgba(255, 255, 255, 1)"} $fontFamily={"Poppins"} fontSize={"20px"}
                lineHeight={"180%"} letterSpacing={".3px"}>Zarror</StyledFragmentText> | All Reserved!
                </StyledText>
            </FlexWrapper>
        </StyledFooter>
    );
};

const StyledFooter = styled.section`
    min-height: 730px;
    width: 100%;
    max-width: 1441px;
    // min-width: ???px;

    background-color: #000000;
    display: flex;
    flex-direction: column;
    
    justify-content: space-between;
    align-items: center;
    padding: 100px 0 40px 0;
    
`