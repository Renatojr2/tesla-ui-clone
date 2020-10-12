import React from 'react';
import DefaultOverLayContent from '../DefaultOverLayContent';

import { ModelSection, ModelWrapper } from '../model';

import { Container } from './styles';

const page: React.FC = () => {
  return (
    <Container>
      <ModelWrapper>
        <div>
          {[
            'Model one',
            'Model two',
            'Model three',
            'Model four',
            'Model five',
            'Model six',
            'Model seven',
          ].map(models => (
            <ModelSection
              key={models}
              className="colored"
              modelName={models}
              overLayNode={
                <DefaultOverLayContent
                  label={models}
                  description="description"
                />
              }
            />
          ))}
        </div>
      </ModelWrapper>
    </Container>
  );
};

export default page;
