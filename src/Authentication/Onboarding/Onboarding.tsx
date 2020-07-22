import React from 'react';
import { Dimensions, StyleSheet } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler'

import { Container, Slider, Footer, FooterAbsolute, FooterContent } from './styles';
import Slide from './Slide';

const { width } = Dimensions.get('window')

const Onboarding: React.FC = () => {
  return (
    <Container>
      <Slider>
        <ScrollView 
          horizontal
          snapToInterval={width}
          decelerationRate='fast'
          showsHorizontalScrollIndicator={false}
          bounces={false}
        >
          <Slide label='Relaxed' />
          <Slide label='Playful' right />
          <Slide label='Excentric' />
          <Slide label='Funky' right />
        </ScrollView>
      </Slider>
      <Footer>
        <FooterAbsolute style={{ ...StyleSheet.absoluteFillObject }} />
        <FooterContent>

        </FooterContent>
      </Footer>
    </Container>
  );
}

export default Onboarding;