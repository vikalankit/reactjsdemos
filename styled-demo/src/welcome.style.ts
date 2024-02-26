import styled from 'styled-components';

export const StyledTitle = styled.h1`
    font-size: 1.5 rem;
    text-align:center;
    color:blue;
    border: 1rem;
    border-color:red;
`;

export const StyledContainer = styled.div`
    padding:4 rem;
    background:yellow;
    border-color:green;
`;

export const StyledButton = styled.button<{primary?:any}>`
    background:${props => props.primary ? 'green' : ' blue'};
    color:${props => props.primary ? 'white' : ' black'};
    &:hover{
        color:white;
        background:${props => props.primary ? "blue" : "red"};
    }
`;

export const MyButton = styled(StyledButton)`
    color:red;
    background: ${props => props.primary ? "yellow" : "green"};
`;

