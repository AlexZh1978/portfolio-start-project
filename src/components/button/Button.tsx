import React from 'react';
import styled from "styled-components";
// import styled, {css} from "styled-components";

type ButtonPropsType = {
    as?: 'button' | 'a' ; // Тип HTML-элемента
    href?: string;       // Ссылка, если as="a"
    // icon?: React.ReactNode; // Иконка (может быть JSX-элементом)
    // iconPosition?: 'left' | 'right'; // Позиция иконки
    // color?: string;
    // textStyle?: 'normal' | 'bold' | 'italic' | 'uppercase';
    // textSize?: string;
    backgroundColor?: string;
    children: React.ReactNode;

}


export const Button = (props:ButtonPropsType) => {
    // Меняем HTML-элемент: button или a
    const {
        as = 'button',
        href,
        // icon,
        // iconPosition = 'left',
        // color = '#FFFFFF',
        // textStyle = 'normal',
        // textSize = "20px",
        backgroundColor = 'transparent',
        children,
    } = props;

    return (
         <StyledButton as={as} href={as === 'a' ? href : undefined}  backgroundColor={backgroundColor}    >
            {children}
        </StyledButton>
    );
};

const StyledButton = styled.button<ButtonPropsType>`
    cursor: pointer;
    background-color: ${props => props.backgroundColor};
    
    border: none;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    padding: 10px 16px;
    max-width: fit-content;
    margin: 10px;

`
