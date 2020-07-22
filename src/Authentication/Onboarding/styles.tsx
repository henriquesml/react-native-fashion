import styled from 'styled-components/native';

import { Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window')

const SLIDE_HEIGHT = 0.61 * height

interface TitleContainerProps {
  rightPosition: boolean
}

export const Container = styled.View`
  flex: 1;
  background-color: white;
`;

export const Slider = styled.View`
  height: ${SLIDE_HEIGHT};
  background-color: cyan;
  border-bottom-right-radius: 75px;
`;

export const SlideContainer = styled.View`
  width: ${width};
`;

export const TitleContainer = styled.View<TitleContainerProps>`
  height: 100px;
  justify-content: center;
  transform: translate(${ props => props.rightPosition ?(100 - SLIDE_HEIGHT) / 2 :  (SLIDE_HEIGHT - 100) / 2 }px, ${ props => props.rightPosition ? width / 2 - 50 : width / 2 - 50}px) rotate(${ props => props.rightPosition ? '-90deg' : '90deg'});
  
`;

export const Title = styled.Text`
  font-size: 80px;
  line-height: 80px;
  font-family: "SFProText-Bold";
  color: white;
  text-align: center;
`;

export const Footer = styled.View`
  flex: 1;
`;

export const FooterAbsolute = styled.View`
  background-color: cyan;
`;

export const FooterContent = styled.View`
  flex: 1;
  background-color: white;
  border-top-left-radius: 75px;
`;