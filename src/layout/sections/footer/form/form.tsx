// import React from 'react';

import styled from "styled-components";
import {StyledFragmentText} from "../../../../components/textgroup/TextGroup.tsx";
import {Icon} from "../../../../components/icon/Icon.tsx";
import {ButtonLabel} from "../../../../components/button/ButtonLabel.ts";
import {Button} from "../../../../components/button/Button.tsx";

export const Form = () => {
    return (
        <StyledForm>
            <label htmlFor={"userName"}>
                <StyledFragmentText width={"173px"} height={"36px"} $fontFamily={"Poppins"}
                $fontWeight={"500"} fontSize={"30px"} lineHeight={"120%"}>
                    Your name:
                </StyledFragmentText>
            </label>
                <Field id={"userName"}/>
                <StyledLine/>
            <label htmlFor={"userEmail"}>
                <StyledFragmentText width={"308px"} height={"36px"} $fontFamily={"Poppins"}
                                    $fontWeight={"500"} fontSize={"30px"} lineHeight={"120%"}>
                    Your email  address:
                </StyledFragmentText>
            </label>
            <Field id={"userEmail"}/>
            <StyledLine/>
            <label htmlFor={"aboutProject"}>
                <StyledFragmentText width={"329px"} height={"36px"} $fontFamily={"Poppins"}
                                    $fontWeight={"500"} fontSize={"30px"} lineHeight={"120%"}>
                    Tell about the project:
                </StyledFragmentText>
            </label>
            <Field id={"aboutProject"}/>
            <StyledLine/>
            <Button $padding={"10px 0"} $margin={"10px 0"}>
                <ButtonLabel width={"77px"} height={"36px"} $margin={"0 40px 0 0"} $fontFamily={"Poppins"}
                             $fontWeight={"500"} $fontSize={"30px"} $lineHeight={"120%"} color={"#676CDB"}>Send</ButtonLabel>
                <Icon $iconId={"arrow-right-small"} width="30" height="30" viewBox="0 0 30 30"/>
            </Button>
        </StyledForm>
    );
};

const StyledForm = styled.form`
    display: flex;
    flex-direction: column;
    height: 100%;
    min-width: 550px;
    align-items: flex-start;
`

const Field =  styled.input`
    width: 100%;
    height: 60px;
    border: none;
    background-color: transparent;
    padding: 0;
    color: #FFFFFF;
    outline: none;
    
`
const StyledLine = styled.line`
    width: 100%;
    height: 0;
    border: 1px solid #FFFFFF;
    margin-bottom: 30px;
    

`