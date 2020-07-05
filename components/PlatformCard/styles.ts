import styled from 'styled-components/native';

interface Container {
  color: string;
}

export const Container = styled.View<Container>`
  border-radius: 20px;
  height: 90px;
  background-color: ${({ color }) => color};
  padding: 10px;
  width: 185px;
  border-radius: 25px;
  align-items: center;
  justify-content: center;
`;
