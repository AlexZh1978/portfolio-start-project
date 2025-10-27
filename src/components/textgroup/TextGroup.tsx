import styled from "styled-components";
import {FlexWrapper} from "../FlexWrapper.tsx";


// import React from 'react';



type TextGroupPropsType = {
    width?: string;
    height?: string;
    left?: string;
    top?: string;
}
export const TextGroup = styled(FlexWrapper).attrs({
    $direction: 'column',
    $align: 'start',
})<TextGroupPropsType>`
    position: absolute;
    left: ${props=>props.left || "0"};
    top: ${props=>props.top || "0"};
    
    width: ${props=>props.width || '100%'};
    height: ${props=>props.height || '100%'};

`

type StatisticsPropsType = {
    width?: string;
    height?: string;
    fontSize?: string;
}
export const Statistics =  styled.span<StatisticsPropsType>`
    width: ${props => props.width || '1rem'};
    height: ${props => props.height || '1rem'};
    color: #676CDB;
    display: inline-block;
    font-family: Playfair Display, sans-serif;
    font-weight: 700;
    font-size: ${props => props.fontSize || '1rem'};
    line-height: 120%;
    letter-spacing: 0;
    white-space: nowrap;
`
export type TextPropsType = {
    width?: string;
    height?: string;
    color?: string;
    $fontFamily?: string;
    $fontWeight?: string;
    fontSize?: string;
    lineHeight?: string;
    letterSpacing?: string;
    position?: string;
    top?: string;
    left?: string;
}
export const StyledFragmentText = styled.span<TextPropsType>`
    width: ${props => props.width || '1rem'};
    height: ${props => props.height || '1rem'};
    color: ${props => props.color || '#FFFFFF'};
    display: inline-block;
    font-family:  ${props => props.$fontFamily || 'Playfair Display, sans-serif'}; 
    font-weight: ${props => props.$fontWeight || '700'}; 
    font-size: ${props => props.fontSize || '1rem'};
    line-height: ${props => props.lineHeight || '1rem'};
    letter-spacing: ${props => props.letterSpacing || '0'};
    position: ${props => props.position || 'relative'};
    top: ${props => props.top || '0'};
    left: ${props => props.left || '0'};

`
