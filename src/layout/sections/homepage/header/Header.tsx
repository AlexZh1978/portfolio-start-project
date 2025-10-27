//import React from 'react';

import styled from "styled-components";
import {Logo} from "../../../../components/logo/Logo.tsx";
import {Menu} from "../menu/Menu.tsx";
import {Button} from "../../../../components/button/Button.tsx";
import {ButtonLabel} from "../../../../components/button/ButtonLabel.ts";

export const Header = () => {
    return (
        <StyledHeader>
            <Logo/>
            <Menu/>
            <Button as={"a"}  $backgroundColor={"#676CDB"}>
                <ButtonLabel width={"117px"} height={"30px"}>Contact Me</ButtonLabel>
            </Button>

        </StyledHeader>

    );
};

const StyledHeader = styled.header`
    //background-color: #222A36F2;
    // position: relative
    // Смещения (top, left, right, bottom) применяются относительно исходного положения элемента в потоке документа.
    // Элемент остается в потоке — то есть занимает место, как будто он не смещён.
    // Смещение влияет только на визуальное положение, но не влияет на соседние элементы.
    // Не меняет расположение элемента, если не указаны top, left, right, bottom.
    // Активирует z-index, позволяя элементу участвовать в слоёвом контексте.
    position: relative; // активирует z-index, не меняет расположение элемента, если не указаны top, left, right, bottom
    z-index: 2;
    display: flex;
    justify-content: space-between;
    margin-top: 10px;
    
    
    //position: absolute; /* поверх фона */
    //top:10px;
    //left: 122px;
    width: 1196px;
    height: 65px;
    //align-items: center;
    //z-index: 1;
    
`

