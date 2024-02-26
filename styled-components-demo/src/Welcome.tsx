
import React from 'react';
import {Button, MyButton, Title,Wrapper} from './welcome.style';


const Welcome = function(){
    return(
      <Wrapper>
          <Title>
              Hello World!
          </Title>
          <Button>
              Normal
          </Button>
          <Button primary> Button</Button>
          <MyButton>TTT</MyButton>
      </Wrapper>  
    );
}

export default Welcome;