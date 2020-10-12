import React from 'react';

import { Container, Header, Buttons } from './styles';

interface Props {
  label: String;
  description: String;
}

const DefaultOverLayContent: React.FC<Props> = ({ label, description }) => {
  return (
    <Container>
      <Header>
        <h1>{label}</h1>
        <h2>{description}</h2>
      </Header>

      <Buttons>
        <button>Custom Order</button>
        <button className='white'>Existing Inventory</button>
      </Buttons>
    </Container>
  );
};

export default DefaultOverLayContent;
