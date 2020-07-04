import React from 'react';
import { Container } from './styles';
import ProfileName from '../ProfileName';

const UpperTextBox: React.FC = ({ children }) => {
  return (
    <Container>
      <ProfileName />
      {children}
    </Container>
  );
};

export default UpperTextBox;
