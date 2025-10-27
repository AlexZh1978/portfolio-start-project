// import React from 'react';
// что происходит при styled.h1
// Ты вызываешь функцию styled, передавая ей тип HTML-элемента (h1),
import styled from "styled-components";
import photoClient from "../../../../assets/images/photo-client.jpg"
//import {FlexWrapper} from "../../../../components/FlexWrapper.tsx";
import {StyledFragmentText} from "../../../../components/textgroup/TextGroup.tsx";
import {StyledText} from "../../../../components/StyledText.ts";
import {Button} from "../../../../components/button/Button.tsx";
import {Icon} from "../../../../components/icon/Icon.tsx";
// import {FlexWrapper} from "../../../../components/FlexWrapper.tsx";

export const Slider = () => {
    return (
        <StyledSlider>
            <Slide>
                <Image src={photoClient}></Image>
                <StyledFragmentText width={"47px"} height={"77px"} color={"#C4C4C4"} fontSize={"100px"} lineHeight={"120%"}
                position={"absolute"} left={"404px"}>
                    “
                </StyledFragmentText>
                <StyledText width={"490px"} height={"252px"} $lineHeight={"180%"} $fontWeight={"700"} color={"#FFFFFF"}
                position={"absolute"} top={"77px"} left={"404px"}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus.
                    Sed dignissim, metus nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum tellus elit sed risus.
                    Maecenas eget condimentum velit, sit amet feugiat lectus. Class aptent taciti sociosqu ad litora torquent
                </StyledText>
                {/*<FlexWrapper>*/}
                {/*    <Text>*/}
                {/*        “Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus.*/}
                {/*        Sed dignissim, metus nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum tellus elit sed risus.*/}
                {/*        Maecenas eget condimentum velit, sit amet feugiat lectus. Class aptent taciti sociosqu ad litora torquent*/}
                {/*    </Text>*/}
                {/*</FlexWrapper>*/}
            </Slide>
            <Navigation>
                <Button $margin={"0"} $padding={"0"}>
                   <Icon $iconId={"arrow-left" } width="40" height="40" viewBox="0 0 40 40" />
                </Button>
                <Button  $margin={"0"} $padding={"0"}>
                    <Icon $iconId={"arrow-left" } width="40" height="40" viewBox="0 0 40 40" $rotated={true}/>
                </Button>
            </Navigation>
        </StyledSlider>
    );
};

const StyledSlider =  styled.div`
    //border: 1px solid red;
    //min-width: 894px;
    //min-height: 393px;
    position: relative;
    display: flex;
    margin-right: auto;
`


const Slide = styled.div`
    display: flex;
    position: relative;
    min-width: 894px;
    min-height: 393px;
    
`

const Image = styled.img`
    position: absolute;
    top:2px;
    left: 0;
    width:389px;
    height: 391px;
    opacity:80%;
    
`



const Navigation =styled.div`
    display: flex;
    position: absolute;
    top:349px;
    left:416px;
    width:95px;
    height: 40px;
    gap:15px;
`
