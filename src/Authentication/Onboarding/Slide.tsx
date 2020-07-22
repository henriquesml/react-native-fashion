import React from 'react';
import { SlideContainer, TitleContainer, Title } from './styles';

interface SliderProps {
  label: string,
  right?: boolean,
}

const Slide: React.FC<SliderProps> = ({ label, right = false }) => {
  console.log(right)
  return (
    <SlideContainer>
      <TitleContainer rightPosition={right}>
        <Title>{label}</Title>
      </TitleContainer>
    </SlideContainer>
  );
}

export default Slide;