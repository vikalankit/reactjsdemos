
import styled from "styled-components";

export const Title = styled.h1`
        font-size:1.5 rem;
        text-align:center;
        color:blue;
        `;

export const Wrapper = styled.div`
        padding:4 rem;
        background:yellow;
        `;

        export const Button = styled.button<{primary?: any}>`
        background: ${props => (props.primary ? 'green' : 'blue')};
        color: ${props => props.primary ? "white" : "black"};
        
  &:hover {
        color: white;
        background-color: ${props =>
          props.primary ? 'violet' : 'palevioletred'};
      }
        `; 

        export const MyButton = styled(Button)`
        color:teal;
        border-color:red;
        `;