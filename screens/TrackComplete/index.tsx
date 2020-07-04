import React from 'react';

import CongratsCard from '../../components/CongratsCard';
import UpperTextBox from '../../components/UpperTextBox';

import { Container, InnerContainer } from './styles';

const TrackComplete: React.FC = () => {
  return (
    <Container>
      <UpperTextBox />
      <InnerContainer>
        <CongratsCard />
      </InnerContainer>
    </Container>
  );
};

export default TrackComplete;
