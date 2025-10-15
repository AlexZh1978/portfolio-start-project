//import React from 'react';

import styled from "styled-components";
import {Logo} from "../../../../components/logo/Logo.tsx";
import {Menu} from "../menu/Menu.tsx";
import {Link} from "../../../../components/link/Link.tsx";

export const Header = () => {
    return (
        <StyledHeader>
            <Logo/>
            <Menu/>
           <Link/>
        </StyledHeader>

    );
};

const StyledHeader = styled.header`
    //background-color: #222A36F2;
    display: flex;
    justify-content: space-between;
    position: absolute; /* поверх фона */
    top:10px;
    left: 122px;
    width: 1196px;
    height: 65px;
    align-items: center;
    z-index: 1;
    
`

