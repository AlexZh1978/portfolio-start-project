// import React from 'react';
// что происходит при styled.h1
// Ты вызываешь функцию styled, передавая ей тип HTML-элемента (h1),
import styled from "styled-components";
import photoClient from "../../../../assets/images/photo-client.jpg"
import {FlexWrapper} from "../../../../components/FlexWrapper.tsx";

export const Slider = () => {
    return (
        <StyledSlider>
            <Slide>
                <Image src={photoClient}></Image>
                <FlexWrapper>
                    <Text>
                        “Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus.
                        Sed dignissim, metus nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum tellus elit sed risus.
                        Maecenas eget condimentum velit, sit amet feugiat lectus. Class aptent taciti sociosqu ad litora torquent
                    </Text>
                </FlexWrapper>

            </Slide>
        </StyledSlider>
    );
};

const StyledSlider =  styled.div`
    border: 1px solid red;
    max-width: 894px;
`


const Slide = styled.div`
    
`

const Image = styled.img``

const Text =styled.p`

`
