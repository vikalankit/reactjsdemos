import React from 'react';
import {StyledTitle, StyledContainer, StyledButton, MyButton} from './welcome.style';

const Welcome = function(){
    return(
        <StyledContainer>
            <StyledTitle>
                Styled Components Example
            </StyledTitle>
            <StyledButton>Styled Button</StyledButton>
            <StyledButton primary>Primary Button</StyledButton>
            <MyButton>My Button</MyButton>
            <MyButton primary>My Button</MyButton>
        </StyledContainer>

    );
}

export default Welcome;