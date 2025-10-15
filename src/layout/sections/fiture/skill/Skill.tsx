// import React from 'react';

import {Icon} from "../../../../components/icon/Icon.tsx";
import styled from "styled-components";
import {FlexWrapper} from "../../../../components/FlexWrapper.tsx";

type SkillPropsType = {
    iconId: string;
    title: string;
}
export const Skill = (props:SkillPropsType) => {
    return (
        <StyledSkill>
            <Icon iconId={props.iconId} />
            <SkillTitle>{props.title}</SkillTitle>
        </StyledSkill>
    );
};

const StyledSkill = styled(FlexWrapper)`

`
const SkillTitle = styled.h3`
    
`
