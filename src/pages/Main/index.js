import React from 'react';
import { Animated } from 'react-native';
import { PanGestureHandler, State } from 'react-native-gesture-handler';

import { Container, Content } from './styles';

import Header from '~/components/header';
import Tabs from '~/components/tabs';
import Menu from '~/components/menu';
import Card from '~/components/card';

export default function Main() {
  let offset = 0;
  const translateY = new Animated.Value(0);

  const animatedEvent = Animated.event([{
    nativeEvent: { translationY: translateY },
  }], { useNativeDriver: true });

  function onHandlerStateChanged(event) {
    if(event.nativeEvent.oldState === State.ACTIVE){
      let opened = false;
      const {translationY} = event.nativeEvent;
      offset += translationY;

      if(translationY >= 100){
        opened = true;
      }else{
        translateY.setValue(offset);
        translateY.setOffset(0);
        offset = 0;
      }
      Animated.timing(translateY, {
        toValue: opened ? 350 : 0,
        duration: 200,
        useNativeDriver: true
      }).start(() => {
        offset = opened ? 350 : 0
        translateY.setOffset(offset);
        translateY.setValue(0);
      });


    }
  }
  return (
    <Container>
      <Header />
      <Content>
        <Menu translateY={translateY}/>
        <Card translateY={translateY} animatedEvent={animatedEvent}
          onHandlerStateChanged={onHandlerStateChanged}/>
       </Content>

      <Tabs translateY={translateY}/>
    </Container>
  );
};
