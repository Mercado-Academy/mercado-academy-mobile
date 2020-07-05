import styled from 'styled-components/native';
import Fonts from '../../../constants/Fonts';

const size = 50;
export const Circle = styled.View`
    display: flex;
    height: ${size}px;
    width: ${size}px;
    justify-content: center;
    align-items: center;
    border-radius: ${size / 2}px
    background-color: #8DCDE9;
    padding-bottom:3px;
    margin-top: 20px
`;

export const CircleText = styled.Text`
    color: #FFF;
    font-size: 26px;
    font-family: ${Fonts.montserratBold}
`;