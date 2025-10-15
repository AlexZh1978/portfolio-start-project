//import React from 'react';

import styled from "styled-components";
import photo from '../../../../assets/images/photo.webp'

export const Background = () => {
    return (
            <StyledBackground>
                <StyledLeftPart/>
                <StyledRightPart/>
            </StyledBackground>
    );
};


const StyledBackground = styled.div`
    position: relative;
    width: 1440px;
    height: 743px;
    display: flex;
    
`

const StyledLeftPart = styled.div`
    width: 720px;
    height: 100%;
    background-color: rgba(34, 42, 54, 0.95);
`
const StyledRightPart = styled.div`
    width: 720px;
    height: 100%;
    opacity: 90%;
    background: url(${photo}) no-repeat center  center/cover;
    
`